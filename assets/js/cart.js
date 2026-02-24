(function initCartItemRenderer() {
  var catalog = window.productCatalog && Array.isArray(window.productCatalog.products)
    ? window.productCatalog.products
    : [];
  var container = document.querySelector('.js-cart-items-container');
  if (!container || !catalog.length) {
    return;
  }

  var cartStorageKey = 'gg_fashion_cart_items';

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function readCartItems() {
    try {
      var raw = window.localStorage.getItem(cartStorageKey);
      var parsed = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(parsed)) {
        return [];
      }
      return parsed;
    } catch (error) {
      return [];
    }
  }

  function writeCartItems(items) {
    try {
      window.localStorage.setItem(cartStorageKey, JSON.stringify(items));
    } catch (error) {
      // Ignore storage errors and keep UI usable.
    }
  }

  function getCatalogProductById(id) {
    var numericId = Number(id);
    return catalog.find(function (product) {
      return Number(product.id) === numericId;
    }) || null;
  }

  function normalizeCartItems(rawItems) {
    var normalized = rawItems.map(function (item) {
      var product = getCatalogProductById(item && item.id);
      if (!product) {
        return null;
      }
      var minQty = Number(product.minQty) || 1;
      var maxQty = Number(product.maxQty) || Math.max(minQty, 10);
      var requestedQty = Number(item.qty);
      var qty = Number.isFinite(requestedQty) ? requestedQty : (Number(product.qty) || minQty);
      qty = Math.max(minQty, Math.min(maxQty, qty));

      var allSizes = Array.isArray(product.sizes) && product.sizes.length ? product.sizes : ['Free Size'];
      var selectedSize = item && item.size ? String(item.size) : (product.selectedSize || allSizes[0]);
      if (allSizes.indexOf(selectedSize) === -1) {
        selectedSize = allSizes[0];
      }

      return {
        id: Number(product.id),
        qty: qty,
        size: selectedSize
      };
    }).filter(Boolean);

    if (!normalized.length) {
      var defaultProduct = catalog[0];
      if (!defaultProduct) {
        return [];
      }
      var defaultMinQty = Number(defaultProduct.minQty) || 1;
      var defaultSizes = Array.isArray(defaultProduct.sizes) && defaultProduct.sizes.length ? defaultProduct.sizes : ['Free Size'];
      normalized = [{
        id: Number(defaultProduct.id),
        qty: Number(defaultProduct.qty) || defaultMinQty,
        size: defaultProduct.selectedSize || defaultSizes[0]
      }];
    }

    return normalized;
  }

  function formatInr(amount) {
    var numericAmount = Number(amount) || 0;
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(numericAmount);
  }

  function getDeliveryText(product) {
    return product && product.shippingReturns && product.shippingReturns.deliveryText
      ? product.shippingReturns.deliveryText
      : 'Delivery details';
  }

  function renderCartItems(items) {
    if (!items.length) {
      container.innerHTML = '<div class="border border-border rounded-md p-5 text-sm text-[#666666]">Your cart is empty.</div>';
      return;
    }

    container.innerHTML = items.map(function (item) {
      var product = getCatalogProductById(item.id);
      if (!product) {
        return '';
      }

      product.qty = item.qty;
      product.selectedSize = item.size;

      var imageSrc = product.image || (Array.isArray(product.images) && product.images[0]) || '../assets/images/oc1.avif';
      var brand = escapeHtml(product.brand || '');
      var title = escapeHtml(product.name || product.fullTitle || '');
      var deliveryText = escapeHtml(getDeliveryText(product));
      var priceText = escapeHtml(formatInr(product.price));
      var mrpText = escapeHtml(formatInr(product.mrp));
      var discountText = escapeHtml((Number(product.discountPercent) || 0) + '% OFF');

      return '' +
        '<div class="js-cart-item flex gap-3 sm:gap-4 border border-border rounded-md p-3 sm:p-4 md:items-center" data-product-id="' + product.id + '">' +
        '  <div class="js-cart-product-image" data-product-id="' + product.id + '">' +
        '    <img src="' + imageSrc + '" alt="Product image" class="js-cart-product-image-tag w-20 h-28 sm:w-36 sm:h-44 object-cover rounded cursor-pointer">' +
        '  </div>' +
        '  <div class="flex-1 min-w-0 space-y-2">' +
        '    <div class="flex justify-between items-start">' +
        '      <div class="js-cart-product-info" data-product-id="' + product.id + '">' +
        '        <div class="js-cart-brand uppercase text-text-muted tracking-[1.2px] font-semibold md:text-sm text-xs">' + brand + '</div>' +
        '        <h1 class="js-cart-title text-sm md:text-lg font-semibold line-clamp-2 text-[#333333]">' + title + '</h1>' +
        '      </div>' +
        '      <div class="js-cart-delivery text-sm text-[#2E7D32] font-normal hidden sm:flex items-center gap-1" data-product-id="' + product.id + '">' +
        '        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2727 7.45144L15.3811 5.22238C15.2961 5.03132 15.1714 4.87741 15.0069 4.76065C14.8424 4.64389 14.654 4.58551 14.4417 4.58551C14.4417 4.58551 14.439 4.58551 14.4337 4.58551C14.4284 4.58551 14.4257 4.58551 14.4257 4.58551H12.2285V4.07601C12.2285 3.93802 12.1781 3.8186 12.0773 3.71776C11.9764 3.61693 11.857 3.56651 11.719 3.56651H2.03853C1.75194 3.56651 1.51046 3.66469 1.31409 3.86106C1.11772 4.05743 1.01953 4.29891 1.01953 4.58551V11.7185C1.01953 12.0051 1.11772 12.2466 1.31409 12.443C1.51046 12.6393 1.75194 12.7375 2.03853 12.7375H3.12122C3.23798 13.1833 3.47681 13.5495 3.8377 13.8361C4.1986 14.1227 4.61787 14.266 5.09553 14.266C5.57319 14.266 5.99246 14.1227 6.35336 13.8361C6.71425 13.5495 6.95308 13.1886 7.06984 12.7534V12.7375H10.2542C10.371 13.1833 10.6098 13.5495 10.9707 13.8361C11.3316 14.1227 11.7509 14.266 12.2285 14.266C12.7062 14.266 13.1255 14.1227 13.4864 13.8361C13.8473 13.5495 14.0861 13.1886 14.2028 12.7534V12.7375H15.2855C15.5721 12.7375 15.8136 12.6393 16.01 12.443C16.2063 12.2466 16.3045 12.0051 16.3045 11.7185V7.64251C16.3045 7.61066 16.3019 7.57882 16.2966 7.54697C16.2913 7.51513 16.2833 7.48329 16.2727 7.45144ZM5.09553 13.247C4.80894 13.247 4.56746 13.1488 4.37109 12.9525C4.17472 12.7561 4.07653 12.5146 4.07653 12.228C4.07653 11.9414 4.17472 11.6999 4.37109 11.5036C4.56746 11.3072 4.80894 11.209 5.09553 11.209C5.38212 11.209 5.62361 11.3072 5.81998 11.5036C6.01635 11.6999 6.11453 11.9414 6.11453 12.228C6.11453 12.5146 6.01635 12.7561 5.81998 12.9525C5.62361 13.1488 5.38212 13.247 5.09553 13.247ZM2.03853 8.66151V4.58551H11.2095V8.66151H2.03853ZM12.2285 13.247C11.9419 13.247 11.7005 13.1488 11.5041 12.9525C11.3077 12.7561 11.2095 12.5146 11.2095 12.228C11.2095 11.9414 11.3077 11.6999 11.5041 11.5036C11.7005 11.3072 11.9419 11.209 12.2285 11.209C12.5151 11.209 12.7566 11.3072 12.953 11.5036C13.1493 11.6999 13.2475 11.9414 13.2475 12.228C13.2475 12.5146 13.1493 12.7561 12.953 12.9525C12.7566 13.1488 12.5151 13.247 12.2285 13.247ZM12.2285 7.13301V5.60451H14.4257L15.0467 7.13301H12.2285Z" fill="#2E7D32" /></svg>' +
        '        <span class="js-cart-delivery-text">' + deliveryText + '</span>' +
        '      </div>' +
        '    </div>' +
        '    <div class="flex gap-2">' +
        '      <div class="relative js-cart-size-dropdown" data-product-id="' + product.id + '">' +
        '        <button type="button" aria-expanded="false" aria-label="Select size" class="js-cart-size-toggle flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-border rounded-md bg-[#f5f5f5] text-[#555555] hover:border-primary transition-colors cursor-pointer">' +
        '          <span class="js-cart-size-label">Size: </span><span class="js-cart-size-value">' + escapeHtml(item.size) + '</span>' +
        '          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-3 h-3 text-muted-foreground transition-transform"><path d="m6 9 6 6 6-6"></path></svg>' +
        '        </button>' +
        '        <div class="js-cart-size-options absolute top-full left-0 mt-1 w-24 bg-white border border-border rounded-md shadow-lg z-50 max-h-40 overflow-y-auto hidden"></div>' +
        '      </div>' +
        '      <div class="relative js-cart-qty-dropdown" data-product-id="' + product.id + '">' +
        '        <button type="button" aria-expanded="false" aria-label="Select quantity" class="js-cart-qty-toggle flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-border rounded-md bg-[#f5f5f5] text-[#555555] hover:border-primary transition-colors cursor-pointer">' +
        '          <span class="js-cart-qty-label">Qty: </span><span class="js-cart-qty-value">' + item.qty + '</span>' +
        '          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-3 h-3 text-muted-foreground transition-transform"><path d="m6 9 6 6 6-6"></path></svg>' +
        '        </button>' +
        '        <div class="js-cart-qty-options absolute top-full left-0 mt-1 w-24 bg-white border border-border rounded-md shadow-lg z-50 max-h-40 overflow-y-auto hidden"></div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="js-cart-price-info flex gap-2 items-end py-2" data-product-id="' + product.id + '">' +
        '      <span class="js-cart-price font-bold text-black md:text-lg text-sm leading-none">' + priceText + '</span>' +
        '      <span class="js-cart-mrp text-[#999999] md:text-sm text-xs line-through font-normal leading-none">' + mrpText + '</span>' +
        '      <span class="js-cart-discount font-bold text-primary-dark md:text-sm text-xs leading-none">' + discountText + '</span>' +
        '    </div>' +
        '    <div class="js-cart-delivery md:text-sm text-xs text-[#2E7D32] font-normal flex items-center gap-1 sm:hidden" data-product-id="' + product.id + '">' +
        '      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2727 7.45144L15.3811 5.22238C15.2961 5.03132 15.1714 4.87741 15.0069 4.76065C14.8424 4.64389 14.654 4.58551 14.4417 4.58551C14.4417 4.58551 14.439 4.58551 14.4337 4.58551C14.4284 4.58551 14.4257 4.58551 14.4257 4.58551H12.2285V4.07601C12.2285 3.93802 12.1781 3.8186 12.0773 3.71776C11.9764 3.61693 11.857 3.56651 11.719 3.56651H2.03853C1.75194 3.56651 1.51046 3.66469 1.31409 3.86106C1.11772 4.05743 1.01953 4.29891 1.01953 4.58551V11.7185C1.01953 12.0051 1.11772 12.2466 1.31409 12.443C1.51046 12.6393 1.75194 12.7375 2.03853 12.7375H3.12122C3.23798 13.1833 3.47681 13.5495 3.8377 13.8361C4.1986 14.1227 4.61787 14.266 5.09553 14.266C5.57319 14.266 5.99246 14.1227 6.35336 13.8361C6.71425 13.5495 6.95308 13.1886 7.06984 12.7534V12.7375H10.2542C10.371 13.1833 10.6098 13.5495 10.9707 13.8361C11.3316 14.1227 11.7509 14.266 12.2285 14.266C12.7062 14.266 13.1255 14.1227 13.4864 13.8361C13.8473 13.5495 14.0861 13.1886 14.2028 12.7534V12.7375H15.2855C15.5721 12.7375 15.8136 12.6393 16.01 12.443C16.2063 12.2466 16.3045 12.0051 16.3045 11.7185V7.64251C16.3045 7.61066 16.3019 7.57882 16.2966 7.54697C16.2913 7.51513 16.2833 7.48329 16.2727 7.45144ZM5.09553 13.247C4.80894 13.247 4.56746 13.1488 4.37109 12.9525C4.17472 12.7561 4.07653 12.5146 4.07653 12.228C4.07653 11.9414 4.17472 11.6999 4.37109 11.5036C4.56746 11.3072 4.80894 11.209 5.09553 11.209C5.38212 11.209 5.62361 11.3072 5.81998 11.5036C6.01635 11.6999 6.11453 11.9414 6.11453 12.228C6.11453 12.5146 6.01635 12.7561 5.81998 12.9525C5.62361 13.1488 5.38212 13.247 5.09553 13.247ZM2.03853 8.66151V4.58551H11.2095V8.66151H2.03853ZM12.2285 13.247C11.9419 13.247 11.7005 13.1488 11.5041 12.9525C11.3077 12.7561 11.2095 12.5146 11.2095 12.228C11.2095 11.9414 11.3077 11.6999 11.5041 11.5036C11.7005 11.3072 11.9419 11.209 12.2285 11.209C12.5151 11.209 12.7566 11.3072 12.953 11.5036C13.1493 11.6999 13.2475 11.9414 13.2475 12.228C13.2475 12.5146 13.1493 12.7561 12.953 12.9525C12.7566 13.1488 12.5151 13.247 12.2285 13.247ZM12.2285 7.13301V5.60451H14.4257L15.0467 7.13301H12.2285Z" fill="#2E7D32" /></svg>' +
        '      <span class="js-cart-delivery-text">' + deliveryText + '</span>' +
        '    </div>' +
        '    <div class="js-cart-actions flex items-center gap-4 pt-3 border-t border-[#f5f5f5]" data-product-id="' + product.id + '">' +
        '      <button type="button" class="js-cart-remove-btn text-[#666666] md:text-sm text-xs font-semibold flex gap-1 items-center cursor-pointer hover:text-primary transition-colors"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7162 2.60354H9.54655V2.16961C9.54655 1.808 9.41999 1.50064 9.16687 1.24751C8.91374 0.994385 8.60638 0.867823 8.24477 0.867823H5.6412C5.27959 0.867823 4.97222 0.994385 4.7191 1.24751C4.46597 1.50064 4.33941 1.808 4.33941 2.16961V2.60354H2.16977C2.05225 2.60354 1.95054 2.64648 1.86466 2.73236C1.77878 2.81824 1.73584 2.91994 1.73584 3.03747C1.73584 3.15499 1.77878 3.25669 1.86466 3.34257C1.95054 3.42845 2.05225 3.47139 2.16977 3.47139H2.6037V11.2821C2.6037 11.5262 2.68732 11.7319 2.85456 11.8991C3.02181 12.0663 3.22747 12.15 3.47155 12.15H10.4144C10.6585 12.15 10.8642 12.0663 11.0314 11.8991C11.1986 11.7319 11.2823 11.5262 11.2823 11.2821V3.47139H11.7162C11.8337 3.47139 11.9354 3.42845 12.0213 3.34257C12.1072 3.25669 12.1501 3.15499 12.1501 3.03747C12.1501 2.91994 12.1072 2.81824 12.0213 2.73236C11.9354 2.64648 11.8337 2.60354 11.7162 2.60354ZM5.20727 2.16961C5.20727 2.05209 5.25021 1.95038 5.33609 1.8645C5.42197 1.77862 5.52367 1.73568 5.6412 1.73568H8.24477C8.36229 1.73568 8.46399 1.77862 8.54987 1.8645C8.63576 1.95038 8.6787 2.05209 8.6787 2.16961V2.60354H5.20727V2.16961ZM10.4144 11.2821H3.47155V3.47139H10.4144V11.2821ZM6.07513 5.64104V9.11247C6.07513 9.22999 6.03218 9.33169 5.9463 9.41757C5.86042 9.50345 5.75872 9.54639 5.6412 9.54639C5.52367 9.54639 5.42197 9.50345 5.33609 9.41757C5.25021 9.33169 5.20727 9.22999 5.20727 9.11247V5.64104C5.20727 5.52351 5.25021 5.42181 5.33609 5.33593C5.42197 5.25005 5.52367 5.20711 5.6412 5.20711C5.75872 5.20711 5.86042 5.25005 5.9463 5.33593C6.03218 5.42181 6.07513 5.52351 6.07513 5.64104ZM8.6787 5.64104V9.11247C8.6787 9.22999 8.63576 9.33169 8.54987 9.41757C8.46399 9.50345 8.36229 9.54639 8.24477 9.54639C8.12725 9.54639 8.02554 9.50345 7.93966 9.41757C7.85378 9.33169 7.81084 9.22999 7.81084 9.11247V5.64104C7.81084 5.52351 7.85378 5.42181 7.93966 5.33593C8.02554 5.25005 8.12725 5.20711 8.24477 5.20711C8.36229 5.20711 8.46399 5.25005 8.54987 5.33593C8.63576 5.42181 8.6787 5.52351 8.6787 5.64104Z" fill="currentColor"/></svg>Remove</button>' +
        '      <button type="button" aria-pressed="false" class="js-cart-move-wishlist-btn text-[#666666] md:text-sm text-xs font-semibold flex gap-1 items-center cursor-pointer hover:text-primary transition-colors"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.65522 2.16958C9.09473 2.16958 8.57944 2.28484 8.10935 2.51537C7.63926 2.74589 7.25053 3.06456 6.94316 3.47136C6.6358 3.06456 6.24707 2.74589 5.77698 2.51537C5.30689 2.28484 4.7916 2.16958 4.23111 2.16958C3.77006 2.16958 3.33613 2.25998 2.92932 2.44078C2.51348 2.61255 2.15413 2.84985 1.85128 3.1527C1.54844 3.45554 1.31113 3.81489 1.13937 4.23074C0.958566 4.63755 0.868164 5.07148 0.868164 5.53253C0.868164 6.48174 1.16197 7.3722 1.74958 8.2039C2.33719 9.04464 2.99035 9.77915 3.70904 10.4074C4.42773 11.0357 5.09897 11.5397 5.72274 11.9194C6.33747 12.2901 6.67648 12.4935 6.73976 12.5296C6.76688 12.5477 6.79852 12.5613 6.83468 12.5703C6.87084 12.5793 6.907 12.5839 6.94316 12.5839C6.97932 12.5839 7.01549 12.5793 7.05165 12.5703C7.08781 12.5613 7.11945 12.5477 7.14657 12.5296C7.20985 12.4935 7.54886 12.2901 8.16359 11.9194C8.78736 11.5397 9.45859 11.0357 10.1773 10.4074C10.896 9.77915 11.5491 9.04464 12.1367 8.2039C12.7244 7.3722 13.0182 6.48174 13.0182 5.53253C13.0182 5.07148 12.9278 4.63755 12.747 4.23074C12.5752 3.81489 12.3379 3.45554 12.035 3.1527C11.7322 2.84985 11.3729 2.61255 10.957 2.44078C10.5502 2.25998 10.1163 2.16958 9.65522 2.16958ZM6.94316 11.6482C6.69908 11.5036 6.28775 11.2414 5.70918 10.8617C5.13965 10.482 4.55882 10.0187 3.96669 9.47178C3.37455 8.92485 2.857 8.31238 2.41403 7.63437C1.96203 6.96539 1.73602 6.26478 1.73602 5.53253C1.73602 4.84547 1.98011 4.25786 2.46828 3.76969C2.95645 3.28152 3.54406 3.03744 4.23111 3.03744C4.75544 3.03744 5.22553 3.16852 5.64138 3.43068C6.05723 3.69285 6.35555 4.04994 6.53636 4.50195C6.57252 4.58331 6.62676 4.64885 6.69908 4.69857C6.7714 4.74829 6.85276 4.77315 6.94316 4.77315C7.03357 4.77315 7.11493 4.74829 7.18725 4.69857C7.25957 4.64885 7.31381 4.58331 7.34997 4.50195C7.53078 4.04994 7.8291 3.69285 8.24495 3.43068C8.6608 3.16852 9.13089 3.03744 9.65522 3.03744C10.3423 3.03744 10.9299 3.28152 11.4181 3.76969C11.9062 4.25786 12.1503 4.84547 12.1503 5.53253C12.1503 6.25574 11.9243 6.95635 11.4723 7.63437C11.0293 8.31238 10.5118 8.92485 9.91964 9.47178C9.32751 10.0187 8.74668 10.482 8.17715 10.8617C7.59858 11.2414 7.18725 11.5036 6.94316 11.6482Z" fill="currentColor"/></svg><span class="js-cart-wishlist-text">Move to Wishlist</span></button>' +
        '    </div>' +
        '  </div>' +
        '</div>';
    }).join('');
  }

  var cartItems = normalizeCartItems(readCartItems());
  writeCartItems(cartItems);
  renderCartItems(cartItems);
})();

(function initCartSizeDropdowns() {
  var catalog = window.productCatalog && Array.isArray(window.productCatalog.products)
    ? window.productCatalog.products
    : [];

  var dropdowns = document.querySelectorAll('.js-cart-size-dropdown');
  if (!dropdowns.length || !catalog.length) {
    return;
  }

  var productById = {};
  catalog.forEach(function (product) {
    if (product && typeof product.id !== 'undefined') {
      productById[String(product.id)] = product;
    }
  });
  var wishlistStorageKey = 'gg_fashion_wishlist_ids';

  function readWishlistIds() {
    try {
      var raw = window.localStorage.getItem(wishlistStorageKey);
      if (!raw) {
        return [];
      }
      var parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) {
        return [];
      }
      return parsed.map(function (id) {
        return Number(id);
      }).filter(function (id) {
        return Number.isFinite(id) && id > 0;
      });
    } catch (error) {
      return [];
    }
  }

  function addWishlistProduct(productId) {
    var numericId = Number(productId);
    if (!Number.isFinite(numericId) || numericId <= 0) {
      return;
    }
    var ids = readWishlistIds();
    if (ids.indexOf(numericId) === -1) {
      ids.push(numericId);
      try {
        window.localStorage.setItem(wishlistStorageKey, JSON.stringify(ids));
      } catch (error) {
        // Ignore storage failures to keep cart actions functional.
      }
    }
  }

  function closeAllSizeDropdowns(exceptDropdown) {
    dropdowns.forEach(function (dropdown) {
      if (exceptDropdown && dropdown === exceptDropdown) {
        return;
      }
      var menu = dropdown.querySelector('.js-cart-size-options');
      var toggle = dropdown.querySelector('.js-cart-size-toggle');
      if (menu) {
        menu.classList.add('hidden');
      }
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  dropdowns.forEach(function (dropdown) {
    var productId = dropdown.getAttribute('data-product-id');
    var product = productById[productId] || catalog[0];
    if (!product) {
      return;
    }

    var toggle = dropdown.querySelector('.js-cart-size-toggle');
    var value = dropdown.querySelector('.js-cart-size-value');
    var optionsContainer = dropdown.querySelector('.js-cart-size-options');

    if (!toggle || !value || !optionsContainer) {
      return;
    }

    var allSizes = Array.isArray(product.sizes) && product.sizes.length
      ? product.sizes.slice()
      : ['Free Size'];

    var availableSizeSet = Array.isArray(product.availableSizes) && product.availableSizes.length
      ? new Set(product.availableSizes)
      : new Set(allSizes);

    var selectedSize = allSizes.indexOf(product.selectedSize) !== -1
      ? product.selectedSize
      : allSizes[0];

    product.selectedSize = selectedSize;

    function renderOptions() {
      value.textContent = selectedSize;

      optionsContainer.innerHTML = allSizes.map(function (size) {
        var isAvailable = availableSizeSet.has(size);
        var isSelected = size === selectedSize;
        var activeClasses = isSelected
          ? 'font-semibold text-primary bg-primary/10'
          : 'text-foreground';
        var disabledClasses = isAvailable
          ? ''
          : ' opacity-40 cursor-not-allowed';

        return '' +
          '<button type="button" data-size="' + size + '" data-available="' + String(isAvailable) + '" ' +
          'class="js-cart-size-option w-full px-3 py-1.5 text-xs text-left hover:bg-accent transition-colors ' + activeClasses + disabledClasses + '">' +
          size +
          '</button>';
      }).join('');
    }

    toggle.addEventListener('click', function (event) {
      event.preventDefault();
      var isHidden = optionsContainer.classList.contains('hidden');
      closeAllSizeDropdowns(dropdown);
      optionsContainer.classList.toggle('hidden', !isHidden);
      toggle.setAttribute('aria-expanded', String(isHidden));
    });

    optionsContainer.addEventListener('click', function (event) {
      var option = event.target.closest('.js-cart-size-option');
      if (!option) {
        return;
      }

      if (option.getAttribute('data-available') !== 'true') {
        return;
      }

      var nextSize = option.getAttribute('data-size');
      if (!nextSize) {
        return;
      }

      selectedSize = nextSize;
      product.selectedSize = nextSize;
      renderOptions();
      closeAllSizeDropdowns();
      document.dispatchEvent(new Event('cart:updated'));
    });

    renderOptions();
  });

  document.addEventListener('click', function (event) {
    var clickedInside = event.target.closest('.js-cart-size-dropdown');
    if (!clickedInside) {
      closeAllSizeDropdowns();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeAllSizeDropdowns();
    }
  });
})();

(function initCartQtyDropdowns() {
  var catalog = window.productCatalog && Array.isArray(window.productCatalog.products)
    ? window.productCatalog.products
    : [];

  var dropdowns = document.querySelectorAll('.js-cart-qty-dropdown');
  if (!dropdowns.length || !catalog.length) {
    return;
  }

  var productById = {};
  catalog.forEach(function (product) {
    if (product && typeof product.id !== 'undefined') {
      productById[String(product.id)] = product;
    }
  });

  function closeAllQtyDropdowns(exceptDropdown) {
    dropdowns.forEach(function (dropdown) {
      if (exceptDropdown && dropdown === exceptDropdown) {
        return;
      }
      var menu = dropdown.querySelector('.js-cart-qty-options');
      var toggle = dropdown.querySelector('.js-cart-qty-toggle');
      if (menu) {
        menu.classList.add('hidden');
      }
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  dropdowns.forEach(function (dropdown) {
    var productId = dropdown.getAttribute('data-product-id');
    var product = productById[productId] || catalog[0];
    if (!product) {
      return;
    }

    var toggle = dropdown.querySelector('.js-cart-qty-toggle');
    var value = dropdown.querySelector('.js-cart-qty-value');
    var optionsContainer = dropdown.querySelector('.js-cart-qty-options');

    if (!toggle || !value || !optionsContainer) {
      return;
    }

    var minQty = Number(product.minQty) || 1;
    var maxQty = Number(product.maxQty) || 10;
    if (maxQty < minQty) {
      maxQty = minQty;
    }

    var qtyOptions = [];
    for (var qtyItem = minQty; qtyItem <= maxQty; qtyItem += 1) {
      qtyOptions.push(qtyItem);
    }

    var selectedQty = Number(product.qty);
    if (Number.isNaN(selectedQty) || selectedQty < minQty || selectedQty > maxQty) {
      selectedQty = minQty;
    }

    product.qty = selectedQty;

    function renderOptions() {
      value.textContent = String(selectedQty);

      optionsContainer.innerHTML = qtyOptions.map(function (qtyItem) {
        var isSelected = qtyItem === selectedQty;
        var activeClasses = isSelected
          ? 'font-semibold text-primary bg-primary/10'
          : 'text-foreground';

        return '' +
          '<button type="button" data-qty="' + qtyItem + '" ' +
          'class="js-cart-qty-option w-full px-3 py-1.5 text-xs text-left hover:bg-accent transition-colors ' + activeClasses + '">' +
          qtyItem +
          '</button>';
      }).join('');
    }

    toggle.addEventListener('click', function (event) {
      event.preventDefault();
      var isHidden = optionsContainer.classList.contains('hidden');
      closeAllQtyDropdowns(dropdown);
      optionsContainer.classList.toggle('hidden', !isHidden);
      toggle.setAttribute('aria-expanded', String(isHidden));
    });

    optionsContainer.addEventListener('click', function (event) {
      var option = event.target.closest('.js-cart-qty-option');
      if (!option) {
        return;
      }

      var nextQty = Number(option.getAttribute('data-qty'));
      if (Number.isNaN(nextQty)) {
        return;
      }

      selectedQty = nextQty;
      product.qty = nextQty;
      renderOptions();
      document.dispatchEvent(new Event('cart:updated'));
      closeAllQtyDropdowns();
    });

    renderOptions();
  });

  document.addEventListener('click', function (event) {
    var clickedInside = event.target.closest('.js-cart-qty-dropdown');
    if (!clickedInside) {
      closeAllQtyDropdowns();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeAllQtyDropdowns();
    }
  });
})();

(function initCartProductInfo() {
  var catalog = window.productCatalog && Array.isArray(window.productCatalog.products)
    ? window.productCatalog.products
    : [];

  var infoBlocks = document.querySelectorAll('.js-cart-product-info');
  if (!infoBlocks.length || !catalog.length) {
    return;
  }

  var productById = {};
  catalog.forEach(function (product) {
    if (product && typeof product.id !== 'undefined') {
      productById[String(product.id)] = product;
    }
  });

  infoBlocks.forEach(function (block) {
    var productId = block.getAttribute('data-product-id');
    var product = productById[productId] || catalog[0];
    if (!product) {
      return;
    }

    var brandElement = block.querySelector('.js-cart-brand');
    var titleElement = block.querySelector('.js-cart-title');

    if (brandElement) {
      brandElement.textContent = product.brand || '';
    }

    if (titleElement) {
      titleElement.textContent = product.name || product.fullTitle || '';
    }
  });
})();

(function initCartDeliveryText() {
  var catalog = window.productCatalog && Array.isArray(window.productCatalog.products)
    ? window.productCatalog.products
    : [];

  var deliveryBlocks = document.querySelectorAll('.js-cart-delivery');
  if (!deliveryBlocks.length || !catalog.length) {
    return;
  }

  var productById = {};
  catalog.forEach(function (product) {
    if (product && typeof product.id !== 'undefined') {
      productById[String(product.id)] = product;
    }
  });

  deliveryBlocks.forEach(function (block) {
    var productId = block.getAttribute('data-product-id');
    var product = productById[productId] || catalog[0];
    if (!product) {
      return;
    }

    var textElement = block.querySelector('.js-cart-delivery-text');
    if (!textElement) {
      return;
    }

    var deliveryText = product.shippingReturns && product.shippingReturns.deliveryText
      ? product.shippingReturns.deliveryText
      : textElement.textContent;

    textElement.textContent = deliveryText;
  });
})();

(function initCartProductImage() {
  var catalog = window.productCatalog && Array.isArray(window.productCatalog.products)
    ? window.productCatalog.products
    : [];

  var imageBlocks = document.querySelectorAll('.js-cart-product-image');
  if (!imageBlocks.length || !catalog.length) {
    return;
  }

  var productById = {};
  catalog.forEach(function (product) {
    if (product && typeof product.id !== 'undefined') {
      productById[String(product.id)] = product;
    }
  });

  imageBlocks.forEach(function (block) {
    var productId = block.getAttribute('data-product-id');
    var product = productById[productId] || catalog[0];
    if (!product) {
      return;
    }

    var imageElement = block.querySelector('.js-cart-product-image-tag');
    if (!imageElement) {
      return;
    }

    var imageSrc = product.image || (Array.isArray(product.images) && product.images[0]) || imageElement.getAttribute('src');
    var imageAlt = product.name || product.fullTitle || 'Product image';

    if (imageSrc) {
      imageElement.setAttribute('src', imageSrc);
    }
    imageElement.setAttribute('alt', imageAlt);
  });
})();

(function initCartPriceInfo() {
  var catalog = window.productCatalog && Array.isArray(window.productCatalog.products)
    ? window.productCatalog.products
    : [];

  var priceBlocks = document.querySelectorAll('.js-cart-price-info');
  if (!priceBlocks.length || !catalog.length) {
    return;
  }

  var productById = {};
  catalog.forEach(function (product) {
    if (product && typeof product.id !== 'undefined') {
      productById[String(product.id)] = product;
    }
  });

  function formatInr(amount) {
    var numericAmount = Number(amount) || 0;
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(numericAmount);
  }

  priceBlocks.forEach(function (block) {
    var productId = block.getAttribute('data-product-id');
    var product = productById[productId] || catalog[0];
    if (!product) {
      return;
    }

    var priceElement = block.querySelector('.js-cart-price');
    var mrpElement = block.querySelector('.js-cart-mrp');
    var discountElement = block.querySelector('.js-cart-discount');

    var price = Number(product.price) || 0;
    var mrp = Number(product.mrp) || 0;
    var discountPercent = Number(product.discountPercent);

    if (Number.isNaN(discountPercent)) {
      discountPercent = mrp > price && mrp > 0
        ? Math.round(((mrp - price) / mrp) * 100)
        : 0;
    }

    if (priceElement) {
      priceElement.textContent = formatInr(price);
    }

    if (mrpElement) {
      mrpElement.textContent = formatInr(mrp);
    }

    if (discountElement) {
      discountElement.textContent = discountPercent > 0 ? (discountPercent + '% OFF') : '';
    }
  });
})();

(function initCartItemActions() {
  var catalog = window.productCatalog && Array.isArray(window.productCatalog.products)
    ? window.productCatalog.products
    : [];

  var actionRows = document.querySelectorAll('.js-cart-actions');
  if (!actionRows.length || !catalog.length) {
    return;
  }

  var productById = {};
  catalog.forEach(function (product) {
    if (product && typeof product.id !== 'undefined') {
      productById[String(product.id)] = product;
    }
  });
  var wishlistStorageKey = 'gg_fashion_wishlist_ids';

  function readWishlistIds() {
    try {
      var raw = window.localStorage.getItem(wishlistStorageKey);
      var parsed = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(parsed)) {
        return [];
      }
      return parsed.map(function (id) {
        return Number(id);
      }).filter(function (id) {
        return Number.isFinite(id) && id > 0;
      });
    } catch (error) {
      return [];
    }
  }

  function addWishlistProduct(productId) {
    var numericId = Number(productId);
    if (!Number.isFinite(numericId) || numericId <= 0) {
      return;
    }
    var ids = readWishlistIds();
    if (ids.indexOf(numericId) === -1) {
      ids.push(numericId);
      try {
        window.localStorage.setItem(wishlistStorageKey, JSON.stringify(ids));
      } catch (error) {
        // Ignore storage failures to keep cart actions usable.
      }
    }
  }

  var removeModal = document.querySelector('.js-cart-remove-modal');
  var removeConfirmButton = document.querySelector('.js-cart-remove-confirm');
  var removeCancelButtons = document.querySelectorAll('.js-cart-remove-cancel');
  var pendingRemoveAction = null;

  function closeRemoveModal() {
    if (!removeModal) {
      return;
    }
    removeModal.classList.add('hidden');
    removeModal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
    pendingRemoveAction = null;
  }

  function openRemoveModal(onConfirm) {
    if (!removeModal || !removeConfirmButton) {
      onConfirm();
      return;
    }

    pendingRemoveAction = onConfirm;
    removeModal.classList.remove('hidden');
    removeModal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
  }

  if (removeConfirmButton && !removeConfirmButton.dataset.bound) {
    removeConfirmButton.dataset.bound = 'true';
    removeConfirmButton.addEventListener('click', function () {
      var action = pendingRemoveAction;
      closeRemoveModal();
      if (typeof action === 'function') {
        action();
      }
    });
  }

  if (removeCancelButtons.length) {
    removeCancelButtons.forEach(function (button) {
      if (button.dataset.bound) {
        return;
      }
      button.dataset.bound = 'true';
      button.addEventListener('click', closeRemoveModal);
    });
  }

  if (removeModal && !removeModal.dataset.bound) {
    removeModal.dataset.bound = 'true';
    removeModal.addEventListener('click', function (event) {
      if (event.target === removeModal) {
        closeRemoveModal();
      }
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !removeModal.classList.contains('hidden')) {
        closeRemoveModal();
      }
    });
  }

  function updateCartCount() {
    var countNode = document.getElementById('results-count');
    if (!countNode) {
      return;
    }
    var totalItems = document.querySelectorAll('.js-cart-item').length;
    countNode.textContent = '(' + totalItems + (totalItems === 1 ? ' item' : ' items') + ')';
  }

  actionRows.forEach(function (row) {
    var productId = row.getAttribute('data-product-id');
    var product = productById[productId] || catalog[0];
    var cartItem = row.closest('.js-cart-item');
    if (!product || !cartItem) {
      return;
    }

    var removeButton = row.querySelector('.js-cart-remove-btn');
    var wishlistButton = row.querySelector('.js-cart-move-wishlist-btn');
    var wishlistTextNode = wishlistButton ? wishlistButton.querySelector('.js-cart-wishlist-text') : null;

    if (wishlistButton) {
      var numericProductId = Number(productId);
      var isFavorite = Boolean(product.isFavorite) || readWishlistIds().indexOf(numericProductId) !== -1;
      wishlistButton.setAttribute('aria-pressed', String(isFavorite));
      if (isFavorite) {
        if (wishlistTextNode) {
          wishlistTextNode.textContent = 'In Wishlist';
        } else {
          wishlistButton.textContent = 'In Wishlist';
        }
      }

      wishlistButton.addEventListener('click', function () {
        product.isFavorite = true;
        addWishlistProduct(productId);
        wishlistButton.setAttribute('aria-pressed', 'true');
        if (wishlistTextNode) {
          wishlistTextNode.textContent = 'Moved to Wishlist';
        } else {
          wishlistButton.textContent = 'Moved to Wishlist';
        }
        wishlistButton.classList.add('text-primary');

        cartItem.remove();
        updateCartCount();
        document.dispatchEvent(new Event('cart:updated'));
      });
    }

    if (removeButton) {
      removeButton.addEventListener('click', function () {
        openRemoveModal(function () {
          cartItem.remove();
          updateCartCount();
          document.dispatchEvent(new Event('cart:updated'));
        });
      });
    }
  });

  updateCartCount();
})();

(function persistCartState() {
  var catalog = window.productCatalog && Array.isArray(window.productCatalog.products)
    ? window.productCatalog.products
    : [];
  if (!catalog.length) {
    return;
  }

  var cartStorageKey = 'gg_fashion_cart_items';
  var productById = {};
  catalog.forEach(function (product) {
    if (product && typeof product.id !== 'undefined') {
      productById[String(product.id)] = product;
    }
  });

  function snapshotCartItems() {
    return Array.from(document.querySelectorAll('.js-cart-item')).map(function (item) {
      var productId = Number(item.getAttribute('data-product-id'));
      var product = productById[String(productId)];
      if (!Number.isFinite(productId) || !product) {
        return null;
      }
      return {
        id: productId,
        qty: Number(product.qty) || 1,
        size: product.selectedSize || ((Array.isArray(product.sizes) && product.sizes[0]) || 'Free Size')
      };
    }).filter(Boolean);
  }

  function writeSnapshot() {
    try {
      window.localStorage.setItem(cartStorageKey, JSON.stringify(snapshotCartItems()));
    } catch (error) {
      // Ignore storage failures.
    }
  }

  document.addEventListener('cart:updated', writeSnapshot);
  writeSnapshot();
})();


(function initCartSummary() {
  var catalog = window.productCatalog && Array.isArray(window.productCatalog.products)
    ? window.productCatalog.products
    : [];

  var summaryRoot = document.querySelector('.js-cart-summary');
  if (!summaryRoot || !catalog.length) {
    return;
  }

  var subtotalNode = document.querySelector('.js-cart-summary-subtotal');
  var bagDiscountNode = document.querySelector('.js-cart-summary-bag-discount');
  var shippingNode = document.querySelector('.js-cart-summary-shipping');
  var totalNode = document.querySelector('.js-cart-summary-total');
  var couponInput = document.querySelector('.js-cart-coupon-input');
  var couponApplyBtn = document.querySelector('.js-cart-coupon-apply');
  var couponMessage = document.querySelector('.js-cart-coupon-message');
  var proceedBtn = document.querySelector('.js-cart-proceed-btn');

  var productById = {};
  catalog.forEach(function (product) {
    if (product && typeof product.id !== 'undefined') {
      productById[String(product.id)] = product;
    }
  });

  function formatInr(amount) {
    var numericAmount = Number(amount) || 0;
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(numericAmount);
  }

  var appliedCouponCode = '';

  function calculateBaseTotals() {
    var subtotal = 0;
    var finalTotalBeforeCoupon = 0;

    document.querySelectorAll('.js-cart-item').forEach(function (item) {
      var productId = item.getAttribute('data-product-id');
      var product = productById[productId] || catalog[0];
      if (!product) {
        return;
      }

      var qty = Number(product.qty) || 1;
      var mrp = Number(product.mrp) || 0;
      var price = Number(product.price) || 0;

      subtotal += (mrp * qty);
      finalTotalBeforeCoupon += (price * qty);
    });

    return {
      subtotal: subtotal,
      finalBeforeCoupon: finalTotalBeforeCoupon,
      bagDiscount: Math.max(0, subtotal - finalTotalBeforeCoupon)
    };
  }

  function getCouponDiscount(code, baseTotal) {
    if (!code) {
      return 0;
    }

    var normalized = code.trim().toUpperCase();
    if (normalized === 'SAVE10') {
      return Math.floor(baseTotal * 0.10);
    }

    if (normalized === 'FLAT200' && baseTotal >= 2000) {
      return 200;
    }

    return 0;
  }

  function renderSummary(showCouponFeedback) {
    var base = calculateBaseTotals();
    var couponDiscount = getCouponDiscount(appliedCouponCode, base.finalBeforeCoupon);
    var totalPayable = Math.max(0, base.finalBeforeCoupon - couponDiscount);

    if (subtotalNode) {
      subtotalNode.textContent = formatInr(base.subtotal);
    }
    if (bagDiscountNode) {
      bagDiscountNode.textContent = '- ' + formatInr(base.bagDiscount + couponDiscount);
    }
    if (shippingNode) {
      shippingNode.textContent = 'FREE';
    }
    if (totalNode) {
      totalNode.textContent = formatInr(totalPayable);
    }

    var hasItems = document.querySelectorAll('.js-cart-item').length > 0;
    if (proceedBtn) {
      proceedBtn.disabled = !hasItems;
      proceedBtn.classList.toggle('opacity-50', !hasItems);
      proceedBtn.classList.toggle('cursor-not-allowed', !hasItems);
    }

    if (couponMessage) {
      if (!showCouponFeedback) {
        couponMessage.textContent = '';
        couponMessage.classList.add('hidden');
      } else if (!appliedCouponCode) {
        couponMessage.textContent = '';
        couponMessage.classList.add('hidden');
      } else if (couponDiscount > 0) {
        couponMessage.textContent = 'Coupon applied: ' + appliedCouponCode.toUpperCase();
        couponMessage.classList.remove('hidden');
      } else {
        couponMessage.textContent = 'Invalid coupon code';
        couponMessage.classList.remove('hidden');
      }
    }
  }

  if (couponApplyBtn && couponInput) {
    couponApplyBtn.addEventListener('click', function () {
      appliedCouponCode = couponInput.value.trim();
      renderSummary(true);
    });
  }

  document.addEventListener('cart:updated', function () {
    renderSummary(false);
  });

  renderSummary(false);
})();

