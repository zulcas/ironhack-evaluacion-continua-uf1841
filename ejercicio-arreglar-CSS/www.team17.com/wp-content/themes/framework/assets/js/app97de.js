(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/assets/js/app"],{

/***/ "./resources/css/style.css":
/*!*********************************!*\
  !*** ./resources/css/style.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/js/animations/scroll-animations.js":
/*!******************************************************!*\
  !*** ./resources/js/animations/scroll-animations.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollAnimations; });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scrollmonitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scrollmonitor */ "./node_modules/scrollmonitor/scrollMonitor.js");
/* harmony import */ var scrollmonitor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scrollmonitor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var ScrollAnimations = /*#__PURE__*/function () {
  function ScrollAnimations() {
    var _this = this;

    _classCallCheck(this, ScrollAnimations);

    this.cacheDom();
    setTimeout(function () {
      _this.init();
    }, 250);
  }

  _createClass(ScrollAnimations, [{
    key: "cacheDom",
    value: function cacheDom() {
      this.elements = document.querySelectorAll('[data-animate]'); // this.animEl = document.querySelector('.char')
      // this.timeline = gsap.timeline({
      //   defaults: {
      //     duration: 0.8,
      //     ease: 'cubic-bezier(0.63, 0.02, 0, 0.98)'
      //   }
      // })
    }
  }, {
    key: "init",
    value: function init() {
      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(this.elements)) {
        this.elements.forEach(function (el) {
          if (el.hasAttribute('data-no-animate')) {
            return;
          }

          var entered = false;
          var watchedItem = scrollmonitor__WEBPACK_IMPORTED_MODULE_1___default.a.create(el, window.innerHeight / 15 * -1); // console.log((window.innerHeight / 15) * -1)

          if (el.hasAttribute('data-delay')) {
            el.style.transitionDelay = "".concat(el.getAttribute('data-delay'), "ms");
          }

          watchedItem.enterViewport(function () {
            if (!entered) {
              entered = true;
              el.classList.add('animate');
            }
          });
        }); // setTimeout(() => {
        //   this.timeline.to('.char', { y: 0 }, '-=0.6')
        // }, 4000)
      }
    }
  }]);

  return ScrollAnimations;
}();



/***/ }),

/***/ "./resources/js/animations/smooth-anchor-scroll.js":
/*!*********************************************************!*\
  !*** ./resources/js/animations/smooth-anchor-scroll.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SmoothAnchorScroll; });
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smooth-scroll */ "./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js");
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smooth_scroll__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var SmoothAnchorScroll = /*#__PURE__*/function () {
  function SmoothAnchorScroll() {
    _classCallCheck(this, SmoothAnchorScroll);

    this.init();
  }

  _createClass(SmoothAnchorScroll, [{
    key: "init",
    value: function init() {
      new smooth_scroll__WEBPACK_IMPORTED_MODULE_0___default.a('a[href*="#"]', {
        speed: 700,
        speedAsDuration: true,
        updateURL: false,
        offset: 50
      });
    }
  }]);

  return SmoothAnchorScroll;
}();



/***/ }),

/***/ "./resources/js/animations/splitting-text.js":
/*!***************************************************!*\
  !*** ./resources/js/animations/splitting-text.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SplittingText; });
/* harmony import */ var splitting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! splitting */ "./node_modules/splitting/dist/splitting.js");
/* harmony import */ var splitting__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(splitting__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var SplittingText = /*#__PURE__*/function () {
  function SplittingText() {
    _classCallCheck(this, SplittingText);

    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!this.reducedMotion) {
      this.initSplitting(); // this.getDom()
      // this.initWrapping()
    }
  }

  _createClass(SplittingText, [{
    key: "initSplitting",
    value: function initSplitting() {
      splitting__WEBPACK_IMPORTED_MODULE_0___default()({
        target: '[data-animate="splitting-group"]',
        by: 'items'
      });
      splitting__WEBPACK_IMPORTED_MODULE_0___default()({
        target: '[data-animate="splitting"]',
        by: 'chars'
      });
      splitting__WEBPACK_IMPORTED_MODULE_0___default()({
        target: '.wysiwyg[data-animate="splitting-group"] h1, .wysiwyg[data-animate="splitting-group"] h2,.wysiwyg[data-animate="splitting-group"] h3, .wysiwyg[data-animate="splitting-group"] h4, .wysiwyg[data-animate="splitting-group"] h5',
        by: 'chars'
      });
    }
  }, {
    key: "getDom",
    value: function getDom() {
      this.chars = document.querySelectorAll('.char');
    }
  }, {
    key: "initWrapping",
    value: function initWrapping() {
      this.chars.forEach(function (el) {
        var wrapper = document.createElement('span');
        wrapper.className = 'char-wrapper';
        el.parentNode.insertBefore(wrapper, el);
        el.ariaHidden = true;
        wrapper.appendChild(el);
        el.parentNode.classList.add('ready');
      });
    }
  }]);

  return SplittingText;
}();



/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mdn_polyfills_NodeList_prototype_forEach__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdn-polyfills/NodeList.prototype.forEach */ "./node_modules/mdn-polyfills/NodeList.prototype.forEach.js");
/* harmony import */ var mdn_polyfills_NodeList_prototype_forEach__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mdn_polyfills_NodeList_prototype_forEach__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mdn_polyfills_Node_prototype_remove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdn-polyfills/Node.prototype.remove */ "./node_modules/mdn-polyfills/Node.prototype.remove.js");
/* harmony import */ var mdn_polyfills_Node_prototype_remove__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mdn_polyfills_Node_prototype_remove__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var url_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-polyfill */ "./node_modules/url-polyfill/url-polyfill.js");
/* harmony import */ var url_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url_polyfill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vanilla-lazyload */ "./node_modules/vanilla-lazyload/dist/lazyload.min.js");
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vanilla_lazyload__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var quicklink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! quicklink */ "./node_modules/quicklink/dist/quicklink.mjs");
/* harmony import */ var _animations_scroll_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animations/scroll-animations */ "./resources/js/animations/scroll-animations.js");
/* harmony import */ var _helpers_element_offsets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/element-offsets */ "./resources/js/helpers/element-offsets.js");
/* harmony import */ var _animations_splitting_text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./animations/splitting-text */ "./resources/js/animations/splitting-text.js");
/* harmony import */ var _site_site_header_social__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./site/site-header-social */ "./resources/js/site/site-header-social.js");
/* harmony import */ var _site_site_mobile_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./site/site-mobile-menu */ "./resources/js/site/site-mobile-menu.js");
/* harmony import */ var _site_site_search_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./site/site-search-form */ "./resources/js/site/site-search-form.js");
/* harmony import */ var _home_home_hero__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home-hero */ "./resources/js/home/home-hero.js");
/* harmony import */ var _home_home_discover__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home-discover */ "./resources/js/home/home-discover.js");
/* harmony import */ var _animations_smooth_anchor_scroll__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./animations/smooth-anchor-scroll */ "./resources/js/animations/smooth-anchor-scroll.js");
/* harmony import */ var _global_global_video_modals__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./global/global-video-modals */ "./resources/js/global/global-video-modals.js");
/* harmony import */ var _global_global_twitter_feeds__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./global/global-twitter-feeds */ "./resources/js/global/global-twitter-feeds.js");
/* harmony import */ var _global_global_games__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./global/global-games */ "./resources/js/global/global-games.js");
/* harmony import */ var _global_global_testimonials__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./global/global-testimonials */ "./resources/js/global/global-testimonials.js");
/* harmony import */ var _global_global_back_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./global/global-back-button */ "./resources/js/global/global-back-button.js");
/* harmony import */ var _global_global_reduced_motion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./global/global-reduced-motion */ "./resources/js/global/global-reduced-motion.js");
/* harmony import */ var _careers_careers_departments__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./careers/careers-departments */ "./resources/js/careers/careers-departments.js");
/* harmony import */ var _contact_contact_maps__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./contact/contact-maps */ "./resources/js/contact/contact-maps.js");
/* harmony import */ var _contact_contact_groups__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./contact/contact-groups */ "./resources/js/contact/contact-groups.js");
/* harmony import */ var _faqs_faqs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./faqs/faqs */ "./resources/js/faqs/faqs.js");
/* harmony import */ var _game_game_reviews__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./game/game-reviews */ "./resources/js/game/game-reviews.js");
/* harmony import */ var _game_game_cards__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./game/game-cards */ "./resources/js/game/game-cards.js");
/* harmony import */ var _game_game_news__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./game/game-news */ "./resources/js/game/game-news.js");
/* harmony import */ var _games_games_hero__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./games/games-hero */ "./resources/js/games/games-hero.js");
/* harmony import */ var _news_news_hero__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./news/news-hero */ "./resources/js/news/news-hero.js");
/* harmony import */ var _post_post_related__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./post/post-related */ "./resources/js/post/post-related.js");
/* harmony import */ var _terms_terms_reveal_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./terms/terms-reveal-button */ "./resources/js/terms/terms-reveal-button.js");
/* harmony import */ var _site_site_cookie_banner__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./site/site-cookie-banner */ "./resources/js/site/site-cookie-banner.js");
/* harmony import */ var _global_global_newsletter_banner__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./global/global-newsletter-banner */ "./resources/js/global/global-newsletter-banner.js");
/* harmony import */ var _store_grid_store_grid__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./store-grid/store-grid */ "./resources/js/store-grid/store-grid.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







































var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    this.reloaders = [];
    this.init();
    this.initResize();
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      Object(quicklink__WEBPACK_IMPORTED_MODULE_7__["listen"])();
      this.reloaders.push(new _helpers_element_offsets__WEBPACK_IMPORTED_MODULE_9__["default"]());
      new _animations_scroll_animations__WEBPACK_IMPORTED_MODULE_8__["default"]();
      new _animations_splitting_text__WEBPACK_IMPORTED_MODULE_10__["default"]();
      var lazy = new vanilla_lazyload__WEBPACK_IMPORTED_MODULE_6___default.a({
        elements_selector: '.lazyload',
        threshold: 1200,
        callback_loaded: function callback_loaded(el) {
          if (window.MSInputMethodContext === undefined && document.documentMode === undefined) {
            return;
          }

          if (el.hasAttribute('data-image')) {
            el.src = el.getAttribute('data-image');
          }
        }
      });
      new _site_site_mobile_menu__WEBPACK_IMPORTED_MODULE_12__["default"]();
      new _site_site_header_social__WEBPACK_IMPORTED_MODULE_11__["default"]();
      new _site_site_search_form__WEBPACK_IMPORTED_MODULE_13__["default"]();
      new _site_site_cookie_banner__WEBPACK_IMPORTED_MODULE_34__["default"]();
      new _home_home_hero__WEBPACK_IMPORTED_MODULE_14__["default"]();
      new _home_home_discover__WEBPACK_IMPORTED_MODULE_15__["default"]();
      new _animations_smooth_anchor_scroll__WEBPACK_IMPORTED_MODULE_16__["default"]();
      new _global_global_video_modals__WEBPACK_IMPORTED_MODULE_17__["default"]();
      new _global_global_twitter_feeds__WEBPACK_IMPORTED_MODULE_18__["default"]();
      new _global_global_games__WEBPACK_IMPORTED_MODULE_19__["default"]();
      new _global_global_testimonials__WEBPACK_IMPORTED_MODULE_20__["default"]();
      new _global_global_back_button__WEBPACK_IMPORTED_MODULE_21__["default"]();
      new _careers_careers_departments__WEBPACK_IMPORTED_MODULE_23__["default"]();
      new _contact_contact_maps__WEBPACK_IMPORTED_MODULE_24__["default"]();
      new _contact_contact_groups__WEBPACK_IMPORTED_MODULE_25__["default"]();
      new _faqs_faqs__WEBPACK_IMPORTED_MODULE_26__["default"]();
      new _game_game_reviews__WEBPACK_IMPORTED_MODULE_27__["default"]();
      new _game_game_cards__WEBPACK_IMPORTED_MODULE_28__["default"]();
      new _game_game_news__WEBPACK_IMPORTED_MODULE_29__["default"]();
      new _games_games_hero__WEBPACK_IMPORTED_MODULE_30__["default"]();
      new _news_news_hero__WEBPACK_IMPORTED_MODULE_31__["default"]();
      new _post_post_related__WEBPACK_IMPORTED_MODULE_32__["default"]();
      new _terms_terms_reveal_button__WEBPACK_IMPORTED_MODULE_33__["default"]();
      new _global_global_reduced_motion__WEBPACK_IMPORTED_MODULE_22__["default"]();
      new _global_global_newsletter_banner__WEBPACK_IMPORTED_MODULE_35__["default"]();
      new _store_grid_store_grid__WEBPACK_IMPORTED_MODULE_36__["default"]();
      lazy.update();
      object_fit_images__WEBPACK_IMPORTED_MODULE_3___default()();
    }
  }, {
    key: "initResize",
    value: function initResize() {
      var _this = this;

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default()(this.reloaders)) {
        window.addEventListener('resize', lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()(function () {
          _this.resize();
        }, 150), false);
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      this.reloaders.forEach(function (element) {
        if (typeof element.resize === 'function') {
          element.resize();
        }
      });
    }
  }]);

  return App;
}();

new App();

/***/ }),

/***/ "./resources/js/careers/careers-departments.js":
/*!*****************************************************!*\
  !*** ./resources/js/careers/careers-departments.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CareersDepartments; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/js/swiper.min */ "./node_modules/swiper/js/swiper.min.js");
/* harmony import */ var swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var CareersDepartments = /*#__PURE__*/function () {
  function CareersDepartments() {
    _classCallCheck(this, CareersDepartments);

    this.getDom();
    this.init();
  }

  _createClass(CareersDepartments, [{
    key: "getDom",
    value: function getDom() {
      this.imagesContainer = document.querySelector('.careers-departments__images');
      this.bodyContainer = document.querySelector('.careers-departments__body');
      this.btns = document.querySelectorAll('.careers-departments__btn');
      this.active = null;
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this.imagesContainer)) {
        this.imagesSlider = new swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_1___default.a(this.imagesContainer, {
          slidesPerView: 1,
          loop: false,
          allowTouchMove: false
        });
        this.bodySlider = new swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_1___default.a(this.bodyContainer, {
          slidesPerView: 1,
          loop: false,
          threshold: 0.25,
          allowTouchMove: false,
          controller: {
            control: this.imagesSlider,
            by: 'slide'
          }
        });
        this.active = this.btns[0];
        this.btns.forEach(function (btn, index) {
          btn.addEventListener('click', function (e) {
            e.preventDefault();

            _this.bodySlider.slideTo(index);

            _this.active.classList.remove('text-tangerine');

            _this.btns[index].classList.add('text-tangerine');

            _this.active = _this.btns[index];
          });
        });
      }
    }
  }]);

  return CareersDepartments;
}();



/***/ }),

/***/ "./resources/js/contact/contact-groups.js":
/*!************************************************!*\
  !*** ./resources/js/contact/contact-groups.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactGroups; });
/* harmony import */ var swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/js/swiper.min */ "./node_modules/swiper/js/swiper.min.js");
/* harmony import */ var swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNull */ "./node_modules/lodash/isNull.js");
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNull__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ContactGroups = /*#__PURE__*/function () {
  function ContactGroups() {
    _classCallCheck(this, ContactGroups);

    this.getDom();
    this.init();
  }

  _createClass(ContactGroups, [{
    key: "getDom",
    value: function getDom() {
      this.container = document.querySelector('.contact-contactGroups');
      this.anims = [];
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      if (!lodash_isNull__WEBPACK_IMPORTED_MODULE_1___default()(this.container)) {
        var wrapper = this.container.querySelector('.contact-contactGroups__container');
        var prevButtons = this.container.querySelectorAll('.contact-contactGroups__prev');
        var nextButtons = this.container.querySelectorAll('.contact-contactGroups__next');
        var pagination = this.container.querySelector('.swiper-pagination');
        var slider = new swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0___default.a(wrapper, {
          slidesPerView: 1,
          loop: false,
          threshold: 0.25,
          pagination: {
            el: pagination,
            type: 'bullets',
            clickable: true
          }
        });
        prevButtons.forEach(function (prev) {
          prev.addEventListener('click', function (e) {
            e.preventDefault();
            slider.slidePrev();
          });
        });
        nextButtons.forEach(function (next) {
          next.addEventListener('click', function (e) {
            e.preventDefault();
            slider.slideNext();
          });
        });
        Array.prototype.forEach.call(slider.slides, function (slide, i) {
          _this.anims.push(slide.querySelectorAll('[data-animate]'));
        });
        this.animateIn(this.anims[slider.activeIndex]);
        slider.on('slideChange', function () {
          _this.animateOut(_this.anims[slider.previousIndex]);

          _this.animateIn(_this.anims[slider.activeIndex]);

          if (slider.isEnd) {
            nextButtons.forEach(function (next) {
              next.classList.add('is-hidden');
            });
          } else {
            nextButtons.forEach(function (next) {
              next.classList.remove('is-hidden');
            });
          }

          if (slider.isBeginning) {
            prevButtons.forEach(function (prev) {
              prev.classList.add('is-hidden');
            });
          } else {
            prevButtons.forEach(function (prev) {
              prev.classList.remove('is-hidden');
            });
          }
        });
      }
    }
  }, {
    key: "animateIn",
    value: function animateIn(els) {
      els.forEach(function (el) {
        el.classList.add('animate');
      });
    }
  }, {
    key: "animateOut",
    value: function animateOut(els) {
      els.forEach(function (el) {
        el.classList.remove('animate');
      });
    }
  }]);

  return ContactGroups;
}();



/***/ }),

/***/ "./resources/js/contact/contact-maps.js":
/*!**********************************************!*\
  !*** ./resources/js/contact/contact-maps.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactMaps; });
/* harmony import */ var _helpers_google_maps_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/google-maps-api */ "./resources/js/helpers/google-maps-api.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ContactMaps = /*#__PURE__*/function () {
  function ContactMaps() {
    _classCallCheck(this, ContactMaps);

    this.cacheDom();
    this.init();
  }

  _createClass(ContactMaps, [{
    key: "cacheDom",
    value: function cacheDom() {
      this.containers = document.querySelectorAll('.contact-contactGroups__map');
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(this.containers)) {
        var gmap = new _helpers_google_maps_api__WEBPACK_IMPORTED_MODULE_0__["default"](app.map_api_key);
        gmap.load().then(function () {
          _this.containers.forEach(function (container) {
            if (container.hasAttribute('data-address')) {
              var address = container.getAttribute('data-address');

              _this.initMap(container, address);
            }
          });
        });
      }
    }
  }, {
    key: "initMap",
    value: function initMap(container, address) {
      var _this2 = this;

      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({
        address: address
      }, function (results, status) {
        if (status == 'OK') {
          var center = results[0].geometry.location;
          var zoom = container.hasAttribute('data-zoom') ? parseInt(container.getAttribute('data-zoom')) : 16;
          var map = new google.maps.Map(container, {
            center: center,
            zoom: zoom,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            fullscreenControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            styles: _this2.styles()
          });
          var marker = new google.maps.Marker({
            position: center,
            icon: app.map_pin,
            map: map
          });
        }
      });
    }
  }, {
    key: "styles",
    value: function styles() {
      return [{
        featureType: 'landscape',
        elementType: 'all',
        stylers: [{
          hue: '#F600FF'
        }, {
          gamma: 1
        }]
      }, {
        featureType: 'poi',
        elementType: 'all',
        stylers: [{
          hue: '#7200FF'
        }, {
          saturation: 49
        }, {
          gamma: 1
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'all',
        stylers: [{
          hue: '#DE00FF'
        }, {
          saturation: -4.6000000000000085
        }, {
          lightness: -1.4210854715202004e-14
        }, {
          gamma: 1
        }]
      }, {
        featureType: 'road.arterial',
        elementType: 'all',
        stylers: [{
          hue: '#FF009A'
        }, {
          gamma: 1
        }]
      }, {
        featureType: 'road.local',
        elementType: 'all',
        stylers: [{
          hue: '#FF0098'
        }, {
          gamma: 1
        }]
      }, {
        featureType: 'water',
        elementType: 'all',
        stylers: [{
          hue: '#EC00FF'
        }, {
          saturation: 72.4
        }, {
          gamma: 1
        }]
      }];
    }
  }]);

  return ContactMaps;
}();



/***/ }),

/***/ "./resources/js/faqs/faqs.js":
/*!***********************************!*\
  !*** ./resources/js/faqs/faqs.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Faqs; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Faqs = /*#__PURE__*/function () {
  function Faqs() {
    _classCallCheck(this, Faqs);

    this.getDom();
    this.init();
  }

  _createClass(Faqs, [{
    key: "getDom",
    value: function getDom() {
      this.cards = document.querySelectorAll('.faqs-list__card');
      this.bodies = document.querySelectorAll('.faqs-list__body');
      this.active = null;
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      this.cards.forEach(function (card, index) {
        card.addEventListener('click', function () {
          if (card.classList.contains('is-open')) {
            _this.close(index);

            _this.active = null;
          } else {
            if (_this.active != null) {
              _this.close(_this.active);
            }

            _this.open(index);
          }
        });
      });
    }
  }, {
    key: "close",
    value: function close(index) {
      this.cards[index].classList.remove('is-open');
      this.bodies[index].style.setProperty('height', '0px');
    }
  }, {
    key: "open",
    value: function open(index) {
      var height = this.bodies[index].scrollHeight;
      this.cards[index].classList.add('is-open');
      this.bodies[index].style.setProperty('height', "".concat(height, "px"));
      this.active = index;
    }
  }]);

  return Faqs;
}();



/***/ }),

/***/ "./resources/js/game/game-cards.js":
/*!*****************************************!*\
  !*** ./resources/js/game/game-cards.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameCards; });
/* harmony import */ var swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/js/swiper.min */ "./node_modules/swiper/js/swiper.min.js");
/* harmony import */ var swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var GameCards = /*#__PURE__*/function () {
  function GameCards() {
    _classCallCheck(this, GameCards);

    this.getDom();
    this.init();
  }

  _createClass(GameCards, [{
    key: "getDom",
    value: function getDom() {
      this.containers = document.querySelectorAll('.game-flexibleLayoutCards');
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      this.containers.forEach(function (container) {
        var slides = container.querySelectorAll('.game-flexibleLayoutCards__slide');
        var wrapper = container.querySelector('.game-flexibleLayoutCards__container');
        var pagination = wrapper.querySelector('.swiper-pagination');
        var prev = container.querySelector('.game-flexibleLayoutCards__prev');
        var next = container.querySelector('.game-flexibleLayoutCards__next');
        var modal = container.querySelector('.game-flexibleLayoutCards__modal');
        var modalWrapper = container.querySelector('.game-flexibleLayoutCards__modalContainer');
        var modalPagination = modalWrapper.querySelector('.swiper-pagination');
        var modalPrev = container.querySelector('.game-flexibleLayoutCards__modalPrev');
        var modalNext = container.querySelector('.game-flexibleLayoutCards__modalNext');
        var modalOverlay = container.querySelector('.game-flexibleLayoutCards__modalOverlay');
        var modalClose = container.querySelector('.game-flexibleLayoutCards__modalClose');
        var slider = new swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0___default.a(wrapper, {
          slidesPerView: 'auto',
          loop: false,
          threshold: 0.25,
          pagination: {
            el: pagination,
            type: 'bullets',
            clickable: true
          }
        });
        prev.addEventListener('click', function (e) {
          e.preventDefault();
          slider.slidePrev();
        });
        next.addEventListener('click', function (e) {
          e.preventDefault();
          slider.slideNext();
        });
        slider.on('slideChange', function () {
          if (slider.isEnd) {
            next.classList.add('is-hidden');
          } else {
            next.classList.remove('is-hidden');
          }

          if (slider.isBeginning) {
            prev.classList.add('is-hidden');
          } else {
            prev.classList.remove('is-hidden');
          }
        });
        var modalSlider = new swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0___default.a(modalWrapper, {
          slidesPerView: 'auto',
          loop: false,
          threshold: 0.25,
          pagination: {
            el: modalPagination,
            type: 'bullets',
            clickable: true
          }
        });
        modalPrev.addEventListener('click', function (e) {
          e.preventDefault();
          modalSlider.slidePrev();
        });
        modalNext.addEventListener('click', function (e) {
          e.preventDefault();
          modalSlider.slideNext();
        });
        modalSlider.on('slideChange', function () {
          if (modalSlider.isEnd) {
            modalNext.classList.add('is-hidden');
          } else {
            modalNext.classList.remove('is-hidden');
          }

          if (modalSlider.isBeginning) {
            modalPrev.classList.add('is-hidden');
          } else {
            modalPrev.classList.remove('is-hidden');
          }
        });
        slides.forEach(function (slide, index) {
          slide.addEventListener('click', function () {
            modalSlider.slideTo(index, 0);
            Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_1__["disableBodyScroll"])(_this.modal);
            modal.classList.remove('is-hidden');
            modalOverlay.classList.remove('is-hidden');
          });
        });
        modalClose.addEventListener('click', function () {
          Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_1__["enableBodyScroll"])(_this.modal);
          modal.classList.add('is-hidden');
          modalOverlay.classList.add('is-hidden');
        });
      });
    }
  }]);

  return GameCards;
}();



/***/ }),

/***/ "./resources/js/game/game-news.js":
/*!****************************************!*\
  !*** ./resources/js/game/game-news.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameNews; });
/* harmony import */ var swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/js/swiper.min */ "./node_modules/swiper/js/swiper.min.js");
/* harmony import */ var swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var GameNews = /*#__PURE__*/function () {
  function GameNews() {
    _classCallCheck(this, GameNews);

    this.getDom();
    this.init();
  }

  _createClass(GameNews, [{
    key: "getDom",
    value: function getDom() {
      this.containers = document.querySelectorAll('.game-flexibleLayoutNews');
    }
  }, {
    key: "init",
    value: function init() {
      this.containers.forEach(function (container) {
        var wrapper = container.querySelector('.game-flexibleLayoutNews__container');
        var pagination = container.querySelector('.swiper-pagination');
        var slider = new swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0___default.a(wrapper, {
          slidesPerView: 'auto',
          loop: false,
          threshold: 0.25,
          pagination: {
            el: pagination,
            type: 'bullets',
            clickable: true
          }
        });
      });
    }
  }]);

  return GameNews;
}();



/***/ }),

/***/ "./resources/js/game/game-reviews.js":
/*!*******************************************!*\
  !*** ./resources/js/game/game-reviews.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameReviews; });
/* harmony import */ var swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/js/swiper.min */ "./node_modules/swiper/js/swiper.min.js");
/* harmony import */ var swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var GameReviews = /*#__PURE__*/function () {
  function GameReviews() {
    _classCallCheck(this, GameReviews);

    this.getDom();
    this.init();
  }

  _createClass(GameReviews, [{
    key: "getDom",
    value: function getDom() {
      this.containers = document.querySelectorAll('.game-flexibleLayoutReviews');
    }
  }, {
    key: "init",
    value: function init() {
      this.containers.forEach(function (container) {
        var wrapper = container.querySelector('.game-flexibleLayoutReviews__container');
        var pagination = container.querySelector('.swiper-pagination');
        var slider = new swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0___default.a(wrapper, {
          slidesPerView: 'auto',
          loop: false,
          threshold: 0.25,
          pagination: {
            el: pagination,
            type: 'bullets',
            clickable: true
          }
        });
      });
    }
  }]);

  return GameReviews;
}();



/***/ }),

/***/ "./resources/js/games/games-hero.js":
/*!******************************************!*\
  !*** ./resources/js/games/games-hero.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GamesHero; });
/* harmony import */ var swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/js/swiper.min */ "./node_modules/swiper/js/swiper.min.js");
/* harmony import */ var swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var GamesHero = /*#__PURE__*/function () {
  function GamesHero() {
    _classCallCheck(this, GamesHero);

    this.getDom();
    this.init();
  }

  _createClass(GamesHero, [{
    key: "getDom",
    value: function getDom() {
      this.container = document.querySelector('.games-hero');
      this.anims = [];
      this.imageAnims = [];
      this.reverseDirection = false;
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isNull"])(this.container)) {
        var wrapper = this.container.querySelector('.games-hero__container');
        var pagination = this.container.querySelector('.swiper-pagination');
        var images = this.container.querySelectorAll('.games-hero__image');
        var contentAreas = this.container.querySelectorAll('.games-hero__slideContent');
        var prevIndex = 0;
        var currentIndex = 0;
        var slider = new swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0___default.a(wrapper, {
          slidesPerView: 1,
          loop: true,
          threshold: 0.25,
          watchSlidesProgress: true,
          pagination: {
            el: pagination,
            type: 'bullets',
            clickable: false
          },
          autoplay: !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(wrapper.getAttribute('data-autoplay')) ? {
            delay: wrapper.getAttribute('data-autoplay'),
            reverseDirection: this.reverseDirection
          } : false
        }); // slider.on('progress', e => {
        //   console.log(e)
        // })
        // slider.on('progress', e => {
        //   let progress = 1 - Math.abs(e * (images.length - 1) - slider.realIndex)
        //   // console.log(currentIndex)
        //   console.log(images.length / e, e)
        //   // if (progress > 1) {
        //   //   progress = 1
        //   // }
        //   contentAreas[slider.realIndex].style.setProperty('opacity', progress)
        // })

        Array.prototype.forEach.call(slider.slides, function (slide, index) {
          _this.anims.push(slide.querySelectorAll('[data-animate]'));

          _this.imageAnims.push(gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(images[index], {
            x: -200,
            opacity: 0,
            paused: true,
            ease: 'power2.inOut'
          }));
        });
        this.animateIn(this.anims[slider.activeIndex]);
        slider.on('slideChange', function () {
          _this.animateOut(_this.anims[slider.previousIndex]);

          _this.animateIn(_this.anims[slider.activeIndex]);

          if (slider.realIndex > prevIndex && slider.realIndex - prevIndex !== slider.slides.length - 3) {
            _this.imageAnims[prevIndex].play();
          } else if (slider.realIndex === 0) {
            _this.imageAnims.forEach(function (anim) {
              anim.reverse();
            });
          } else if (slider.realIndex - prevIndex === slider.slides.length - 3) {
            _this.imageAnims.forEach(function (anim, index) {
              if (index !== _this.imageAnims.length - 3) anim.play();
            });
          } else {
            _this.imageAnims[slider.activeIndex - 1].reverse();
          }

          if (slider.realIndex - prevIndex === slider.slides.length - 3) {}

          currentIndex = slider.activeIndex;
          prevIndex = slider.realIndex;
        });
      }
    }
  }, {
    key: "animateIn",
    value: function animateIn(els) {
      els.forEach(function (el) {
        el.classList.add('animate');
      });
    }
  }, {
    key: "animateOut",
    value: function animateOut(els) {
      els.forEach(function (el) {
        el.classList.remove('animate');
      });
    }
  }]);

  return GamesHero;
}();



/***/ }),

/***/ "./resources/js/global/global-back-button.js":
/*!***************************************************!*\
  !*** ./resources/js/global/global-back-button.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalBackButton; });
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNull */ "./node_modules/lodash/isNull.js");
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNull__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var GlobalBackButton = /*#__PURE__*/function () {
  function GlobalBackButton() {
    _classCallCheck(this, GlobalBackButton);

    this.getDom();
    this.init();
  }

  _createClass(GlobalBackButton, [{
    key: "getDom",
    value: function getDom() {
      this.btn = document.querySelector('.global-backBtn');
      this.btnBackup = document.querySelector('.global-backBtnBackup');
    }
  }, {
    key: "init",
    value: function init() {
      if (!lodash_isNull__WEBPACK_IMPORTED_MODULE_0___default()(this.btn)) {
        if (document.referrer.includes(location.origin)) {
          this.btn.classList.remove('hidden');
        } else if (!lodash_isNull__WEBPACK_IMPORTED_MODULE_0___default()(this.btnBackup)) {
          this.btnBackup.classList.remove('hidden');
        }
      }
    }
  }]);

  return GlobalBackButton;
}();



/***/ }),

/***/ "./resources/js/global/global-games.js":
/*!*********************************************!*\
  !*** ./resources/js/global/global-games.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalGames; });
/* harmony import */ var swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/js/swiper.min */ "./node_modules/swiper/js/swiper.min.js");
/* harmony import */ var swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var GlobalGames = /*#__PURE__*/function () {
  function GlobalGames() {
    _classCallCheck(this, GlobalGames);

    this.getDom();
    this.init();
  }

  _createClass(GlobalGames, [{
    key: "getDom",
    value: function getDom() {
      this.containers = document.querySelectorAll('.global-games__container');
    }
  }, {
    key: "init",
    value: function init() {
      this.containers.forEach(function (container) {
        var slider = new swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0___default.a(container, {
          slidesPerView: 'auto',
          loop: false,
          threshold: 0.25,
          pagination: {
            el: container.querySelector('.swiper-pagination'),
            type: 'bullets',
            clickable: true
          }
        });
      });
    }
  }]);

  return GlobalGames;
}();



/***/ }),

/***/ "./resources/js/global/global-newsletter-banner.js":
/*!*********************************************************!*\
  !*** ./resources/js/global/global-newsletter-banner.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalCookieBanner; });
/* harmony import */ var cookies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookies-js */ "./node_modules/cookies-js/dist/cookies.js");
/* harmony import */ var cookies_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNull */ "./node_modules/lodash/isNull.js");
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNull__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var GlobalCookieBanner = /*#__PURE__*/function () {
  function GlobalCookieBanner() {
    _classCallCheck(this, GlobalCookieBanner);

    this.getDom();
    this.init();
  }

  _createClass(GlobalCookieBanner, [{
    key: "getDom",
    value: function getDom() {
      this.cookie = cookies_js__WEBPACK_IMPORTED_MODULE_0___default.a.get('NewsletterBanner');
      this.newsletter = document.querySelector('.global-newsletter');
      this.banner = document.querySelector('.global-newsletterBanner');
      this.btns = document.querySelectorAll('.global-newsletterBanner__close');
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      if (!lodash_isNull__WEBPACK_IMPORTED_MODULE_1___default()(this.banner) && !lodash_isNull__WEBPACK_IMPORTED_MODULE_1___default()(this.newsletter)) {
        if (this.cookie === undefined) {
          this.banner.classList.remove('is-hidden');
          this.btns.forEach(function (btn) {
            btn.addEventListener('click', function () {
              cookies_js__WEBPACK_IMPORTED_MODULE_0___default.a.set('NewsletterBanner', 'true', {
                expires: 2628000
              });

              _this.banner.classList.add('is-hidden');
            });
          });
        }
      }
    }
  }]);

  return GlobalCookieBanner;
}();



/***/ }),

/***/ "./resources/js/global/global-reduced-motion.js":
/*!******************************************************!*\
  !*** ./resources/js/global/global-reduced-motion.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalReducedMotion; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GlobalReducedMotion = /*#__PURE__*/function () {
  function GlobalReducedMotion() {
    _classCallCheck(this, GlobalReducedMotion);

    this.getDom();

    if (this.reducedMotion) {
      this.removeAutoplay();
    }
  }

  _createClass(GlobalReducedMotion, [{
    key: "getDom",
    value: function getDom() {
      this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.videos = document.querySelectorAll('.reduced-autoplay');
    }
  }, {
    key: "removeAutoplay",
    value: function removeAutoplay() {
      this.videos.forEach(function (video) {
        video.removeAttribute('autoplay');
      });
    }
  }]);

  return GlobalReducedMotion;
}();



/***/ }),

/***/ "./resources/js/global/global-testimonials.js":
/*!****************************************************!*\
  !*** ./resources/js/global/global-testimonials.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalTestimonials; });
/* harmony import */ var swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/js/swiper.min */ "./node_modules/swiper/js/swiper.min.js");
/* harmony import */ var swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var GlobalTestimonials = /*#__PURE__*/function () {
  function GlobalTestimonials() {
    _classCallCheck(this, GlobalTestimonials);

    this.getDom();
    this.init();
  }

  _createClass(GlobalTestimonials, [{
    key: "getDom",
    value: function getDom() {
      this.containers = document.querySelectorAll('.global-testimonials');
    }
  }, {
    key: "init",
    value: function init() {
      this.containers.forEach(function (container) {
        var wrapper = container.querySelector('.global-testimonials__container');
        var prevButtons = container.querySelectorAll('.global-testimonials__prev');
        var nextButtons = container.querySelectorAll('.global-testimonials__next');
        var slider = new swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0___default.a(wrapper, {
          autoHeight: true,
          slidesPerView: 'auto',
          loop: true,
          threshold: 0.25,
          autoplay: !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(wrapper.getAttribute('data-autoplay')) ? {
            delay: wrapper.getAttribute('data-autoplay')
          } : false
        });
        prevButtons.forEach(function (prev) {
          prev.addEventListener('click', function (e) {
            e.preventDefault();
            slider.slidePrev();
          });
        });
        nextButtons.forEach(function (next) {
          next.addEventListener('click', function (e) {
            e.preventDefault();
            slider.slideNext();
          });
        });
      });
    }
  }]);

  return GlobalTestimonials;
}();



/***/ }),

/***/ "./resources/js/global/global-twitter-feeds.js":
/*!*****************************************************!*\
  !*** ./resources/js/global/global-twitter-feeds.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalTwitterFeeds; });
/* harmony import */ var swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/js/swiper.min */ "./node_modules/swiper/js/swiper.min.js");
/* harmony import */ var swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var GlobalTwitterFeeds = /*#__PURE__*/function () {
  function GlobalTwitterFeeds() {
    _classCallCheck(this, GlobalTwitterFeeds);

    this.getDom();
    this.init();
  }

  _createClass(GlobalTwitterFeeds, [{
    key: "getDom",
    value: function getDom() {
      this.containers = document.querySelectorAll('.global-twitterFeed__container');
    }
  }, {
    key: "init",
    value: function init() {
      this.containers.forEach(function (container) {
        var slider = new swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0___default.a(container, {
          slidesPerView: 'auto',
          loop: false,
          threshold: 0.25
        });
      });
    }
  }]);

  return GlobalTwitterFeeds;
}();



/***/ }),

/***/ "./resources/js/global/global-video-modals.js":
/*!****************************************************!*\
  !*** ./resources/js/global/global-video-modals.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalVideoModals; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var youtube_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! youtube-player */ "./node_modules/youtube-player/dist/index.js");
/* harmony import */ var youtube_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(youtube_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var GlobalVideoModals = /*#__PURE__*/function () {
  function GlobalVideoModals() {
    _classCallCheck(this, GlobalVideoModals);

    this.getDom();
    this.init();
  }

  _createClass(GlobalVideoModals, [{
    key: "getDom",
    value: function getDom() {
      this.modal = document.querySelector('.global-videoModal');
      this.container = document.querySelector('.global-videoModal__player');
      this.close = document.querySelector('.global-videoModal__close');
      this.triggers = document.querySelectorAll('[data-video-modal]');
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(this.triggers)) {
        var player = youtube_player__WEBPACK_IMPORTED_MODULE_1___default()(this.container);
        this.triggers.forEach(function (trigger) {
          trigger.addEventListener('click', function (e) {
            e.preventDefault();

            _this.modal.classList.remove('is-hidden');

            player.loadVideoById(trigger.getAttribute('data-video-modal'));
            player.playVideo();
            Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_2__["disableBodyScroll"])(_this.modal);
          });
        });
        this.close.addEventListener('click', function (e) {
          e.preventDefault();

          _this.modal.classList.add('is-hidden');

          player.stopVideo();
          Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_2__["enableBodyScroll"])(_this.modal);
        });
      }
    }
  }]);

  return GlobalVideoModals;
}();



/***/ }),

/***/ "./resources/js/helpers/element-offsets.js":
/*!*************************************************!*\
  !*** ./resources/js/helpers/element-offsets.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ElementOffsets; });
/* harmony import */ var css_box_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-box-model */ "./node_modules/css-box-model/dist/css-box-model.esm.js");
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNull */ "./node_modules/lodash/isNull.js");
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNull__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fontfaceobserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fontfaceobserver */ "./node_modules/fontfaceobserver/fontfaceobserver.standalone.js");
/* harmony import */ var fontfaceobserver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fontfaceobserver__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var ElementOffsets = /*#__PURE__*/function () {
  function ElementOffsets() {
    var _this = this;

    _classCallCheck(this, ElementOffsets);

    this.cacheDom();
    this.init();
    this.font = new fontfaceobserver__WEBPACK_IMPORTED_MODULE_3___default.a('Codec Pro');
    this.font.load().then(function () {
      _this.resize();
    });
  }

  _createClass(ElementOffsets, [{
    key: "cacheDom",
    value: function cacheDom() {
      // Setup globals
      this.affected = document.querySelectorAll('[data-offset-el]');
      this.watchers = {};
      this.cachedAffected = {};
    }
  }, {
    key: "init",
    value: function init() {
      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(this.affected)) {
        this.getWatchers();
        this.setOffsets();
      }
    }
  }, {
    key: "getWatchers",
    value: function getWatchers() {
      var _this2 = this;

      this.affected.forEach(function (el, i) {
        // Get offset element selector
        var selector = el.getAttribute('data-offset-el'); // Break early if no selector is available

        if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(selector)) {
          return;
        } // Check if watcher is already available


        if (_this2.watchers.hasOwnProperty(selector)) {
          // Get property to offset
          var prop = el.getAttribute('data-offset-prop');

          if (!lodash_isNull__WEBPACK_IMPORTED_MODULE_1___default()(prop)) {
            // Add affected object
            _this2.cachedAffected[i] = {
              el: el,
              prop: prop,
              propValue: null,
              selector: selector
            };
          }
        } else {
          // Get affector
          var affector = document.querySelector(selector);

          if (!lodash_isNull__WEBPACK_IMPORTED_MODULE_1___default()(affector)) {
            // Get property to offset
            var _prop = el.getAttribute('data-offset-prop');

            if (!lodash_isNull__WEBPACK_IMPORTED_MODULE_1___default()(_prop)) {
              // Get affector box-model
              var box = Object(css_box_model__WEBPACK_IMPORTED_MODULE_0__["getBox"])(affector);
              var height = box.borderBox.height; // Create and add watcher/affected objects

              _this2.watchers[selector] = {
                affector: affector,
                height: height
              };
              _this2.cachedAffected[i] = {
                el: el,
                prop: _prop,
                propValue: null,
                selector: selector
              };
            }
          }
        }
      });
    }
  }, {
    key: "setOffsets",
    value: function setOffsets() {
      var _this3 = this;

      Object.keys(this.cachedAffected).forEach(function (key) {
        // Get cached watchers and affected then set property to watched height
        var _this3$cachedAffected = _this3.cachedAffected[key],
            el = _this3$cachedAffected.el,
            prop = _this3$cachedAffected.prop,
            propValue = _this3$cachedAffected.propValue,
            selector = _this3$cachedAffected.selector;
        var height = _this3.watchers[selector].height; // Check if property has changed

        if (lodash_isNull__WEBPACK_IMPORTED_MODULE_1___default()(propValue) || height != propValue) {
          // Set property
          el.style.setProperty(prop, "".concat(height.toString(), "px")); // Update property value for use on resize comparison

          _this3.cachedAffected[key].propValue = height;
        }
      });
    }
  }, {
    key: "updateWatchers",
    value: function updateWatchers() {
      var _this4 = this;

      Object.keys(this.watchers).forEach(function (key) {
        // Update watcher heights using fresh box-model
        var box = Object(css_box_model__WEBPACK_IMPORTED_MODULE_0__["getBox"])(_this4.watchers[key].affector);
        var height = box.borderBox.height;
        _this4.watchers[key].height = height;
      });
    }
  }, {
    key: "resize",
    value: function resize() {
      if (!lodash_isNull__WEBPACK_IMPORTED_MODULE_1___default()(this.affected)) {
        this.updateWatchers();
        this.setOffsets();
      }
    }
  }]);

  return ElementOffsets;
}();



/***/ }),

/***/ "./resources/js/helpers/google-maps-api.js":
/*!*************************************************!*\
  !*** ./resources/js/helpers/google-maps-api.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GoogleMapsApi; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GoogleMapsApi = /*#__PURE__*/function () {
  /**
   * Constructor set up config.
   */
  function GoogleMapsApi() {
    var apiKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, GoogleMapsApi);

    // api key for google maps
    this.apiKey = apiKey; // set a globally scoped callback if it doesn't already exist

    if (!window.GoogleMapsApi) {
      this.callbackName = 'GoogleMapsApi.mapLoaded';
      window.GoogleMapsApi = this;
      window.GoogleMapsApi.mapLoaded = this.mapLoaded.bind(this);
    }
  }
  /**
   * Load the Google Maps API javascript
   */


  _createClass(GoogleMapsApi, [{
    key: "load",
    value: function load() {
      var _this = this;

      if (!this.promise) {
        this.promise = new Promise(function (resolve) {
          _this.resolve = resolve;

          if (typeof window.google === 'undefined') {
            var script = document.createElement('script');
            script.src = "//maps.googleapis.com/maps/api/js?key=".concat(_this.apiKey, "&callback=").concat(_this.callbackName);
            script.async = true;
            document.body.appendChild(script);
          } else {
            _this.resolve();
          }
        });
      }

      return this.promise;
    }
    /**
     * Globally scoped callback for the map loaded
     */

  }, {
    key: "mapLoaded",
    value: function mapLoaded() {
      if (this.resolve) {
        this.resolve();
      }
    }
  }]);

  return GoogleMapsApi;
}();



/***/ }),

/***/ "./resources/js/home/home-discover.js":
/*!********************************************!*\
  !*** ./resources/js/home/home-discover.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomeDiscover; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! masonry-layout */ "./node_modules/masonry-layout/masonry.js");
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(masonry_layout__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var HomeDiscover = /*#__PURE__*/function () {
  function HomeDiscover() {
    _classCallCheck(this, HomeDiscover);

    this.getDom();
    this.init();
  }

  _createClass(HomeDiscover, [{
    key: "getDom",
    value: function getDom() {
      this.grid = document.querySelector('.home-discover__grid');
    }
  }, {
    key: "init",
    value: function init() {
      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this.grid)) {
        this.msnry = new masonry_layout__WEBPACK_IMPORTED_MODULE_1___default.a(this.grid, {
          itemSelector: '.home-discover__gridItem'
        });
      }
    }
  }]);

  return HomeDiscover;
}();



/***/ }),

/***/ "./resources/js/home/home-hero.js":
/*!****************************************!*\
  !*** ./resources/js/home/home-hero.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomeHero; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/js/swiper.min */ "./node_modules/swiper/js/swiper.min.js");
/* harmony import */ var swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var HomeHero = /*#__PURE__*/function () {
  function HomeHero() {
    _classCallCheck(this, HomeHero);

    this.getDom();
    this.init();
  }

  _createClass(HomeHero, [{
    key: "getDom",
    value: function getDom() {
      this.mediaContainer = document.querySelector('.home-hero__mediaContainer');
      this.gameContainer = document.querySelector('.home-hero__gameContainer');
      this.pagination = document.querySelector('.home-hero__pagination');
    }
  }, {
    key: "init",
    value: function init() {
      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this.gameContainer)) {
        this.gameSlider = new swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_1___default.a(this.gameContainer, {
          slidesPerView: 1,
          loop: true,
          allowTouchMove: false
        });
      }

      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this.mediaContainer)) {
        this.mediaSlider = new swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_1___default.a(this.mediaContainer, {
          slidesPerView: 1,
          loop: true,
          threshold: 0.25,
          controller: {
            control: this.gameSlider,
            by: 'slide'
          },
          autoplay: !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(this.mediaContainer.getAttribute('data-autoplay')) ? {
            delay: this.mediaContainer.getAttribute('data-autoplay')
          } : false,
          pagination: {
            el: this.pagination,
            type: 'bullets',
            clickable: true
          }
        });
      }
    }
  }]);

  return HomeHero;
}();



/***/ }),

/***/ "./resources/js/news/news-hero.js":
/*!****************************************!*\
  !*** ./resources/js/news/news-hero.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewsHero; });
/* harmony import */ var swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/js/swiper.min */ "./node_modules/swiper/js/swiper.min.js");
/* harmony import */ var swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var NewsHero = /*#__PURE__*/function () {
  function NewsHero() {
    _classCallCheck(this, NewsHero);

    this.getDom();
    this.init();
  }

  _createClass(NewsHero, [{
    key: "getDom",
    value: function getDom() {
      this.container = document.querySelector('.news-hero');
      this.anims = [];
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isNull"])(this.container)) {
        var wrapper = this.container.querySelector('.news-hero__container');
        var pagination = this.container.querySelector('.swiper-pagination');
        var slider = new swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0___default.a(wrapper, {
          slidesPerView: 'auto',
          loop: true,
          threshold: 0.25,
          pagination: {
            el: pagination,
            type: 'bullets',
            clickable: true
          }
        });
        Array.prototype.forEach.call(slider.slides, function (slide) {
          _this.anims.push(slide.querySelectorAll('[data-animate]'));
        });
        this.animateIn(this.anims[slider.activeIndex]);
        slider.on('slideChange', function () {
          _this.animateOut(_this.anims[slider.previousIndex]);

          _this.animateIn(_this.anims[slider.activeIndex]);
        });
      }
    }
  }, {
    key: "animateIn",
    value: function animateIn(els) {
      els.forEach(function (el) {
        el.classList.add('animate');
      });
    }
  }, {
    key: "animateOut",
    value: function animateOut(els) {
      els.forEach(function (el) {
        el.classList.remove('animate');
      });
    }
  }]);

  return NewsHero;
}();



/***/ }),

/***/ "./resources/js/post/post-related.js":
/*!*******************************************!*\
  !*** ./resources/js/post/post-related.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostRelated; });
/* harmony import */ var swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/js/swiper.min */ "./node_modules/swiper/js/swiper.min.js");
/* harmony import */ var swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var PostRelated = /*#__PURE__*/function () {
  function PostRelated() {
    _classCallCheck(this, PostRelated);

    this.getDom();
    this.init();
  }

  _createClass(PostRelated, [{
    key: "getDom",
    value: function getDom() {
      this.container = document.querySelector('.post-related');
    }
  }, {
    key: "init",
    value: function init() {
      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isNull"])(this.container)) {
        var wrapper = this.container.querySelector('.post-related__container');
        var pagination = this.container.querySelector('.swiper-pagination');
        var slider = new swiper_js_swiper_min__WEBPACK_IMPORTED_MODULE_0___default.a(wrapper, {
          slidesPerView: 'auto',
          loop: false,
          threshold: 0.25,
          pagination: {
            el: pagination,
            type: 'bullets',
            clickable: true
          }
        });
      }
    }
  }]);

  return PostRelated;
}();



/***/ }),

/***/ "./resources/js/site/site-cookie-banner.js":
/*!*************************************************!*\
  !*** ./resources/js/site/site-cookie-banner.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteCookieBanner; });
/* harmony import */ var cookies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookies-js */ "./node_modules/cookies-js/dist/cookies.js");
/* harmony import */ var cookies_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNull */ "./node_modules/lodash/isNull.js");
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNull__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var SiteCookieBanner = /*#__PURE__*/function () {
  function SiteCookieBanner() {
    _classCallCheck(this, SiteCookieBanner);

    this.cacheDom();
    this.bindEvents();
  }

  _createClass(SiteCookieBanner, [{
    key: "cacheDom",
    value: function cacheDom() {
      this.cookie = cookies_js__WEBPACK_IMPORTED_MODULE_0___default.a.get('AcceptCookies');
      this.banner = document.querySelector('.site-cookieBanner');
      this.acceptAll = document.querySelector('.site-cookieBanner__acceptAll');
      this.acceptNecessary = document.querySelector('.site-cookieBanner__acceptNecessary');
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      if (!lodash_isNull__WEBPACK_IMPORTED_MODULE_1___default()(this.banner)) {
        if (this.cookie === 'necessary') {
          this.disableGa();
        }

        if (this.cookie === 'all') {
          this.initGa();
        }

        if (this.cookie === undefined) {
          this.banner.classList.remove('is-hidden');
          this.acceptAll.addEventListener('click', function () {
            cookies_js__WEBPACK_IMPORTED_MODULE_0___default.a.set('AcceptCookies', 'all', {
              expires: 2628000
            });

            _this.banner.classList.add('is-hidden');

            _this.initGa();
          });
          this.acceptNecessary.addEventListener('click', function () {
            cookies_js__WEBPACK_IMPORTED_MODULE_0___default.a.set('AcceptCookies', 'necessary', {
              expires: 2628000
            });

            _this.banner.classList.add('is-hidden');

            _this.disableGa();
          });
        }
      }
    }
  }, {
    key: "initGa",
    value: function initGa() {
      window['ga-disable-UA-62971458-1'] = false;
    }
  }, {
    key: "disableGa",
    value: function disableGa() {
      window['ga-disable-UA-62971458-1'] = true;
    }
  }]);

  return SiteCookieBanner;
}();



/***/ }),

/***/ "./resources/js/site/site-header-social.js":
/*!*************************************************!*\
  !*** ./resources/js/site/site-header-social.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteHeaderSocial; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SiteHeaderSocial = /*#__PURE__*/function () {
  function SiteHeaderSocial() {
    _classCallCheck(this, SiteHeaderSocial);

    this.getDom();
    this.init();
  }

  _createClass(SiteHeaderSocial, [{
    key: "getDom",
    value: function getDom() {
      this.btn = document.querySelector('.site-header__socialBtn');
      this.container = document.querySelector('.site-header__socialContainer');
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      this.btn.addEventListener('click', function (e) {
        e.preventDefault();

        _this.container.classList.toggle('xl-max:is-hidden');
      });
    }
  }]);

  return SiteHeaderSocial;
}();



/***/ }),

/***/ "./resources/js/site/site-mobile-menu.js":
/*!***********************************************!*\
  !*** ./resources/js/site/site-mobile-menu.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteMobileMenu; });
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var SiteMobileMenu = /*#__PURE__*/function () {
  function SiteMobileMenu() {
    _classCallCheck(this, SiteMobileMenu);

    this.getDom();
    this.init();
  }

  _createClass(SiteMobileMenu, [{
    key: "getDom",
    value: function getDom() {
      this.btn = document.querySelector('.btn--menu');
      this.menu = document.querySelector('.site-mobileMenu');
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      this.btn.addEventListener('click', function (e) {
        e.preventDefault();

        if (_this.menu.classList.contains('is-open')) {
          _this.close();
        } else {
          _this.open();
        }
      });
      pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.subscribe('header', function (msg, data) {
        if (data != 'menu') {
          _this.close();
        }
      });
    }
  }, {
    key: "open",
    value: function open() {
      this.menu.classList.add('is-open');
      this.btn.classList.add('is-active');
      Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["disableBodyScroll"])(this.menu);
      pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.publish('header', 'menu');
    }
  }, {
    key: "close",
    value: function close() {
      this.menu.classList.remove('is-open');
      this.btn.classList.remove('is-active');
      Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["enableBodyScroll"])(this.menu);
    }
  }]);

  return SiteMobileMenu;
}();



/***/ }),

/***/ "./resources/js/site/site-search-form.js":
/*!***********************************************!*\
  !*** ./resources/js/site/site-search-form.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteSearchForm; });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var SiteSearchForm = /*#__PURE__*/function () {
  function SiteSearchForm() {
    _classCallCheck(this, SiteSearchForm);

    this.getDom();
    this.init();
  }

  _createClass(SiteSearchForm, [{
    key: "getDom",
    value: function getDom() {
      this.btn = document.querySelector('.site-header__searchBtn');
      this.container = document.querySelector('.site-searchForm');
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      this.btn.addEventListener('click', function (e) {
        e.preventDefault();

        if (_this.container.classList.contains('lg-max:is-hidden')) {
          _this.open();
        } else {
          _this.close();
        }
      });
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.subscribe('header', function (msg, data) {
        if (data != 'search') {
          _this.close();
        }
      });
    }
  }, {
    key: "open",
    value: function open() {
      this.container.classList.remove('lg-max:is-hidden');
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish('header', 'search');
    }
  }, {
    key: "close",
    value: function close() {
      this.container.classList.add('lg-max:is-hidden');
    }
  }]);

  return SiteSearchForm;
}();



/***/ }),

/***/ "./resources/js/store-grid/store-grid.js":
/*!***********************************************!*\
  !*** ./resources/js/store-grid/store-grid.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StoreGrid; });
/* harmony import */ var packery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! packery */ "./node_modules/packery/js/packery.js");
/* harmony import */ var packery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(packery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var StoreGrid = /*#__PURE__*/function () {
  function StoreGrid() {
    _classCallCheck(this, StoreGrid);

    this.getDom();

    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isNull"])(this.dom.grid)) {
      this.init();
    }
  }

  _createClass(StoreGrid, [{
    key: "getDom",
    value: function getDom() {
      this.dom = {
        grid: document.querySelector('.store-storeGrid__container')
      };
    }
  }, {
    key: "init",
    value: function init() {
      this.masonry = new packery__WEBPACK_IMPORTED_MODULE_0___default.a(this.dom.grid, {
        itemSelector: '.store-storeCard'
      });
    }
  }]);

  return StoreGrid;
}();



/***/ }),

/***/ "./resources/js/terms/terms-reveal-button.js":
/*!***************************************************!*\
  !*** ./resources/js/terms/terms-reveal-button.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TermsRevealButton; });
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNull */ "./node_modules/lodash/isNull.js");
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNull__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var TermsRevealButton = /*#__PURE__*/function () {
  function TermsRevealButton() {
    _classCallCheck(this, TermsRevealButton);

    this.getDom();
    this.init();
  }

  _createClass(TermsRevealButton, [{
    key: "getDom",
    value: function getDom() {
      this.sections = document.querySelectorAll('.terms-section');
    }
  }, {
    key: "init",
    value: function init() {
      this.sections.forEach(function (section) {
        var btnReveal = section.querySelector('.terms-revealButton');
        var btnHide = section.querySelector('.terms-hideButton');
        var body = section.querySelector('.terms-body');
        var excerpt = section.querySelector('.terms-excerpt');

        if (!lodash_isNull__WEBPACK_IMPORTED_MODULE_0___default()(body)) {
          btnReveal.addEventListener('click', function (e) {
            e.preventDefault();
            body.classList.remove('hidden');
            btnHide.classList.remove('hidden');
            excerpt.classList.add('hidden');
            btnReveal.classList.add('hidden');
          });
          btnHide.addEventListener('click', function (e) {
            e.preventDefault();
            excerpt.classList.remove('hidden');
            btnReveal.classList.remove('hidden');
            body.classList.add('hidden');
            btnHide.classList.add('hidden');
          });
        }
      });
    }
  }]);

  return TermsRevealButton;
}();



/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/css/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/framework/Sites/team17/wp-content/themes/framework/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /Users/framework/Sites/team17/wp-content/themes/framework/resources/css/style.css */"./resources/css/style.css");


/***/ })

},[[0,"/assets/js/manifest","/assets/js/vendor"]]]);