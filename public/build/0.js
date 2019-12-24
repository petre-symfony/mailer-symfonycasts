(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./assets/css/algolia-autocomplete.scss":
/*!**********************************************!*\
  !*** ./assets/css/algolia-autocomplete.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/components/algolia-autocomplete.js":
/*!******************************************************!*\
  !*** ./assets/js/components/algolia-autocomplete.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var autocomplete_js_dist_autocomplete_jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! autocomplete.js/dist/autocomplete.jquery */ "./node_modules/autocomplete.js/dist/autocomplete.jquery.js");
/* harmony import */ var autocomplete_js_dist_autocomplete_jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(autocomplete_js_dist_autocomplete_jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_algolia_autocomplete_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/algolia-autocomplete.scss */ "./assets/css/algolia-autocomplete.scss");
/* harmony import */ var _css_algolia_autocomplete_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_algolia_autocomplete_scss__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function ($elements, dataKey, displayKey) {
  $elements.each(function () {
    var autocompleteUrl = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('autocomplete-url');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).autocomplete({
      hint: false
    }, [{
      source: function source(query, cb) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
          url: autocompleteUrl + '?query=' + query
        }).then(function (data) {
          if (dataKey) {
            data = data[dataKey];
          }

          cb(data);
        });
      },
      displayKey: displayKey,
      debounce: 500 // only request every 1/2 second

    }]);
  });
});
;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FsZ29saWEtYXV0b2NvbXBsZXRlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvYWxnb2xpYS1hdXRvY29tcGxldGUuanMiXSwibmFtZXMiOlsiJGVsZW1lbnRzIiwiZGF0YUtleSIsImRpc3BsYXlLZXkiLCJlYWNoIiwiYXV0b2NvbXBsZXRlVXJsIiwiJCIsImRhdGEiLCJhdXRvY29tcGxldGUiLCJoaW50Iiwic291cmNlIiwicXVlcnkiLCJjYiIsImFqYXgiLCJ1cmwiLCJ0aGVuIiwiZGVib3VuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVlLHlFQUFTQSxTQUFULEVBQW9CQyxPQUFwQixFQUE2QkMsVUFBN0IsRUFBeUM7QUFDdERGLFdBQVMsQ0FBQ0csSUFBVixDQUFlLFlBQVc7QUFDeEIsUUFBSUMsZUFBZSxHQUFHQyw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRQyxJQUFSLENBQWEsa0JBQWIsQ0FBdEI7QUFFQUQsaURBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUUsWUFBUixDQUFxQjtBQUFDQyxVQUFJLEVBQUU7QUFBUCxLQUFyQixFQUFvQyxDQUNsQztBQUNFQyxZQUFNLEVBQUUsZ0JBQVNDLEtBQVQsRUFBZ0JDLEVBQWhCLEVBQW9CO0FBQzFCTixxREFBQyxDQUFDTyxJQUFGLENBQU87QUFDTEMsYUFBRyxFQUFFVCxlQUFlLEdBQUMsU0FBaEIsR0FBMEJNO0FBRDFCLFNBQVAsRUFFR0ksSUFGSCxDQUVRLFVBQVNSLElBQVQsRUFBZTtBQUNyQixjQUFJTCxPQUFKLEVBQWE7QUFDWEssZ0JBQUksR0FBR0EsSUFBSSxDQUFDTCxPQUFELENBQVg7QUFDRDs7QUFDRFUsWUFBRSxDQUFDTCxJQUFELENBQUY7QUFDRCxTQVBEO0FBUUQsT0FWSDtBQVdFSixnQkFBVSxFQUFFQSxVQVhkO0FBWUVhLGNBQVEsRUFBRSxHQVpaLENBWWdCOztBQVpoQixLQURrQyxDQUFwQztBQWdCRCxHQW5CRDtBQW9CRDtBQUFBLEMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJ2F1dG9jb21wbGV0ZS5qcy9kaXN0L2F1dG9jb21wbGV0ZS5qcXVlcnknO1xuaW1wb3J0ICcuLi8uLi9jc3MvYWxnb2xpYS1hdXRvY29tcGxldGUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCRlbGVtZW50cywgZGF0YUtleSwgZGlzcGxheUtleSkge1xuICAkZWxlbWVudHMuZWFjaChmdW5jdGlvbigpIHtcbiAgICB2YXIgYXV0b2NvbXBsZXRlVXJsID0gJCh0aGlzKS5kYXRhKCdhdXRvY29tcGxldGUtdXJsJyk7XG5cbiAgICAkKHRoaXMpLmF1dG9jb21wbGV0ZSh7aGludDogZmFsc2V9LCBbXG4gICAgICB7XG4gICAgICAgIHNvdXJjZTogZnVuY3Rpb24ocXVlcnksIGNiKSB7XG4gICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogYXV0b2NvbXBsZXRlVXJsKyc/cXVlcnk9JytxdWVyeVxuICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGFLZXkpIHtcbiAgICAgICAgICAgICAgZGF0YSA9IGRhdGFbZGF0YUtleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYihkYXRhKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzcGxheUtleTogZGlzcGxheUtleSxcbiAgICAgICAgZGVib3VuY2U6IDUwMCAvLyBvbmx5IHJlcXVlc3QgZXZlcnkgMS8yIHNlY29uZFxuICAgICAgfVxuICAgIF0pXG4gIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=