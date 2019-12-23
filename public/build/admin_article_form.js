(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin_article_form"],{

/***/ "./assets/js/admin_article_form.js":
/*!*****************************************!*\
  !*** ./assets/js/admin_article_form.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_weak_set__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.weak-set */ "./node_modules/core-js/modules/es.weak-set.js");
/* harmony import */ var core_js_modules_es_weak_set__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_set__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var dropzone_dist_dropzone_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! dropzone/dist/dropzone.css */ "./node_modules/dropzone/dist/dropzone.css");
/* harmony import */ var dropzone_dist_dropzone_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(dropzone_dist_dropzone_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/Sortable.js");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(sortablejs__WEBPACK_IMPORTED_MODULE_15__);













function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





dropzone__WEBPACK_IMPORTED_MODULE_13___default.a.autoDiscover = false;
jquery__WEBPACK_IMPORTED_MODULE_12___default()(document).ready(function () {
  var $autoComplete = jquery__WEBPACK_IMPORTED_MODULE_12___default()('.js-user-autocomplete');

  if (!$autoComplete.is(':disabled')) {
    Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! ./components/algolia-autocomplete */ "./assets/js/components/algolia-autocomplete.js")).then(function (autocomplete) {
      autocomplete["default"]($autoComplete, 'users', 'email');
    });
  }

  var $referenceList = jquery__WEBPACK_IMPORTED_MODULE_12___default()('.js-reference-list');

  if ($referenceList[0]) {
    var referenceList = new ReferenceList(jquery__WEBPACK_IMPORTED_MODULE_12___default()('.js-reference-list'));
    initializeDropzone(referenceList);
  }

  var $locationSelect = jquery__WEBPACK_IMPORTED_MODULE_12___default()('.js-article-form-location');
  var $specificLocationTarget = jquery__WEBPACK_IMPORTED_MODULE_12___default()('.js-specific-location-target');
  $locationSelect.on('change', function (e) {
    jquery__WEBPACK_IMPORTED_MODULE_12___default.a.ajax({
      url: $locationSelect.data('specific-location-url'),
      data: {
        location: $locationSelect.val()
      },
      success: function success(html) {
        if (!html) {
          $specificLocationTarget.find('select').remove();
          $specificLocationTarget.addClass('d-none');
          return;
        } // Replace the current field and show


        $specificLocationTarget.html(html).removeClass('d-none');
      }
    });
  });
}); // todo - use Webpack Encore so ES6 syntax is transpiled to ES5

var ReferenceList =
/*#__PURE__*/
function () {
  function ReferenceList($element) {
    var _this = this;

    _classCallCheck(this, ReferenceList);

    var stuff = new WeakSet([]);
    this.$element = $element;
    this.sortable = sortablejs__WEBPACK_IMPORTED_MODULE_15___default.a.create(this.$element[0], {
      handle: '.drag-handle',
      animation: 150,
      onEnd: function onEnd() {
        jquery__WEBPACK_IMPORTED_MODULE_12___default.a.ajax({
          url: _this.$element.data('url') + '/reorder',
          method: 'POST',
          data: JSON.stringify(_this.sortable.toArray())
        });
      }
    });
    this.references = [];
    this.render();
    this.$element.on('click', '.js-reference-delete', function (event) {
      _this.handleReferenceDelete(event);
    });
    this.$element.on('blur', '.js-edit-filename', function (event) {
      _this.handleReferenceEditFilename(event);
    });
    jquery__WEBPACK_IMPORTED_MODULE_12___default.a.ajax({
      url: this.$element.data('url')
    }).then(function (data) {
      _this.references = data;

      _this.render();
    });
  }

  _createClass(ReferenceList, [{
    key: "addReference",
    value: function addReference(reference) {
      this.references.push(reference);
      this.render();
    }
  }, {
    key: "handleReferenceDelete",
    value: function handleReferenceDelete(event) {
      var _this2 = this;

      var $li = jquery__WEBPACK_IMPORTED_MODULE_12___default()(event.currentTarget).closest('.list-group-item');
      var id = $li.data('id');
      $li.addClass('disabled');
      jquery__WEBPACK_IMPORTED_MODULE_12___default.a.ajax({
        url: '/admin/article/references/' + id,
        method: 'DELETE'
      }).then(function () {
        _this2.references = _this2.references.filter(function (reference) {
          return reference.id !== id;
        });

        _this2.render();
      });
    }
  }, {
    key: "handleReferenceEditFilename",
    value: function handleReferenceEditFilename(event) {
      var $li = jquery__WEBPACK_IMPORTED_MODULE_12___default()(event.currentTarget).closest('.list-group-item');
      var id = $li.data('id');
      var reference = this.references.find(function (reference) {
        return reference.id === id;
      });
      reference.originalFilename = jquery__WEBPACK_IMPORTED_MODULE_12___default()(event.currentTarget).val();
      jquery__WEBPACK_IMPORTED_MODULE_12___default.a.ajax({
        url: '/admin/article/references/' + id,
        method: 'PUT',
        data: JSON.stringify(reference)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var itemsHtml = this.references.map(function (reference) {
        return "\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\" data-id=\"".concat(reference.id, "\">\n          <span class=\"drag-handle fa fa-reorder\"></span>\n          <input type=\"text\" value=\"").concat(reference.originalFilename, "\" class=\"form-control js-edit-filename\" style=\"width: auto;\">\n\n          <span>\n            <a href=\"/admin/article/references/").concat(reference.id, "/download\" class=\"btn btn-link btn-sm\"><span class=\"fa fa-download\" style=\"vertical-align: middle\"></span></a>\n            <button class=\"js-reference-delete btn btn-link btn-sm\"><span class=\"fa fa-trash\"></span></button>\n          </span>\n        </li>\n      ");
      });
      this.$element.html(itemsHtml.join(''));
    }
  }]);

  return ReferenceList;
}();
/**
 * @param {ReferenceList} referenceList
 */


function initializeDropzone(referenceList) {
  var formElement = document.querySelector('.js-reference-dropzone');

  if (!formElement) {
    return;
  }

  var dropzone = new dropzone__WEBPACK_IMPORTED_MODULE_13___default.a(formElement, {
    paramName: 'reference',
    init: function init() {
      this.on('success', function (file, data) {
        referenceList.addReference(data);
      });
      this.on('error', function (file, data) {
        if (data.detail) {
          this.emit('error', file, data.detail);
        }
      });
    }
  });
}

/***/ })

},[["./assets/js/admin_article_form.js","runtime","vendors~admin_article_form~app~article_show","vendors~admin_article_form~app","vendors~admin_article_form"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW5fYXJ0aWNsZV9mb3JtLmpzIl0sIm5hbWVzIjpbIkRyb3B6b25lIiwiYXV0b0Rpc2NvdmVyIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCIkYXV0b0NvbXBsZXRlIiwiaXMiLCJ0aGVuIiwiYXV0b2NvbXBsZXRlIiwiJHJlZmVyZW5jZUxpc3QiLCJyZWZlcmVuY2VMaXN0IiwiUmVmZXJlbmNlTGlzdCIsImluaXRpYWxpemVEcm9wem9uZSIsIiRsb2NhdGlvblNlbGVjdCIsIiRzcGVjaWZpY0xvY2F0aW9uVGFyZ2V0Iiwib24iLCJlIiwiYWpheCIsInVybCIsImRhdGEiLCJsb2NhdGlvbiIsInZhbCIsInN1Y2Nlc3MiLCJodG1sIiwiZmluZCIsInJlbW92ZSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCIkZWxlbWVudCIsInN0dWZmIiwiV2Vha1NldCIsInNvcnRhYmxlIiwiU29ydGFibGUiLCJjcmVhdGUiLCJoYW5kbGUiLCJhbmltYXRpb24iLCJvbkVuZCIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b0FycmF5IiwicmVmZXJlbmNlcyIsInJlbmRlciIsImV2ZW50IiwiaGFuZGxlUmVmZXJlbmNlRGVsZXRlIiwiaGFuZGxlUmVmZXJlbmNlRWRpdEZpbGVuYW1lIiwicmVmZXJlbmNlIiwicHVzaCIsIiRsaSIsImN1cnJlbnRUYXJnZXQiLCJjbG9zZXN0IiwiaWQiLCJmaWx0ZXIiLCJvcmlnaW5hbEZpbGVuYW1lIiwiaXRlbXNIdG1sIiwibWFwIiwiam9pbiIsImZvcm1FbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImRyb3B6b25lIiwicGFyYW1OYW1lIiwiaW5pdCIsImZpbGUiLCJhZGRSZWZlcmVuY2UiLCJkZXRhaWwiLCJlbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtB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UUFBSSxFQUFFLGdCQUFXO0FBQ2YsV0FBSzlDLEVBQUwsQ0FBUSxTQUFSLEVBQW1CLFVBQVMrQyxJQUFULEVBQWUzQyxJQUFmLEVBQXFCO0FBQ3RDVCxxQkFBYSxDQUFDcUQsWUFBZCxDQUEyQjVDLElBQTNCO0FBQ0QsT0FGRDtBQUlBLFdBQUtKLEVBQUwsQ0FBUSxPQUFSLEVBQWlCLFVBQVMrQyxJQUFULEVBQWUzQyxJQUFmLEVBQXFCO0FBQ3BDLFlBQUlBLElBQUksQ0FBQzZDLE1BQVQsRUFBaUI7QUFDZixlQUFLQyxJQUFMLENBQVUsT0FBVixFQUFtQkgsSUFBbkIsRUFBeUIzQyxJQUFJLENBQUM2QyxNQUE5QjtBQUNEO0FBQ0YsT0FKRDtBQUtEO0FBWnNDLEdBQTFCLENBQWY7QUFjRCxDIiwiZmlsZSI6ImFkbWluX2FydGljbGVfZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgRHJvcHpvbmUgZnJvbSAnZHJvcHpvbmUnO1xuaW1wb3J0ICdkcm9wem9uZS9kaXN0L2Ryb3B6b25lLmNzcydcbmltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcblxuRHJvcHpvbmUuYXV0b0Rpc2NvdmVyID0gZmFsc2U7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICBjb25zdCAkYXV0b0NvbXBsZXRlID0gJCgnLmpzLXVzZXItYXV0b2NvbXBsZXRlJyk7XG4gIGlmICghJGF1dG9Db21wbGV0ZS5pcygnOmRpc2FibGVkJykpIHtcbiAgICBpbXBvcnQoJy4vY29tcG9uZW50cy9hbGdvbGlhLWF1dG9jb21wbGV0ZScpLnRoZW4oKGF1dG9jb21wbGV0ZSkgPT4ge1xuICAgICAgYXV0b2NvbXBsZXRlLmRlZmF1bHQoJGF1dG9Db21wbGV0ZSwgJ3VzZXJzJywgJ2VtYWlsJyk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCAkcmVmZXJlbmNlTGlzdCA9ICQoJy5qcy1yZWZlcmVuY2UtbGlzdCcpO1xuICBpZiAoJHJlZmVyZW5jZUxpc3RbMF0pIHtcbiAgICB2YXIgcmVmZXJlbmNlTGlzdCA9IG5ldyBSZWZlcmVuY2VMaXN0KCQoJy5qcy1yZWZlcmVuY2UtbGlzdCcpKTtcbiAgICBpbml0aWFsaXplRHJvcHpvbmUocmVmZXJlbmNlTGlzdCk7XG4gIH1cblxuICB2YXIgJGxvY2F0aW9uU2VsZWN0ID0gJCgnLmpzLWFydGljbGUtZm9ybS1sb2NhdGlvbicpO1xuICB2YXIgJHNwZWNpZmljTG9jYXRpb25UYXJnZXQgPSAkKCcuanMtc3BlY2lmaWMtbG9jYXRpb24tdGFyZ2V0Jyk7XG5cbiAgJGxvY2F0aW9uU2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJGxvY2F0aW9uU2VsZWN0LmRhdGEoJ3NwZWNpZmljLWxvY2F0aW9uLXVybCcpLFxuICAgICAgZGF0YToge1xuICAgICAgICBsb2NhdGlvbjogJGxvY2F0aW9uU2VsZWN0LnZhbCgpXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgaWYgKCFodG1sKSB7XG4gICAgICAgICAgJHNwZWNpZmljTG9jYXRpb25UYXJnZXQuZmluZCgnc2VsZWN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgJHNwZWNpZmljTG9jYXRpb25UYXJnZXQuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVwbGFjZSB0aGUgY3VycmVudCBmaWVsZCBhbmQgc2hvd1xuICAgICAgICAkc3BlY2lmaWNMb2NhdGlvblRhcmdldFxuICAgICAgICAgIC5odG1sKGh0bWwpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKCdkLW5vbmUnKVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pO1xuXG4vLyB0b2RvIC0gdXNlIFdlYnBhY2sgRW5jb3JlIHNvIEVTNiBzeW50YXggaXMgdHJhbnNwaWxlZCB0byBFUzVcbmNsYXNzIFJlZmVyZW5jZUxpc3Qge1xuICBjb25zdHJ1Y3RvcigkZWxlbWVudCkge1xuICAgIHZhciBzdHVmZiA9IG5ldyBXZWFrU2V0KFtdKTtcblxuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcbiAgICB0aGlzLnNvcnRhYmxlID0gU29ydGFibGUuY3JlYXRlKHRoaXMuJGVsZW1lbnRbMF0sIHtcbiAgICAgIGhhbmRsZTogJy5kcmFnLWhhbmRsZScsXG4gICAgICBhbmltYXRpb246IDE1MCxcbiAgICAgIG9uRW5kOiAoKSA9PiB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgdXJsOiB0aGlzLiRlbGVtZW50LmRhdGEoJ3VybCcpKycvcmVvcmRlcicsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkodGhpcy5zb3J0YWJsZS50b0FycmF5KCkpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMucmVmZXJlbmNlcyA9IFtdO1xuICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdjbGljaycsICcuanMtcmVmZXJlbmNlLWRlbGV0ZScsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVSZWZlcmVuY2VEZWxldGUoZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kZWxlbWVudC5vbignYmx1cicsICcuanMtZWRpdC1maWxlbmFtZScsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVSZWZlcmVuY2VFZGl0RmlsZW5hbWUoZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogdGhpcy4kZWxlbWVudC5kYXRhKCd1cmwnKVxuICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICB0aGlzLnJlZmVyZW5jZXMgPSBkYXRhO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9KVxuICB9XG5cbiAgYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIHRoaXMucmVmZXJlbmNlcy5wdXNoKHJlZmVyZW5jZSk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGhhbmRsZVJlZmVyZW5jZURlbGV0ZShldmVudCkge1xuICAgIGNvbnN0ICRsaSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuY2xvc2VzdCgnLmxpc3QtZ3JvdXAtaXRlbScpO1xuICAgIGNvbnN0IGlkID0gJGxpLmRhdGEoJ2lkJyk7XG4gICAgJGxpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJy9hZG1pbi9hcnRpY2xlL3JlZmVyZW5jZXMvJytpZCxcbiAgICAgIG1ldGhvZDogJ0RFTEVURSdcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMucmVmZXJlbmNlcyA9IHRoaXMucmVmZXJlbmNlcy5maWx0ZXIocmVmZXJlbmNlID0+IHtcbiAgICAgICAgcmV0dXJuIHJlZmVyZW5jZS5pZCAhPT0gaWQ7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVSZWZlcmVuY2VFZGl0RmlsZW5hbWUoZXZlbnQpIHtcbiAgICBjb25zdCAkbGkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmNsb3Nlc3QoJy5saXN0LWdyb3VwLWl0ZW0nKTtcbiAgICBjb25zdCBpZCA9ICRsaS5kYXRhKCdpZCcpO1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMucmVmZXJlbmNlcy5maW5kKHJlZmVyZW5jZSA9PiB7XG4gICAgICByZXR1cm4gcmVmZXJlbmNlLmlkID09PSBpZDtcbiAgICB9KTtcbiAgICByZWZlcmVuY2Uub3JpZ2luYWxGaWxlbmFtZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCk7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL2FkbWluL2FydGljbGUvcmVmZXJlbmNlcy8nK2lkLFxuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHJlZmVyZW5jZSlcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpdGVtc0h0bWwgPSB0aGlzLnJlZmVyZW5jZXMubWFwKHJlZmVyZW5jZSA9PiB7XG4gICAgICByZXR1cm4gYFxuICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiIGRhdGEtaWQ9XCIke3JlZmVyZW5jZS5pZH1cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImRyYWctaGFuZGxlIGZhIGZhLXJlb3JkZXJcIj48L3NwYW4+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke3JlZmVyZW5jZS5vcmlnaW5hbEZpbGVuYW1lfVwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGpzLWVkaXQtZmlsZW5hbWVcIiBzdHlsZT1cIndpZHRoOiBhdXRvO1wiPlxuXG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8YSBocmVmPVwiL2FkbWluL2FydGljbGUvcmVmZXJlbmNlcy8ke3JlZmVyZW5jZS5pZH0vZG93bmxvYWRcIiBjbGFzcz1cImJ0biBidG4tbGluayBidG4tc21cIj48c3BhbiBjbGFzcz1cImZhIGZhLWRvd25sb2FkXCIgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXCI+PC9zcGFuPjwvYT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJqcy1yZWZlcmVuY2UtZGVsZXRlIGJ0biBidG4tbGluayBidG4tc21cIj48c3BhbiBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgIGBcbiAgICB9KTtcblxuICAgIHRoaXMuJGVsZW1lbnQuaHRtbChpdGVtc0h0bWwuam9pbignJykpO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtSZWZlcmVuY2VMaXN0fSByZWZlcmVuY2VMaXN0XG4gKi9cbmZ1bmN0aW9uIGluaXRpYWxpemVEcm9wem9uZShyZWZlcmVuY2VMaXN0KSB7XG4gIHZhciBmb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZWZlcmVuY2UtZHJvcHpvbmUnKTtcbiAgaWYgKCFmb3JtRWxlbWVudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBkcm9wem9uZSA9IG5ldyBEcm9wem9uZShmb3JtRWxlbWVudCwge1xuICAgIHBhcmFtTmFtZTogJ3JlZmVyZW5jZScsXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLm9uKCdzdWNjZXNzJywgZnVuY3Rpb24oZmlsZSwgZGF0YSkge1xuICAgICAgICByZWZlcmVuY2VMaXN0LmFkZFJlZmVyZW5jZShkYXRhKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLm9uKCdlcnJvcicsIGZ1bmN0aW9uKGZpbGUsIGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEuZGV0YWlsKSB7XG4gICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGZpbGUsIGRhdGEuZGV0YWlsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=