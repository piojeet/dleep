var swiper = (typeof Swiper !== "undefined" && document.querySelector(".mySwiper")) ? new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next-hero",
      prevEl: ".swiper-button-prev-hero",
    },
  }) : null;

  var categorySwiper = (typeof Swiper !== "undefined" && document.querySelector(".mySwiper-category")) ? new Swiper(".mySwiper-category", {
    slidesPerView: 2,
    spaceBetween: 12,
    navigation: {
      nextEl: ".swiper-button-next-category",
      prevEl: ".swiper-button-prev-category",
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 14,
      },
      640: {
        slidesPerView: 3.5,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 4.2,
        spaceBetween: 22,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  }) : null;

  var arrivalsSwiper = (typeof Swiper !== "undefined" && document.querySelector(".mySwiper-arrivals")) ? new Swiper(".mySwiper-arrivals", {
    slidesPerView: 1.5,
    spaceBetween: 12,
    navigation: {
      nextEl: ".swiper-button-next-arrivals",
      prevEl: ".swiper-button-prev-arrivals",
    },
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 14,
      },
      367: {
        slidesPerView: 2,
        spaceBetween: 14,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 3.2,
        spaceBetween: 22,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  }) : null;

  var collectionSwiper = (typeof Swiper !== "undefined" && document.querySelector(".mySwiper-collection")) ? new Swiper(".mySwiper-collection", {
    slidesPerView: 1.5,
    spaceBetween: 12,
    navigation: {
      nextEl: ".swiper-button-next-collection",
      prevEl: ".swiper-button-prev-collection",
    },
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 14,
      },
      367: {
        slidesPerView: 2,
        spaceBetween: 14,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 3.2,
        spaceBetween: 22,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  }) : null;

  var ratingSwiper = (typeof Swiper !== "undefined" && document.querySelector(".mySwiper-rating")) ? new Swiper(".mySwiper-rating", {
    slidesPerView: 1,
    spaceBetween: 12,
    navigation: {
      nextEl: ".swiper-button-next-rating",
      prevEl: ".swiper-button-prev-rating",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 22,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  }) : null;

  function updateCategoryNavigationButtonsState() {
    var nextButton = document.querySelector(".swiper-button-next-category");
    var prevButton = document.querySelector(".swiper-button-prev-category");
    if (!nextButton || !categorySwiper) {
      return;
    }

    if (categorySwiper.isEnd) {
      nextButton.classList.remove("bg-primary", "text-white");
      nextButton.classList.add("bg-[#E7E7E7]", "text-[#999999]");
    } else {
      nextButton.classList.remove("bg-[#E7E7E7]", "text-[#999999]");
      nextButton.classList.add("bg-primary", "text-white");
    }

    if (!prevButton) {
      return;
    }

    if (categorySwiper.isBeginning) {
      prevButton.classList.remove("bg-primary", "text-white");
      prevButton.classList.add("bg-[#E7E7E7]", "text-[#999999]");
    } else {
      prevButton.classList.remove("bg-[#E7E7E7]", "text-[#999999]");
      prevButton.classList.add("bg-primary", "text-white");
    }
  }

  if (categorySwiper) {
    categorySwiper.on("init", updateCategoryNavigationButtonsState);
    categorySwiper.on("slideChange", updateCategoryNavigationButtonsState);
    categorySwiper.on("resize", updateCategoryNavigationButtonsState);
    updateCategoryNavigationButtonsState();
  }

  function updateArrivalsNavigationButtonsState() {
    var nextButton = document.querySelector(".swiper-button-next-arrivals");
    var prevButton = document.querySelector(".swiper-button-prev-arrivals");
    if (!nextButton || !arrivalsSwiper) {
      return;
    }

    if (arrivalsSwiper.isEnd) {
      nextButton.classList.remove("bg-primary", "text-white");
      nextButton.classList.add("bg-[#E7E7E7]", "text-[#999999]");
    } else {
      nextButton.classList.remove("bg-[#E7E7E7]", "text-[#999999]");
      nextButton.classList.add("bg-primary", "text-white");
    }

    if (!prevButton) {
      return;
    }

    if (arrivalsSwiper.isBeginning) {
      prevButton.classList.remove("bg-primary", "text-white");
      prevButton.classList.add("bg-[#E7E7E7]", "text-[#999999]");
    } else {
      prevButton.classList.remove("bg-[#E7E7E7]", "text-[#999999]");
      prevButton.classList.add("bg-primary", "text-white");
    }
  }

  if (arrivalsSwiper) {
    arrivalsSwiper.on("init", updateArrivalsNavigationButtonsState);
    arrivalsSwiper.on("slideChange", updateArrivalsNavigationButtonsState);
    arrivalsSwiper.on("resize", updateArrivalsNavigationButtonsState);
    updateArrivalsNavigationButtonsState();
  }

  function updateCollectionNavigationButtonsState() {
    var nextButton = document.querySelector(".swiper-button-next-collection");
    var prevButton = document.querySelector(".swiper-button-prev-collection");
    if (!nextButton || !collectionSwiper) {
      return;
    }

    if (collectionSwiper.isEnd) {
      nextButton.classList.remove("bg-primary", "text-white");
      nextButton.classList.add("bg-[#E7E7E7]", "text-[#999999]");
    } else {
      nextButton.classList.remove("bg-[#E7E7E7]", "text-[#999999]");
      nextButton.classList.add("bg-primary", "text-white");
    }

    if (!prevButton) {
      return;
    }

    if (collectionSwiper.isBeginning) {
      prevButton.classList.remove("bg-primary", "text-white");
      prevButton.classList.add("bg-[#E7E7E7]", "text-[#999999]");
    } else {
      prevButton.classList.remove("bg-[#E7E7E7]", "text-[#999999]");
      prevButton.classList.add("bg-primary", "text-white");
    }
  }

  if (collectionSwiper) {
    collectionSwiper.on("init", updateCollectionNavigationButtonsState);
    collectionSwiper.on("slideChange", updateCollectionNavigationButtonsState);
    collectionSwiper.on("resize", updateCollectionNavigationButtonsState);
    updateCollectionNavigationButtonsState();
  }

  function updateRatingNavigationButtonsState() {
    var nextButton = document.querySelector(".swiper-button-next-rating");
    var prevButton = document.querySelector(".swiper-button-prev-rating");
    if (!nextButton || !ratingSwiper) {
      return;
    }

    if (ratingSwiper.isEnd) {
      nextButton.classList.remove("bg-primary", "text-white");
      nextButton.classList.add("bg-[#E7E7E7]", "text-[#999999]");
    } else {
      nextButton.classList.remove("bg-[#E7E7E7]", "text-[#999999]");
      nextButton.classList.add("bg-primary", "text-white");
    }

    if (!prevButton) {
      return;
    }

    if (ratingSwiper.isBeginning) {
      prevButton.classList.remove("bg-primary", "text-white");
      prevButton.classList.add("bg-[#E7E7E7]", "text-[#999999]");
    } else {
      prevButton.classList.remove("bg-[#E7E7E7]", "text-[#999999]");
      prevButton.classList.add("bg-primary", "text-white");
    }
  }

  if (ratingSwiper) {
    ratingSwiper.on("init", updateRatingNavigationButtonsState);
    ratingSwiper.on("slideChange", updateRatingNavigationButtonsState);
    ratingSwiper.on("resize", updateRatingNavigationButtonsState);
    updateRatingNavigationButtonsState();
  }

  var header = document.querySelector("header");
  var headerTextNodes = header ? header.querySelectorAll(".text-white:not(.bg-primary):not(.js-brand-text)") : [];
  var brandTextNodes = header ? header.querySelectorAll(".js-brand-text") : [];
  var defaultLogo = document.getElementById("logo-default");
  var redLogo = document.getElementById("logo-red");
  var headerNav = header ? header.querySelector("nav") : null;
  var headerIcons = header ? header.querySelectorAll(".js-header-icon") : [];
  var mobileMenuToggles = document.querySelectorAll(".js-mobile-menu-toggle");
  var mobileMenus = document.querySelectorAll(".js-mobile-menu");
  var mobileMenuToggleCloses = document.querySelectorAll(".js-mobile-menu-toggle-close");
  var isHeaderHovered = false;

  function updateHeaderOnScroll() {
    if (!header) {
      return;
    }

    var scrollY = window.scrollY || window.pageYOffset;
    var bgThreshold = window.innerWidth < 768 ? window.innerWidth * 1.05 : window.innerWidth * 0.41;
    var logoThreshold = window.innerWidth < 768 ? window.innerWidth * 1.05 : window.innerWidth * 0.41;

    header.style.top = scrollY >= 36 ? "0px" : (window.innerWidth < 640 ? "45px" : "36px");

    if (defaultLogo && redLogo) {
      if (scrollY >= logoThreshold || isHeaderHovered) {
        defaultLogo.classList.add("hidden");
        redLogo.classList.remove("hidden");
      } else {
        defaultLogo.classList.remove("hidden");
        redLogo.classList.add("hidden");
      }
    }

    if (scrollY >= bgThreshold || isHeaderHovered) {
      header.style.backgroundColor = "#fff";
      header.style.backdropFilter = "blur(6px)";
      header.style.boxShadow = "0px 0px 8px rgba(0, -5px, 0, 0.15)"
      if (headerNav) {
        headerNav.style.borderTopColor = "#e5e7eb";
      }
      headerIcons.forEach(function (el) {
        el.style.filter = "brightness(0) saturate(100%)";
      });
      headerTextNodes.forEach(function (el) {
        el.classList.remove("text-white");
        el.classList.add("text-slate-900");
      });
      brandTextNodes.forEach(function (el) {
        el.classList.remove("text-white", "text-slate-900");
        el.classList.add("text-primary");
      });
    } else {
      header.style.backgroundColor = "transparent";
      header.style.backdropFilter = "none";
      header.style.boxShadow = "none"
      if (headerNav) {
        headerNav.style.borderTopColor = "rgba(255, 255, 255, 0.22)";
      }
      headerIcons.forEach(function (el) {
        el.style.filter = "";
      });
      headerTextNodes.forEach(function (el) {
        el.classList.remove("text-slate-900");
        el.classList.add("text-white");
      });
      brandTextNodes.forEach(function (el) {
        el.classList.remove("text-primary", "text-slate-900");
        el.classList.add("text-white");
      });
    }
  }

  window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
  window.addEventListener("resize", updateHeaderOnScroll);
  updateHeaderOnScroll();

  var navDropdownItems = document.querySelectorAll(".js-nav-dropdown-trigger");
  if (navDropdownItems.length) {
    function showNavDropdown(item) {
      var panel = item.querySelector(".js-nav-dropdown-panel");
      var toggle = item.querySelector(".js-nav-dropdown-toggle");
      if (!panel) {
        return;
      }
      panel.classList.remove("hidden");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "true");
      }
    }

    function hideNavDropdown(item) {
      var panel = item.querySelector(".js-nav-dropdown-panel");
      var toggle = item.querySelector(".js-nav-dropdown-toggle");
      if (!panel) {
        return;
      }
      panel.classList.add("hidden");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
      }
    }

    function hideAllNavDropdowns() {
      navDropdownItems.forEach(function (item) {
        hideNavDropdown(item);
      });
    }

    navDropdownItems.forEach(function (item) {
      var toggle = item.querySelector(".js-nav-dropdown-toggle");
      if (!toggle) {
        return;
      }

      item.addEventListener("mouseenter", function () {
        hideAllNavDropdowns();
        showNavDropdown(item);
      });

      item.addEventListener("mouseleave", function () {
        hideNavDropdown(item);
      });

      toggle.addEventListener("click", function (event) {
        var panel = item.querySelector(".js-nav-dropdown-panel");
        if (!panel) {
          return;
        }
        event.preventDefault();
        var isOpen = panel && !panel.classList.contains("hidden");
        hideAllNavDropdowns();
        if (!isOpen) {
          showNavDropdown(item);
        }
      });
    });

    document.addEventListener("click", function (event) {
      var clickedInsideAnyDropdown = Array.prototype.some.call(navDropdownItems, function (item) {
        return item.contains(event.target);
      });
      if (!clickedInsideAnyDropdown) {
        hideAllNavDropdowns();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        hideAllNavDropdowns();
      }
    });
  }

  if (header) {
    header.addEventListener("mouseenter", function () {
      isHeaderHovered = true;
      updateHeaderOnScroll();
    });

    header.addEventListener("mouseleave", function () {
      isHeaderHovered = false;
      updateHeaderOnScroll();
    });
  }

  var mobileDropdownTriggers = document.querySelectorAll(".js-nav-dropdown-trigger-mobile");

  function openMobileDropdown(panel) {
    panel.style.transform = "translateX(0)";
    panel.classList.remove("pointer-events-none");
  }

  function closeMobileDropdown(panel) {
    panel.style.transform = "translateX(100%)";
    panel.classList.add("pointer-events-none");
  }

  function closeAllMobileDropdowns() {
    document.querySelectorAll(".js-nav-dropdown-panel-mobile").forEach(function (panel) {
      closeMobileDropdown(panel);
    });
  }

  if (mobileDropdownTriggers.length) {
    mobileDropdownTriggers.forEach(function (trigger) {
      var dropdownItem = trigger.closest("li");
      var panel = dropdownItem ? dropdownItem.querySelector(".js-nav-dropdown-panel-mobile") : null;
      var closeButton = panel ? panel.querySelector(".js-nav-dropdown-panel-mobile-close") : null;

      if (!panel) {
        return;
      }

      trigger.addEventListener("click", function (event) {
        event.preventDefault();
        var isOpen = panel.style.transform === "translateX(0px)" || panel.style.transform === "translateX(0)";
        closeAllMobileDropdowns();
        if (!isOpen) {
          openMobileDropdown(panel);
        }
      });

      if (closeButton) {
        closeButton.addEventListener("click", function () {
          closeMobileDropdown(panel);
        });
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeAllMobileDropdowns();
      }
    });
  }

  if (mobileMenuToggles.length && mobileMenus.length) {
    function openAllMobileMenus() {
      mobileMenus.forEach(function (menu) {
        menu.classList.add("left-0");
        menu.classList.remove("-left-full");
      });
    }

    function closeAllMobileMenus() {
      mobileMenus.forEach(function (menu) {
        menu.classList.remove("left-0");
        menu.classList.add("-left-full");
      });
      closeAllMobileDropdowns();
    }

    mobileMenuToggles.forEach(function (toggle) {
      toggle.addEventListener("click", function () {
        openAllMobileMenus();
      });
    });

    mobileMenus.forEach(function (menu) {
      menu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          if (link.classList.contains("js-nav-dropdown-trigger-mobile")) {
            return;
          }
          closeAllMobileMenus();
        });
      });
    });

    mobileMenuToggleCloses.forEach(function (closeButton) {
      closeButton.addEventListener("click", function () {
        closeAllMobileMenus();
      });
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) {
        closeAllMobileMenus();
      }
    });
  }

  function formatInr(amount) {
    var numericAmount = Number(amount) || 0;
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(numericAmount);
  }

  function getCartBadgeCount() {
    var cartStorageKey = "gg_fashion_cart_items";
    try {
      var raw = window.localStorage.getItem(cartStorageKey);
      var parsed = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(parsed)) {
        return 0;
      }
      return parsed.reduce(function (total, item) {
        var qty = Number(item && item.qty);
        var safeQty = Number.isFinite(qty) && qty > 0 ? qty : 1;
        return total + safeQty;
      }, 0);
    } catch (error) {
      return 0;
    }
  }

  function syncHeaderCartCount() {
    var badgeNodes = document.querySelectorAll(".js-cart-count-badge");
    if (!badgeNodes.length) {
      return;
    }

    var count = getCartBadgeCount();
    badgeNodes.forEach(function (badge) {
      badge.textContent = String(count);
      badge.classList.toggle("hidden", count <= 0);
    });
  }

  function initHomeProductCards() {
    var arrivalsWrapper = document.querySelector(".js-home-arrivals-wrapper");
    var featuredWrapper = document.querySelector(".js-home-featured-wrapper");
    if (!arrivalsWrapper && !featuredWrapper) {
      return;
    }

    var catalogProducts = window.productCatalog && Array.isArray(window.productCatalog.products)
      ? window.productCatalog.products
      : [];
    if (!catalogProducts.length) {
      return;
    }

    function escapeHomeHtml(value) {
      return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    }

    function getProductDetailsUrl(productId) {
      return "product-details.html?id=" + encodeURIComponent(productId);
    }

    function renderProductCard(product) {
      var productId = Number(product.id) || 0;
      var productName = escapeHomeHtml(product.name || "Product");
      var productBrand = escapeHomeHtml(product.brand || "");
      var productImage = escapeHomeHtml(product.image || "../assets/images/arri1.avif");
      var productUrl = getProductDetailsUrl(productId);
      var productPrice = formatInr(product.price);
      var hasMrp = Number(product.mrp) > Number(product.price);
      var productMrp = hasMrp ? formatInr(product.mrp) : "";
      var discount = Number(product.discountPercent) || 0;

      return '' +
        '<div class="swiper-slide">' +
        '  <div class="js-home-product-card flex flex-col gap-2 sm:gap-3 cursor-pointer" role="link" tabindex="0" data-product-url="' + productUrl + '">' +
        '    <div class="relative overflow-hidden rounded-lg aspect-3/4 group">' +
        '      <img src="' + productImage + '" alt="' + productName + '" decoding="async" loading="lazy" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />' +
        '      <button type="button" data-product-id="' + productId + '" aria-pressed="false" aria-label="Add to wishlist" class="js-wishlist-btn absolute top-2 right-2 sm:top-3 sm:right-3 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-white/50 transition-colors z-30 cursor-pointer">' +
        '        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="sm:w-[19px] sm:h-[19px]" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '          <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />' +
        '        </svg>' +
        '      </button>' +
        '    </div>' +
        '    <div class="px-1 sm:px-0">' +
        '      <p class="text-[10px] sm:text-xs text-text-muted uppercase font-semibold">' + productBrand + "</p>" +
        '      <h3 class="font-normal truncate text-sm sm:text-base text-text-secondary leading-snug">' + productName + "</h3>" +
        '      <div class="flex items-center gap-1 sm:gap-2 mt-1">' +
        '        <span class="text-sm sm:text-lg font-bold text-text-secondary">' + productPrice + "</span>" +
        (hasMrp ? '        <span class="line-through text-xs sm:text-sm text-[#999999]">' + productMrp + "</span>" : "") +
        (discount ? '        <span class="text-xs sm:text-sm font-bold text-primary">(' + discount + '% OFF)</span>' : "") +
        "      </div>" +
        "    </div>" +
        "  </div>" +
        "</div>";
    }

    if (arrivalsWrapper) {
      var arrivalsProducts = catalogProducts.slice(0, 8);
      arrivalsWrapper.innerHTML = arrivalsProducts.map(renderProductCard).join("");
    }

    if (featuredWrapper) {
      var featuredProducts = catalogProducts.slice(8, 16);
      if (!featuredProducts.length) {
        featuredProducts = catalogProducts.slice(0, 8);
      }
      featuredWrapper.innerHTML = featuredProducts.map(renderProductCard).join("");
    }

    function navigateToProductDetails(event) {
      var card = event.target.closest(".js-home-product-card");
      if (!card) {
        return;
      }

      if (event.target.closest(".js-wishlist-btn")) {
        return;
      }

      var productUrl = card.getAttribute("data-product-url");
      if (productUrl) {
        window.location.href = productUrl;
      }
    }

    document.addEventListener("click", navigateToProductDetails);
    document.addEventListener("keydown", function (event) {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }
      var card = event.target.closest(".js-home-product-card");
      if (!card) {
        return;
      }
      event.preventDefault();
      var productUrl = card.getAttribute("data-product-url");
      if (productUrl) {
        window.location.href = productUrl;
      }
    });

    if (arrivalsSwiper) {
      arrivalsSwiper.update();
      updateArrivalsNavigationButtonsState();
    }
    if (collectionSwiper) {
      collectionSwiper.update();
      updateCollectionNavigationButtonsState();
    }
  }

  function renderStarRating(container, ratingValue, maxStars) {
    if (!container) {
      return;
    }
    var rating = Number(ratingValue) || 0;
    var totalStars = Number(maxStars) || 5;
    var fullStars = Math.floor(rating);
    var hasHalfStar = rating - fullStars >= 0.5;
    var fullStarSvg = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2769 7.97359L13.15 10.6836L14.1054 14.7138C14.117 14.7486 14.1257 14.7891 14.1315 14.8354C14.1373 14.8818 14.1402 14.9281 14.1402 14.9744C14.1402 15.2871 14.0273 15.5564 13.8014 15.7822C13.5756 16.008 13.3063 16.121 12.9936 16.121C12.8894 16.121 12.7852 16.1065 12.6809 16.0775C12.5767 16.0486 12.4841 16.0051 12.403 15.9472L8.89389 13.7931L5.38479 15.9472C5.30372 16.0051 5.21107 16.0486 5.10684 16.0775C5.00261 16.1065 4.89838 16.121 4.79415 16.121C4.48146 16.121 4.21219 16.008 3.98636 15.7822C3.76053 15.5564 3.64761 15.2871 3.64761 14.9744C3.64761 14.9281 3.6505 14.8818 3.6563 14.8354C3.66209 14.7891 3.67077 14.7486 3.68235 14.7138L4.6378 10.6836L1.51088 7.97359C1.39507 7.86936 1.29952 7.74196 1.22424 7.59141C1.14897 7.44085 1.11133 7.28451 1.11133 7.12237C1.11133 6.82126 1.21266 6.56068 1.41533 6.34064C1.61801 6.1206 1.86411 5.99899 2.15364 5.97583L6.25338 5.64577L7.83421 1.82397C7.92686 1.61551 8.06873 1.44469 8.25982 1.31151C8.45091 1.17832 8.66227 1.11173 8.89389 1.11173C9.12551 1.11173 9.33687 1.17832 9.52796 1.31151C9.71905 1.44469 9.85513 1.60972 9.9362 1.8066V1.82397L11.517 5.64577L15.6168 5.97583C15.9179 5.99899 16.1698 6.1206 16.3724 6.34064C16.5751 6.56068 16.6765 6.82126 16.6765 7.12237C16.6765 7.29609 16.6388 7.45533 16.5635 7.60009C16.4883 7.74486 16.3927 7.86936 16.2769 7.97359Z" fill="#FFB400"/></svg>';
    var halfStarSvg = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6238 6.75756C16.5544 6.53752 16.4299 6.35801 16.2504 6.21904C16.0708 6.08006 15.8653 5.99899 15.6337 5.97583L11.5339 5.64577L9.95308 1.82397C9.86043 1.61551 9.71856 1.44469 9.52747 1.31151C9.33638 1.17832 9.12502 1.11173 8.8934 1.11173C8.66178 1.11173 8.45042 1.17543 8.25933 1.30282C8.06824 1.43021 7.93216 1.59814 7.85109 1.8066L7.83372 1.82397L6.25289 5.64577L2.15315 5.97583C1.86362 5.99899 1.61752 6.1206 1.41485 6.34064C1.21218 6.56068 1.11084 6.82126 1.11084 7.12237C1.11084 7.29609 1.14558 7.45533 1.21507 7.60009C1.28456 7.74486 1.383 7.86936 1.51039 7.97359L4.63731 10.6836L3.68186 14.7138C3.67028 14.7486 3.6616 14.7891 3.65581 14.8354C3.65002 14.8818 3.64712 14.9281 3.64712 14.9744C3.64712 15.2871 3.76004 15.5564 3.98587 15.7822C4.2117 16.008 4.48097 16.121 4.79366 16.121C4.89789 16.121 5.00212 16.1065 5.10635 16.0775C5.21058 16.0486 5.30323 16.0051 5.3843 15.9472L8.8934 13.7931L12.4025 15.9472C12.4836 16.0051 12.5762 16.0486 12.6805 16.0775C12.7847 16.1065 12.8889 16.121 12.9931 16.121C13.3058 16.121 13.5751 16.008 13.8009 15.7822C14.0268 15.5564 14.1397 15.2871 14.1397 14.9744C14.1397 14.9281 14.1368 14.8818 14.131 14.8354C14.1252 14.7891 14.1165 14.7486 14.1049 14.7138L13.1495 10.6836L16.2764 7.97359C16.4038 7.86936 16.5022 7.74196 16.5717 7.59141C16.6412 7.44085 16.676 7.27872 16.676 7.105C16.676 7.04709 16.6702 6.98629 16.6586 6.92259C16.647 6.8589 16.6354 6.80389 16.6238 6.75756ZM15.5468 7.13974L12.1767 10.0582C12.1072 10.1045 12.0551 10.1653 12.0203 10.2406C11.9856 10.3159 11.9682 10.3941 11.9682 10.4751C11.9682 10.4983 11.9711 10.5215 11.9769 10.5446C11.9827 10.5678 11.9856 10.5909 11.9856 10.6141L13.0279 14.9744C13.0279 14.986 13.0279 14.9918 13.0279 14.9918C13.0279 14.9918 13.0221 14.9976 13.0105 15.0092C13.0105 15.0092 13.0076 15.0092 13.0018 15.0092C12.996 15.0092 12.9931 15.0092 12.9931 15.0092L9.18872 12.664C9.1424 12.6408 9.09607 12.6205 9.04975 12.6032C9.00342 12.5858 8.95131 12.5771 8.8934 12.5771V2.22353C8.90498 2.22353 8.91077 2.22642 8.91077 2.23221C8.91077 2.238 8.91077 2.2409 8.91077 2.2409L10.6306 6.37538C10.6653 6.47961 10.7261 6.56068 10.813 6.61859C10.8998 6.67649 10.9954 6.71124 11.0996 6.72282L15.5468 7.08763C15.5468 7.08763 15.5497 7.08763 15.5555 7.08763C15.5613 7.08763 15.5642 7.09342 15.5642 7.105C15.5642 7.11658 15.5642 7.12527 15.5642 7.13106C15.5642 7.13685 15.5584 7.13974 15.5468 7.13974Z" fill="#FFB400"/></svg>';
    var emptyStarSvg = fullStarSvg.replace("#FFB400", "#D7D7D7");

    container.innerHTML = "";
    for (var i = 0; i < totalStars; i += 1) {
      if (i < fullStars) {
        container.insertAdjacentHTML("beforeend", fullStarSvg);
      } else if (i === fullStars && hasHalfStar) {
        container.insertAdjacentHTML("beforeend", halfStarSvg);
      } else {
        container.insertAdjacentHTML("beforeend", emptyStarSvg);
      }
    }
  }

  function initProductDetailsData() {
    var productTitleElement = document.querySelector(".js-product-title");
    if (!productTitleElement) {
      return;
    }

    var catalogProducts = window.productCatalog && Array.isArray(window.productCatalog.products)
      ? window.productCatalog.products
      : [];
    if (!catalogProducts.length) {
      console.error("Product catalog data missing. Make sure products.js loads before index.js.");
      return;
    }

    var query = new URLSearchParams(window.location.search);
    var requestedId = Number(query.get("id") || query.get("productId"));
    var product = catalogProducts.find(function (item) {
      return Number(item.id) === requestedId;
    }) || catalogProducts[0];

    var productPrice = Number(product.price) || 0;
    var productMrp = Number(product.mrp) || productPrice;
    var productDiscount = Number(product.discountPercent) || 0;
    var reviewCount = Number(product.ratingCount) || 0;
    var ratingValue = Number(product.ratingValue) || 0;
    var images = Array.isArray(product.images) && product.images.length ? product.images : [product.image];
    var primaryImage = images[0] || "../assets/images/arri1.avif";
    var description = product.shortDescription || "";
    var details = product.productDetails || {};
    var blouse = product.blouseDetails || {};
    var shipping = product.shippingReturns || {};
    var sizeOptions = Array.isArray(product.sizes) ? product.sizes : [];
    var selectedSize = product.selectedSize || "";
    var colorOptions = Array.isArray(product.colors) ? product.colors : [];
    var selectedColor = product.selectedColor || (colorOptions[0] && colorOptions[0].name) || "";
    var selectedQty = Number(product.qty) || Number(product.minQty) || 1;
    var minQty = Number(product.minQty) || 1;
    var maxQty = Number(product.maxQty) || Math.max(minQty, 6);
    var qtyOptions = [];
    for (var qty = minQty; qty <= maxQty; qty += 1) {
      qtyOptions.push(qty);
    }

    var breadcrumbCategory = document.querySelector(".js-product-breadcrumb-category");
    var breadcrumbOccasion = document.querySelector(".js-product-breadcrumb-occasion");
    var similarHeadingPrefix = document.querySelector(".js-similar-heading-prefix");
    var similarHeadingHighlight = document.querySelector(".js-similar-heading-highlight");
    var brandElement = document.querySelector(".js-product-brand");
    var reviewLink = document.querySelector(".js-product-review-link");
    var priceElement = document.querySelector(".js-product-price");
    var mrpElement = document.querySelector(".js-product-mrp");
    var discountElement = document.querySelector(".js-product-discount");
    var taxElement = document.querySelector(".js-product-tax");
    var descriptionElement = document.querySelector(".js-product-short-description");
    var reviewCountElement = document.querySelector(".js-product-review-count");
    var ratingStarsElement = document.querySelector(".js-product-rating-stars");
    var reviewsAverageElement = document.querySelector(".js-reviews-average");
    var reviewsAverageStarsElement = document.querySelector(".js-reviews-average-stars");
    var reviewsListElement = document.querySelector(".js-reviews-list");
    var reviewsPaginationPages = document.getElementById("pagination-product-details-pages");
    var reviewsPaginationNext = document.getElementById("pagination-product-details-next");
    var mainImageElement = document.querySelector(".js-product-main-image");
    var thumbImageElements = document.querySelectorAll(".js-product-thumb img");
    var sizesContainer = document.querySelector(".js-product-sizes");
    var colorsContainer = document.querySelector(".js-product-colors");
    var qtyValueElement = document.querySelector(".js-product-qty-value");
    var qtyToggleButton = document.querySelector(".js-product-qty-toggle");
    var qtyOptionsContainer = document.querySelector(".js-product-qty-options");
    var addToCartButton = document.querySelector(".js-product-add-cart-btn");
    var buyNowButton = document.querySelector(".js-product-buy-now-btn");
    var detailValueSpans = document.querySelectorAll('.lg\\:w-\\[40\\%\\] span.text-\\[\\#555555\\].font-normal');
    var similarProductsWrapper = document.querySelector(".js-similar-products-wrapper");

    function getProductDetailsUrl(productId) {
      return "product-details.html?id=" + encodeURIComponent(productId);
    }

    function escapeSimilarHtml(value) {
      return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    }

    if (breadcrumbCategory) {
      breadcrumbCategory.textContent = (product.breadcrumbs && product.breadcrumbs[1] ? product.breadcrumbs[1] : (product.category || "Category")) + " /";
    }
    if (breadcrumbOccasion) {
      breadcrumbOccasion.textContent = (product.breadcrumbs && product.breadcrumbs[2]) || ((product.occasion && product.occasion[0]) || "Product");
    }
    if (similarHeadingPrefix) {
      similarHeadingPrefix.textContent = "Similar ";
    }
    if (similarHeadingHighlight) {
      similarHeadingHighlight.textContent = (product.category || "Collection");
    }
    if (brandElement) {
      brandElement.textContent = product.brand || "";
    }
    var productDetailWishlistButton = document.querySelector(".js-product-detail-wishlist");
    if (productDetailWishlistButton) {
      productDetailWishlistButton.setAttribute("data-product-id", String(product.id || ""));
    }
    productTitleElement.textContent = product.fullTitle || product.name || "";
    if (reviewLink) {
      reviewLink.textContent = "Read " + reviewCount + " Reviews";
    }
    if (priceElement) {
      priceElement.textContent = formatInr(productPrice);
    }
    if (mrpElement) {
      mrpElement.textContent = formatInr(productMrp);
    }
    if (discountElement) {
      discountElement.textContent = productDiscount + "% OFF";
    }
    if (taxElement) {
      taxElement.textContent = product.taxText || "";
    }
    if (descriptionElement) {
      descriptionElement.textContent = description;
    }
    if (reviewCountElement) {
      reviewCountElement.textContent = "Based on " + reviewCount + " Reviews";
    }
    renderStarRating(ratingStarsElement, ratingValue, 5);
    if (reviewsAverageElement) {
      reviewsAverageElement.textContent = String(ratingValue || 0);
    }
    renderStarRating(reviewsAverageStarsElement, ratingValue, 5);

    if (reviewsListElement && reviewsPaginationPages && reviewsPaginationNext) {
      var reviewsData = Array.isArray(product.reviews) ? product.reviews : [];
      var reviewsPerPage = 2;
      var currentReviewPage = 1;
      var totalReviewPages = Math.max(1, Math.ceil(reviewsData.length / reviewsPerPage));
      var reviewStarSvg = '<svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.4025 7.87406L13.8143 10.9838L14.9107 15.6085C14.924 15.6484 14.934 15.6949 14.9406 15.748C14.9472 15.8012 14.9506 15.8543 14.9506 15.9075C14.9506 16.2663 14.821 16.5753 14.5618 16.8344C14.3027 17.0936 13.9937 17.2231 13.6349 17.2231C13.5153 17.2231 13.3957 17.2065 13.2761 17.1733C13.1565 17.1401 13.0502 17.0903 12.9572 17.0238L8.93047 14.552L4.90378 17.0238C4.81076 17.0903 4.70444 17.1401 4.58484 17.1733C4.46523 17.2065 4.34563 17.2231 4.22603 17.2231C3.86721 17.2231 3.55823 17.0936 3.29909 16.8344C3.03995 16.5753 2.91038 16.2663 2.91038 15.9075C2.91038 15.8543 2.9137 15.8012 2.92034 15.748C2.92699 15.6949 2.93695 15.6484 2.95024 15.6085L4.04662 10.9838L0.458484 7.87406C0.32559 7.75446 0.215953 7.60827 0.129572 7.43551C0.0431905 7.26275 0 7.08334 0 6.89729C0 6.55177 0.116282 6.25276 0.348846 6.00026C0.581411 5.74776 0.86381 5.60822 1.19605 5.58164L5.90049 5.20289L7.71449 0.817396C7.82081 0.578188 7.9836 0.38217 8.20288 0.229342C8.42215 0.0765133 8.66468 9.91821e-05 8.93047 9.91821e-05C9.19626 9.91821e-05 9.43879 0.0765133 9.65806 0.229342C9.87734 0.38217 10.0335 0.571543 10.1265 0.797462V0.817396L11.9405 5.20289L16.645 5.58164C16.9905 5.60822 17.2795 5.74776 17.5121 6.00026C17.7447 6.25276 17.8609 6.55177 17.8609 6.89729C17.8609 7.09663 17.8177 7.27936 17.7314 7.44548C17.645 7.6116 17.5353 7.75446 17.4025 7.87406Z" fill="#FFB400"/></svg>';
      var reviewEmptyStarSvg = reviewStarSvg.replace("#FFB400", "#D7D7D7");
      var reviewVerifiedIconSvg = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.52839 0.000113487C4.76646 0.000113487 4.04883 0.146297 3.3755 0.438663C2.70218 0.722171 2.11523 1.11421 1.61466 1.61477C1.11409 2.11534 0.722057 2.70229 0.43855 3.37562C0.146183 4.04895 0 4.76657 0 5.5285C0 6.29042 0.146183 7.00805 0.43855 7.68138C0.722057 8.35471 1.11409 8.94166 1.61466 9.44222C2.11523 9.94279 2.70218 10.3348 3.3755 10.6183C4.04883 10.9107 4.76646 11.0569 5.52839 11.0569C6.29031 11.0569 7.00794 10.9107 7.68127 10.6183C8.3546 10.3348 8.94154 9.94279 9.44211 9.44222C9.94268 8.94166 10.3347 8.35471 10.6182 7.68138C10.9106 7.00805 11.0568 6.29042 11.0568 5.5285C11.0568 4.76657 10.9106 4.04895 10.6182 3.37562C10.3259 2.70229 9.9316 2.11756 9.43547 1.62142C8.93933 1.12528 8.3546 0.73103 7.68127 0.438663C7.00794 0.146297 6.29031 0.000113487 5.52839 0.000113487ZM7.96034 4.55837L4.98352 7.5352C4.93922 7.57064 4.89271 7.59943 4.84398 7.62158C4.79525 7.64373 4.73988 7.6548 4.67786 7.6548C4.61585 7.6548 4.56047 7.64373 4.51175 7.62158C4.46302 7.59943 4.41651 7.57064 4.37221 7.5352L3.09643 6.25942C3.06099 6.21512 3.0322 6.1686 3.01005 6.11988C2.9879 6.07115 2.97682 6.01578 2.97682 5.95376C2.97682 5.83858 3.01891 5.73891 3.10307 5.65475C3.18724 5.57058 3.28691 5.5285 3.40208 5.5285C3.4641 5.5285 3.51947 5.53957 3.5682 5.56172C3.61693 5.58387 3.66344 5.61267 3.70774 5.6481L4.67786 6.63152L7.34903 3.94706C7.39333 3.91162 7.43984 3.88283 7.48857 3.86068C7.5373 3.83853 7.59267 3.82746 7.65469 3.82746C7.76986 3.82746 7.86953 3.86954 7.9537 3.95371C8.03786 4.03787 8.07995 4.13754 8.07995 4.25272C8.07995 4.31473 8.06887 4.37011 8.04672 4.41884C8.02458 4.46756 7.99578 4.51408 7.96034 4.55837Z" fill="#008000"/></svg>';

      function formatReviewDate(rawDate) {
        if (!rawDate) {
          return "";
        }
        var date = new Date(rawDate);
        if (Number.isNaN(date.getTime())) {
          return "";
        }
        return date.toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric"
        });
      }

      function getReviewStarsMarkup(stars) {
        var rating = Math.max(0, Math.min(5, Number(stars) || 0));
        var markup = "";
        for (var starIndex = 1; starIndex <= 5; starIndex += 1) {
          markup += starIndex <= rating ? reviewStarSvg : reviewEmptyStarSvg;
        }
        return markup;
      }

      function escapeHtml(value) {
        return String(value || "")
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;");
      }

      function renderReviewsPage() {
        var startIndex = (currentReviewPage - 1) * reviewsPerPage;
        var pageReviews = reviewsData.slice(startIndex, startIndex + reviewsPerPage);

        reviewsListElement.innerHTML = pageReviews.map(function (review) {
          var author = escapeHtml(review && review.author ? review.author : "Verified Buyer");
          var reviewText = escapeHtml(review && review.text ? review.text : "");
          var reviewStars = review && review.stars ? review.stars : 0;
          var reviewDateText = formatReviewDate(review && review.date);
          var verifiedText = review && review.verified ? "Verified Buyer" : "";
          var reviewMeta = reviewDateText ? "<span class=\"font-normal md:text-sm text-xs text-[#777777]\">" + reviewDateText + "</span>" : "";
          var verifiedMarkup = verifiedText ? '<div class="flex items-center gap-1">' + reviewVerifiedIconSvg + '<span class="font-normal text-sm text-[#008000]">' + verifiedText + "</span></div>" : "";

          return '' +
            '<div class="space-y-3 border-b border-[#eeeeee] rounded-lg p-4 bg-white">' +
            '  <div class="space-y-1">' +
            '    <div class="font-bold text-text-secondary">' + author + "</div>" +
            (verifiedMarkup || reviewMeta ? '    <div class="flex flex-wrap items-center gap-2">' + verifiedMarkup + reviewMeta + "</div>" : "") +
            "  </div>" +
            '  <div class="flex gap-0.5 items-center">' + getReviewStarsMarkup(reviewStars) + "</div>" +
            '  <p class="text-[#555555] font-normal text-sm md:text-base">"' + reviewText + '"</p>' +
            "</div>";
        }).join("");
      }

      function renderReviewsPagination() {
        reviewsPaginationPages.innerHTML = "";
        for (var pageNumber = 1; pageNumber <= totalReviewPages; pageNumber += 1) {
          var pageButton = document.createElement("button");
          pageButton.type = "button";
          pageButton.setAttribute("data-page", String(pageNumber));
          pageButton.className = "md:size-10 size-8 shrink-0 flex items-center justify-center font-normal cursor-pointer " +
            (pageNumber === currentReviewPage
              ? "bg-primary text-white"
              : "text-text-secondary border border-[#dddddd]");
          pageButton.textContent = String(pageNumber);
          reviewsPaginationPages.appendChild(pageButton);
        }

        var isLastPage = currentReviewPage >= totalReviewPages;
        reviewsPaginationNext.disabled = isLastPage;
        reviewsPaginationNext.classList.toggle("opacity-50", isLastPage);
        reviewsPaginationNext.classList.toggle("cursor-not-allowed", isLastPage);
      }

      function setReviewsPage(nextPage) {
        currentReviewPage = Math.max(1, Math.min(nextPage, totalReviewPages));
        renderReviewsPage();
        renderReviewsPagination();
      }

      reviewsPaginationPages.addEventListener("click", function (event) {
        var pageButton = event.target.closest("button[data-page]");
        if (!pageButton) {
          return;
        }
        var requestedPage = Number(pageButton.getAttribute("data-page")) || 1;
        setReviewsPage(requestedPage);
      });

      reviewsPaginationNext.addEventListener("click", function () {
        if (currentReviewPage < totalReviewPages) {
          setReviewsPage(currentReviewPage + 1);
        }
      });

      setReviewsPage(1);
    }

    if (mainImageElement) {
      mainImageElement.setAttribute("src", primaryImage);
      mainImageElement.setAttribute("alt", product.name || "Product");
      mainImageElement.setAttribute("srcset", primaryImage);
    }

    if (thumbImageElements.length) {
      thumbImageElements.forEach(function (imageElement, index) {
        var imageSrc = images[index] || images[0] || primaryImage;
        imageElement.setAttribute("src", imageSrc);
        imageElement.setAttribute("srcset", imageSrc);
        imageElement.setAttribute("alt", product.name || "Product");
      });
    }

    if (detailValueSpans.length >= 9) {
      detailValueSpans[0].textContent = details.fabric || "";
      detailValueSpans[1].textContent = details.pattern || "";
      detailValueSpans[2].textContent = details.length || "";
      detailValueSpans[3].textContent = blouse.fabric || "";
      detailValueSpans[4].textContent = blouse.pattern || "";
      detailValueSpans[5].textContent = blouse.length || "";
      detailValueSpans[6].textContent = shipping.freeShippingText || "";
      detailValueSpans[7].textContent = shipping.deliveryText || "";
      detailValueSpans[8].textContent = shipping.returnsText || "";
    }

    if (sizesContainer) {
      sizesContainer.innerHTML = sizeOptions.map(function (size) {
        var baseClasses = "js-product-size-btn text-sm py-1 flex items-center justify-center px-3 border border-[#dddddd] rounded-md cursor-pointer";
        var activeClasses = size === selectedSize ? " text-white bg-text-secondary" : " text-text-secondary";
        var isAvailable = !Array.isArray(product.availableSizes) || product.availableSizes.indexOf(size) !== -1;
        var disabledClasses = isAvailable ? "" : " opacity-40 cursor-not-allowed";
        return '<button type="button" data-size="' + size + '" data-available="' + String(isAvailable) + '" class="' + baseClasses + activeClasses + disabledClasses + '">' + size + '</button>';
      }).join("");

      sizesContainer.addEventListener("click", function (event) {
        var clickedButton = event.target.closest(".js-product-size-btn");
        if (!clickedButton) {
          return;
        }

        if (clickedButton.getAttribute("data-available") !== "true") {
          return;
        }

        var nextSize = clickedButton.getAttribute("data-size");
        selectedSize = nextSize || selectedSize;
        product.selectedSize = selectedSize;

        sizesContainer.querySelectorAll(".js-product-size-btn").forEach(function (button) {
          var isActive = button.getAttribute("data-size") === selectedSize;
          button.classList.toggle("text-white", isActive);
          button.classList.toggle("bg-text-secondary", isActive);
          button.classList.toggle("text-text-secondary", !isActive);
        });
      });
    }

    if (colorsContainer) {
      function updateColorSelectionState() {
        colorsContainer.querySelectorAll(".js-product-color-btn").forEach(function (button) {
          var isActive = button.getAttribute("data-color") === selectedColor;
          var swatch = button.querySelector(".js-product-color-swatch");
          button.setAttribute("aria-pressed", String(isActive));
          if (swatch) {
            swatch.classList.toggle("border-primary", isActive);
            swatch.classList.toggle("border-[#dddddd]", !isActive);
          }
        });
      }

      colorsContainer.innerHTML = colorOptions.map(function (color) {
        var colorName = color && color.name ? color.name : "";
        var colorImage = color && color.image ? color.image : primaryImage;
        var isActive = colorName === selectedColor;
        return '' +
          '<button type="button" data-color="' + colorName + '" data-image="' + colorImage + '" aria-pressed="' + String(isActive) + '" class="js-product-color-btn cursor-pointer">' +
          '  <div class="js-product-color-swatch md:size-[57px] size-[40px] rounded-full border overflow-hidden ' + (isActive ? "border-primary" : "border-[#dddddd]") + '">' +
          '    <img src="' + colorImage + '" alt="' + colorName + '" class="size-full object-cover">' +
          "  </div>" +
          '  <div class="text-sm text-center text-text-secondary">' + colorName + "</div>" +
          "</button>";
      }).join("");

      colorsContainer.addEventListener("click", function (event) {
        var clickedButton = event.target.closest(".js-product-color-btn");
        if (!clickedButton) {
          return;
        }

        selectedColor = clickedButton.getAttribute("data-color") || selectedColor;
        product.selectedColor = selectedColor;

        var nextImage = clickedButton.getAttribute("data-image") || primaryImage;
        if (mainImageElement && nextImage) {
          mainImageElement.setAttribute("src", nextImage);
          mainImageElement.setAttribute("srcset", nextImage);
        }
        if (thumbImageElements.length && nextImage) {
          thumbImageElements[0].setAttribute("src", nextImage);
          thumbImageElements[0].setAttribute("srcset", nextImage);
        }

        updateColorSelectionState();
      });

      updateColorSelectionState();
    }

    if (qtyValueElement) {
      qtyValueElement.textContent = String(selectedQty);
    }
    if (qtyOptionsContainer) {
      qtyOptionsContainer.innerHTML = qtyOptions.map(function (qtyItem) {
        return '<button type="button" data-qty="' + qtyItem + '" class="js-product-qty-option hover:bg-gray-400/10 cursor-pointer">' + qtyItem + "</button>";
      }).join("");

      qtyOptionsContainer.addEventListener("click", function (event) {
        var optionButton = event.target.closest(".js-product-qty-option");
        if (!optionButton) {
          return;
        }
        var nextQty = Number(optionButton.getAttribute("data-qty")) || selectedQty;
        selectedQty = nextQty;
        product.qty = selectedQty;
        if (qtyValueElement) {
          qtyValueElement.textContent = String(selectedQty);
        }
        qtyOptionsContainer.classList.add("hidden");
      });
    }

    if (qtyToggleButton && qtyOptionsContainer) {
      qtyToggleButton.addEventListener("click", function () {
        qtyOptionsContainer.classList.toggle("hidden");
      });

      document.addEventListener("click", function (event) {
        var clickedInsideQty = qtyToggleButton.contains(event.target) || qtyOptionsContainer.contains(event.target);
        if (!clickedInsideQty) {
          qtyOptionsContainer.classList.add("hidden");
        }
      });
    }

    function saveProductToCart(redirectToCart) {
      var cartStorageKey = "gg_fashion_cart_items";
      var nextItem = {
        id: Number(product.id),
        qty: Number(selectedQty) || 1,
        size: selectedSize || ((Array.isArray(product.sizes) && product.sizes[0]) || "Free Size")
      };

      if (!Number.isFinite(nextItem.id) || nextItem.id <= 0) {
        return;
      }

      var existingItems = [];
      try {
        var raw = window.localStorage.getItem(cartStorageKey);
        var parsed = raw ? JSON.parse(raw) : [];
        existingItems = Array.isArray(parsed) ? parsed : [];
      } catch (error) {
        existingItems = [];
      }

      var existingIndex = existingItems.findIndex(function (item) {
        return Number(item && item.id) === nextItem.id;
      });

      if (existingIndex === -1) {
        existingItems.push(nextItem);
      } else {
        existingItems[existingIndex] = {
          id: nextItem.id,
          qty: nextItem.qty,
          size: nextItem.size
        };
      }

      try {
        window.localStorage.setItem(cartStorageKey, JSON.stringify(existingItems));
      } catch (error) {
        // Ignore storage errors to avoid breaking click interaction.
      }

      syncHeaderCartCount();
      document.dispatchEvent(new Event("cart:updated"));

      if (redirectToCart) {
        window.location.href = "cart.html";
      }
    }

    if (addToCartButton) {
      addToCartButton.addEventListener("click", function () {
        saveProductToCart(false);
      });
    }

    if (buyNowButton) {
      buyNowButton.addEventListener("click", function () {
        saveProductToCart(true);
      });
    }

    if (similarProductsWrapper) {
      var similarIds = Array.isArray(product.similarProductIds) ? product.similarProductIds : [];
      var similarProducts = similarIds.map(function (id) {
        return catalogProducts.find(function (catalogProduct) {
          return Number(catalogProduct.id) === Number(id);
        });
      }).filter(function (item) {
        return item && Number(item.id) !== Number(product.id);
      });

      if (!similarProducts.length) {
        similarProducts = catalogProducts.filter(function (catalogProduct) {
          return Number(catalogProduct.id) !== Number(product.id);
        }).slice(0, 8);
      }

      similarProductsWrapper.innerHTML = similarProducts.slice(0, 8).map(function (similarProduct) {
        var similarProductId = Number(similarProduct.id) || 0;
        var similarName = escapeSimilarHtml(similarProduct.name || "Product");
        var similarBrand = escapeSimilarHtml(similarProduct.brand || product.category || "Collection");
        var similarImage = escapeSimilarHtml(similarProduct.image || "../assets/images/arri1.avif");
        var similarPrice = formatInr(similarProduct.price);
        var similarUrl = getProductDetailsUrl(similarProductId);

        return '' +
          '<div class="swiper-slide">' +
          '  <div class="js-similar-product-card flex flex-col gap-2 sm:gap-3 cursor-pointer" role="link" tabindex="0" data-product-url="' + similarUrl + '">' +
          '    <div class="relative overflow-hidden rounded-lg aspect-3/4 group">' +
          '      <img src="' + similarImage + '" alt="' + similarName + '" decoding="async" loading="lazy" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />' +
          '      <button type="button" data-product-id="' + similarProductId + '" aria-pressed="false" aria-label="Add to wishlist" class="js-wishlist-btn absolute top-2 right-2 sm:top-3 sm:right-3 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-white/50 transition-colors z-30 cursor-pointer">' +
          '        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="sm:w-[19px] sm:h-[19px]" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
          '          <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />' +
          '        </svg>' +
          '      </button>' +
          '    </div>' +
          '    <div class="px-1 sm:px-0">' +
          '      <p class="text-[10px] sm:text-xs text-text-muted uppercase font-semibold">' + similarBrand + "</p>" +
          '      <h3 class="font-normal truncate text-sm sm:text-base text-text-secondary leading-snug">' + similarName + "</h3>" +
          '      <div class="flex items-center gap-1 sm:gap-2 mt-1">' +
          '        <span class="text-sm sm:text-lg font-bold text-text-secondary">' + similarPrice + "</span>" +
          "      </div>" +
          "    </div>" +
          "  </div>" +
          "</div>";
      }).join("");

      similarProductsWrapper.addEventListener("click", function (event) {
        var card = event.target.closest(".js-similar-product-card");
        if (!card) {
          return;
        }

        if (event.target.closest(".js-wishlist-btn")) {
          return;
        }

        var targetUrl = card.getAttribute("data-product-url");
        if (targetUrl) {
          window.location.href = targetUrl;
        }
      });

      similarProductsWrapper.addEventListener("keydown", function (event) {
        if (event.key !== "Enter" && event.key !== " ") {
          return;
        }
        var card = event.target.closest(".js-similar-product-card");
        if (!card) {
          return;
        }
        event.preventDefault();
        var targetUrl = card.getAttribute("data-product-url");
        if (targetUrl) {
          window.location.href = targetUrl;
        }
      });

      if (collectionSwiper) {
        collectionSwiper.update();
        updateCollectionNavigationButtonsState();
      }
    }

    document.title = product.name || document.title;
  }

  initHomeProductCards();
  initProductDetailsData();
  syncHeaderCartCount();

  window.addEventListener("storage", function (event) {
    if (!event || event.key === "gg_fashion_cart_items") {
      syncHeaderCartCount();
    }
  });

  document.addEventListener("cart:updated", function () {
    // Let other listeners persist latest cart state first, then read for badge.
    setTimeout(syncHeaderCartCount, 0);
  });

  function initAccordions() {
    var accordions = document.querySelectorAll(".js-accordion");
    if (!accordions.length) {
      return;
    }

    function setAccordionState(accordion, isOpen, shouldAnimate) {
      var trigger = accordion.querySelector(".js-accordion-trigger");
      var content = accordion.querySelector(".js-accordion-content");
      var icon = accordion.querySelector(".js-accordion-icon");
      if (!trigger || !content || !icon) {
        return;
      }

      accordion.setAttribute("data-open", String(isOpen));
      trigger.setAttribute("aria-expanded", String(isOpen));
      icon.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";

      if (!shouldAnimate) {
        content.style.maxHeight = isOpen ? content.scrollHeight + "px" : "0px";
        content.style.opacity = isOpen ? "1" : "0";
        return;
      }

      if (isOpen) {
        content.style.maxHeight = "0px";
        content.style.opacity = "0";
        requestAnimationFrame(function () {
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.opacity = "1";
        });
        return;
      }

      content.style.maxHeight = content.scrollHeight + "px";
      content.style.opacity = "1";
      requestAnimationFrame(function () {
        content.style.maxHeight = "0px";
        content.style.opacity = "0";
      });
    }

    accordions.forEach(function (accordion) {
      var trigger = accordion.querySelector(".js-accordion-trigger");
      if (!trigger) {
        return;
      }

      var isOpen = accordion.getAttribute("data-open") !== "false";
      setAccordionState(accordion, isOpen, false);

      trigger.addEventListener("click", function () {
        var currentlyOpen = accordion.getAttribute("data-open") === "true";
        setAccordionState(accordion, !currentlyOpen, true);
      });
    });

    window.addEventListener("resize", function () {
      accordions.forEach(function (accordion) {
        if (accordion.getAttribute("data-open") !== "true") {
          return;
        }
        var content = accordion.querySelector(".js-accordion-content");
        if (content) {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });
  }

  initAccordions();

  var productImageContainer = document.querySelector(".js-product-image-container");
  var productMainImage = productImageContainer ? productImageContainer.querySelector(".js-product-main-image") : null;
  var productZoomToggle = productImageContainer ? productImageContainer.querySelector(".js-product-zoom-toggle") : null;
  var productThumbButtons = document.querySelectorAll(".js-product-thumb");
  var productThumbPrevButton = document.querySelector(".js-product-thumb-prev");
  var productThumbNextButton = document.querySelector(".js-product-thumb-next");
  var isProductImageZoomed = false;
  var activeProductThumbIndex = 0;
  var productZoomScale = 1;
  var productPanX = 0;
  var productPanY = 0;
  var productPinchStartDistance = 0;
  var productPinchStartScale = 1;
  var isProductTouchDragging = false;
  var productTouchDragStartX = 0;
  var productTouchDragStartY = 0;
  var productRectCache = null;
  var productTransformRafId = 0;
  var isCoarsePointer = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
  var productMaxZoomScale = isCoarsePointer ? 2.2 : 3;

  if (productImageContainer && productMainImage && productZoomToggle) {
    function clampProductZoomScale(scale) {
      return Math.max(1, Math.min(scale, productMaxZoomScale));
    }

    function updateProductZoomUI() {
      isProductImageZoomed = productZoomScale > 1.01;
      productMainImage.style.cursor = isProductImageZoomed ? "zoom-out" : "zoom-in";
      productZoomToggle.setAttribute("aria-pressed", String(isProductImageZoomed));
      productZoomToggle.setAttribute("aria-label", isProductImageZoomed ? "Zoom out image" : "Zoom in image");
      productImageContainer.style.touchAction = isProductImageZoomed ? "none" : "manipulation";
    }

    function clampProductPan() {
      if (!isProductImageZoomed) {
        productPanX = 0;
        productPanY = 0;
        return;
      }

      var rect = productRectCache || productImageContainer.getBoundingClientRect();
      var maxPanX = ((productZoomScale - 1) * rect.width) / 2;
      var maxPanY = ((productZoomScale - 1) * rect.height) / 2;

      productPanX = Math.max(-maxPanX, Math.min(productPanX, maxPanX));
      productPanY = Math.max(-maxPanY, Math.min(productPanY, maxPanY));
    }

    function applyProductImageTransform() {
      if (productTransformRafId) {
        return;
      }
      productTransformRafId = window.requestAnimationFrame(function () {
        productTransformRafId = 0;
        productMainImage.style.transformOrigin = "center center";
        productMainImage.style.transform = "translate3d(" + productPanX + "px, " + productPanY + "px, 0) scale(" + productZoomScale + ")";
      });
    }

    function refreshProductRectCache() {
      productRectCache = productImageContainer.getBoundingClientRect();
    }

    function setProductImageZoomState(nextZoomState) {
      productMainImage.style.transition = isCoarsePointer ? "none" : "transform 220ms ease";
      refreshProductRectCache();
      productZoomScale = nextZoomState ? 1.8 : 1;
      if (!nextZoomState) {
        productPanX = 0;
        productPanY = 0;
      }
      updateProductZoomUI();
      clampProductPan();
      applyProductImageTransform();
    }

    function setProductMainImageFromThumb(index) {
      var thumb = productThumbButtons[index];
      if (!thumb) {
        return;
      }
      var thumbImage = thumb.querySelector("img");
      if (!thumbImage) {
        return;
      }

      var nextSrc = thumbImage.getAttribute("src");
      var nextSrcSet = thumbImage.getAttribute("srcset");
      var nextAlt = thumbImage.getAttribute("alt") || "img";

      if (nextSrc) {
        productMainImage.setAttribute("src", nextSrc);
      }
      if (nextSrcSet) {
        productMainImage.setAttribute("srcset", nextSrcSet);
      } else {
        productMainImage.removeAttribute("srcset");
      }
      productMainImage.setAttribute("alt", nextAlt);
      setProductImageZoomState(false);
    }

    function updateProductThumbButtonsState() {
      productThumbButtons.forEach(function (button, index) {
        var isActive = index === activeProductThumbIndex;
        button.classList.toggle("opacity-50", !isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });

      if (productThumbPrevButton) {
        var isAtStart = activeProductThumbIndex === 0;
        productThumbPrevButton.classList.toggle("opacity-50", isAtStart);
        productThumbPrevButton.style.cursor = isAtStart ? "not-allowed" : "pointer";
      }

      if (productThumbNextButton) {
        var isAtEnd = activeProductThumbIndex === productThumbButtons.length - 1;
        productThumbNextButton.classList.toggle("opacity-50", isAtEnd);
        productThumbNextButton.style.cursor = isAtEnd ? "not-allowed" : "pointer";
      }
    }

    function setActiveProductThumb(index) {
      if (!productThumbButtons.length) {
        return;
      }
      var clampedIndex = Math.max(0, Math.min(index, productThumbButtons.length - 1));
      activeProductThumbIndex = clampedIndex;
      setProductMainImageFromThumb(activeProductThumbIndex);
      updateProductThumbButtonsState();
    }

    productZoomToggle.addEventListener("click", function () {
      setProductImageZoomState(!isProductImageZoomed);
    });

    productImageContainer.addEventListener("click", function (event) {
      if (isCoarsePointer) {
        return;
      }
      if (event.target.closest(".js-product-zoom-toggle")) {
        return;
      }
      setProductImageZoomState(!isProductImageZoomed);
    });

    productImageContainer.addEventListener("mousemove", function (event) {
      if (!isProductImageZoomed) {
        return;
      }
      var rect = productRectCache || productImageContainer.getBoundingClientRect();
      var xRatio = (event.clientX - rect.left) / rect.width;
      var yRatio = (event.clientY - rect.top) / rect.height;
      var maxPanX = ((productZoomScale - 1) * rect.width) / 2;
      var maxPanY = ((productZoomScale - 1) * rect.height) / 2;
      productPanX = (0.5 - xRatio) * 2 * maxPanX;
      productPanY = (0.5 - yRatio) * 2 * maxPanY;
      clampProductPan();
      applyProductImageTransform();
    });

    productImageContainer.addEventListener("mouseleave", function () {
      if (isProductImageZoomed) {
        productPanX = 0;
        productPanY = 0;
        applyProductImageTransform();
      }
    });

    function getTouchesDistance(touchA, touchB) {
      var dx = touchA.clientX - touchB.clientX;
      var dy = touchA.clientY - touchB.clientY;
      return Math.sqrt(dx * dx + dy * dy);
    }

    productImageContainer.addEventListener("touchstart", function (event) {
      refreshProductRectCache();
      if (event.touches.length === 2) {
        event.preventDefault();
        productMainImage.style.transition = "none";
        productPinchStartDistance = getTouchesDistance(event.touches[0], event.touches[1]);
        productPinchStartScale = productZoomScale;
        isProductTouchDragging = false;
        return;
      }

      if (event.touches.length === 1 && isProductImageZoomed) {
        productMainImage.style.transition = "none";
        isProductTouchDragging = true;
        productTouchDragStartX = event.touches[0].clientX - productPanX;
        productTouchDragStartY = event.touches[0].clientY - productPanY;
      }
    }, { passive: false });

    productImageContainer.addEventListener("touchmove", function (event) {
      if (event.touches.length === 2 && productPinchStartDistance > 0) {
        event.preventDefault();
        var currentDistance = getTouchesDistance(event.touches[0], event.touches[1]);
        var nextScale = clampProductZoomScale(productPinchStartScale * (currentDistance / productPinchStartDistance));
        productZoomScale = nextScale;
        updateProductZoomUI();
        clampProductPan();
        applyProductImageTransform();
        return;
      }

      if (event.touches.length === 1 && isProductTouchDragging && isProductImageZoomed) {
        event.preventDefault();
        productPanX = event.touches[0].clientX - productTouchDragStartX;
        productPanY = event.touches[0].clientY - productTouchDragStartY;
        clampProductPan();
        applyProductImageTransform();
      }
    }, { passive: false });

    productImageContainer.addEventListener("touchend", function (event) {
      if (event.touches.length < 2) {
        productPinchStartDistance = 0;
      }

      if (event.touches.length === 0) {
        isProductTouchDragging = false;
        if (productZoomScale <= 1.01) {
          setProductImageZoomState(false);
        } else {
          productMainImage.style.transition = isCoarsePointer ? "none" : "transform 150ms ease-out";
          updateProductZoomUI();
          clampProductPan();
          applyProductImageTransform();
        }
        return;
      }

      if (event.touches.length === 1 && isProductImageZoomed) {
        isProductTouchDragging = true;
        productTouchDragStartX = event.touches[0].clientX - productPanX;
        productTouchDragStartY = event.touches[0].clientY - productPanY;
      }
    }, { passive: true });

    productImageContainer.addEventListener("touchcancel", function () {
      isProductTouchDragging = false;
      productPinchStartDistance = 0;
      productMainImage.style.transition = isCoarsePointer ? "none" : "transform 150ms ease-out";
    }, { passive: true });

    window.addEventListener("resize", function () {
      refreshProductRectCache();
      clampProductPan();
      applyProductImageTransform();
    });

    productMainImage.style.willChange = "transform";
    if (productThumbButtons.length) {
      productThumbButtons.forEach(function (button, index) {
        button.addEventListener("click", function () {
          setActiveProductThumb(index);
        });
      });
    }

    if (productThumbPrevButton) {
      productThumbPrevButton.addEventListener("click", function () {
        if (activeProductThumbIndex > 0) {
          setActiveProductThumb(activeProductThumbIndex - 1);
        }
      });
    }

    if (productThumbNextButton) {
      productThumbNextButton.addEventListener("click", function () {
        if (activeProductThumbIndex < productThumbButtons.length - 1) {
          setActiveProductThumb(activeProductThumbIndex + 1);
        }
      });
    }

    productImageContainer.style.touchAction = "manipulation";
    setActiveProductThumb(activeProductThumbIndex);
  }

  var colorProbe = document.createElement("span");
  colorProbe.className = "text-primary";
  colorProbe.style.display = "none";
  document.body.appendChild(colorProbe);
  var primaryColor = window.getComputedStyle(colorProbe).color;
  colorProbe.remove();
  var wishlistStorageKey = "gg_fashion_wishlist_ids";

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

  function writeWishlistIds(ids) {
    try {
      window.localStorage.setItem(wishlistStorageKey, JSON.stringify(ids));
    } catch (error) {
      // Storage can fail in restricted modes; keep UI usable.
    }
  }

  function hasWishlistProduct(productId) {
    if (!Number.isFinite(productId) || productId <= 0) {
      return false;
    }
    return readWishlistIds().indexOf(productId) !== -1;
  }

  function setWishlistProduct(productId, isActive) {
    if (!Number.isFinite(productId) || productId <= 0) {
      return;
    }
    var ids = readWishlistIds();
    var existingIndex = ids.indexOf(productId);
    if (isActive && existingIndex === -1) {
      ids.push(productId);
      writeWishlistIds(ids);
      return;
    }
    if (!isActive && existingIndex !== -1) {
      ids.splice(existingIndex, 1);
      writeWishlistIds(ids);
    }
  }

  function getProductIdFromUrl(urlValue) {
    var match = String(urlValue || "").match(/[?&](?:id|productId)=(\d+)/i);
    return match ? Number(match[1]) : NaN;
  }

  function resolveWishlistProductId(button) {
    if (!button) {
      return NaN;
    }

    var explicitId = Number(button.getAttribute("data-product-id"));
    if (Number.isFinite(explicitId) && explicitId > 0) {
      return explicitId;
    }

    var cardWithId = button.closest("[data-product-id]");
    if (cardWithId) {
      var cardId = Number(cardWithId.getAttribute("data-product-id"));
      if (Number.isFinite(cardId) && cardId > 0) {
        return cardId;
      }
    }

    var cardWithUrl = button.closest("[data-product-url]");
    if (cardWithUrl) {
      var fromCardUrl = getProductIdFromUrl(cardWithUrl.getAttribute("data-product-url"));
      if (Number.isFinite(fromCardUrl) && fromCardUrl > 0) {
        return fromCardUrl;
      }
    }

    var link = button.closest("a[href*='product-details.html']");
    if (link) {
      var fromLink = getProductIdFromUrl(link.getAttribute("href"));
      if (Number.isFinite(fromLink) && fromLink > 0) {
        return fromLink;
      }
    }

    if (button.classList.contains("js-product-detail-wishlist")) {
      var currentProductId = getProductIdFromUrl(window.location.search);
      if (Number.isFinite(currentProductId) && currentProductId > 0) {
        return currentProductId;
      }
    }

    return NaN;
  }

  function applyWishlistButtonState(button, isActive) {
    var icon = button.querySelector("svg");
    if (!icon) {
      return;
    }
    button.setAttribute("aria-pressed", String(isActive));
    icon.style.stroke = isActive ? primaryColor : "#ffffff";
    icon.style.fill = isActive ? primaryColor : "none";
  }

  function applyProductDetailIconState(button, isActive) {
    var icon = button.querySelector("svg");
    if (!icon) {
      return;
    }
    var nextColor = isActive ? primaryColor : "#B5B5B5";
    button.setAttribute("aria-pressed", String(isActive));

    icon.setAttribute("stroke", nextColor);
    icon.setAttribute("fill", isActive ? nextColor : "none");
    icon.querySelectorAll("path").forEach(function (path) {
      path.setAttribute("fill", isActive ? nextColor : "none");
      path.setAttribute("stroke", nextColor);
    });
  }

  function applyWishlistStateForButton(button, isActive) {
    if (!button) {
      return;
    }
    if (button.classList.contains("js-product-detail-wishlist")) {
      applyProductDetailIconState(button, isActive);
      return;
    }
    applyWishlistButtonState(button, isActive);
  }

  function syncWishlistStateForButton(button) {
    var productId = resolveWishlistProductId(button);
    var fallbackState = button.getAttribute("aria-pressed") === "true";
    var isActive = Number.isFinite(productId) && productId > 0
      ? hasWishlistProduct(productId)
      : fallbackState;
    applyWishlistStateForButton(button, isActive);
  }

  function syncAllWishlistButtons() {
    document.querySelectorAll(".js-wishlist-btn, .js-product-detail-wishlist").forEach(function (button) {
      syncWishlistStateForButton(button);
    });
  }

  function syncWishlistButtonsByProductId(productId, isActive) {
    document.querySelectorAll(".js-wishlist-btn, .js-product-detail-wishlist").forEach(function (button) {
      var buttonProductId = resolveWishlistProductId(button);
      if (buttonProductId === productId) {
        applyWishlistStateForButton(button, isActive);
      }
    });
  }

  syncAllWishlistButtons();

  document.addEventListener("click", function (event) {
    var button = event.target.closest(".js-wishlist-btn, .js-product-detail-wishlist");
    if (!button) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    var productId = resolveWishlistProductId(button);
    if (Number.isFinite(productId) && productId > 0) {
      var nextState = !hasWishlistProduct(productId);
      setWishlistProduct(productId, nextState);
      syncWishlistButtonsByProductId(productId, nextState);
      return;
    }
    var isActive = button.getAttribute("aria-pressed") === "true";
    applyWishlistStateForButton(button, !isActive);
  });

  var detailShareButton = document.querySelector(".js-product-detail-share");
  if (detailShareButton) {
    detailShareButton.addEventListener("click", function () {
      var productTitle = (document.querySelector(".js-product-title") || {}).textContent || document.title || "Product";
      var shareUrl = window.location.href;

      if (navigator.share) {
        navigator.share({
          title: productTitle.trim(),
          url: shareUrl
        }).catch(function () { });
        return;
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () {
          detailShareButton.classList.add("border-primary");
          setTimeout(function () {
            detailShareButton.classList.remove("border-primary");
          }, 800);
        }).catch(function () { });
      }
    });
  }

