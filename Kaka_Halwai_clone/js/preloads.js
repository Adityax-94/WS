
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.CgsWKOqO.js","/cdn/shopifycloud/checkout-web/assets/c1/app.BAfo4Jo_.js","/cdn/shopifycloud/checkout-web/assets/c1/vendor.ST0jZOux.js","/cdn/shopifycloud/checkout-web/assets/c1/browser.ghqTDstm.js","/cdn/shopifycloud/checkout-web/assets/c1/FullScreenBackground.Dhfmo3KY.js","/cdn/shopifycloud/checkout-web/assets/c1/object.SHxX1Pih.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-discount-offer.CQZ5iWE8.js","/cdn/shopifycloud/checkout-web/assets/c1/alternativePaymentCurrency.B6NjF-Lz.js","/cdn/shopifycloud/checkout-web/assets/c1/proposal.BoGGjMrG.js","/cdn/shopifycloud/checkout-web/assets/c1/useHasOrdersFromMultipleShops.Dt1nZbGt.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.Bcgd_fv6.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.216Qm8nS.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.C0fYLATg.js","/cdn/shopifycloud/checkout-web/assets/c1/OrderEditVaultedDelivery.CLGUrEqD.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice.Dqmdd3Wk.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer.D2L7XsrB.js","/cdn/shopifycloud/checkout-web/assets/c1/useShowShopPayOptin.C-fpl3Vq.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers.BkZ8lWeh.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer.BA1pLSh3.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText.Di_iD_np.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo.Dh7KZbmu.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment.rXZaBDBn.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummaryLine.CTkY_BSr.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.CkzUeL8i.js","/cdn/shopifycloud/checkout-web/assets/c1/PickupPointCarrierLogo.D8EdtWvx.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks.DEbQBUxe.js","/cdn/shopifycloud/checkout-web/assets/c1/AddDiscountButton.CirU4TVq.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary.B4N34f6v.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList.ozMwZ5UT.js","/cdn/shopifycloud/checkout-web/assets/c1/flags.CRkGghNh.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.C3muOpgx.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.nv2k6LHJ.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-options.SqPFEOnr.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions.DT6JTmTz.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.Cd3MVk8Z.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.BCuYpSD9.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.au8IBghB.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/FullScreenBackground.B_iZlQze.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useHasOrdersFromMultipleShops.BXcLvY09.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.CKTqepKH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OrderEditVaultedDelivery.1waIT_cE.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/helpers.BhtheElV.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AddDiscountButton.oEoBAbtG.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.BLDJqKwA.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RememberMeDescriptionText.BrcQzLuH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DutyOptions.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PickupPointCarrierLogo.DuZuWHqZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.BSemv9tH.css"];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/arvo/arvo_n4.cf5897c91bef7f76bce9d45a5025155aa004d2c7.woff2?h1=a2FrYWhhbHdhaS5jb20&hmac=0140918804a604a8e5897fc25179996aede9e48995502c5be7f0954a5953ffdb","https://fonts.shopifycdn.com/arvo/arvo_n7.8f3c956fdc29536848b99e4058bb94c0bc6ff549.woff2?h1=a2FrYWhhbHdhaS5jb20&hmac=c5e8593ef6063c16caf5ee8548d08466b2fa8fd333afce9f05a540c4d697af50"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0643/3115/3631/files/KHSC_LOGO_add55935-e18f-4869-b11a-6c0f95fe0fcd_x320.png?v=1662663514"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  