"use strict";
(self["webpackChunkcoinbase_clone"] = self["webpackChunkcoinbase_clone"] || []).push([["frontend_src_pages_index_tsx"],{

/***/ "./frontend/src/Components/Header/Burger/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@mui/material/Dialog/Dialog.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@mui/material/Slide/Slide.js");
/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/hamburger-react/dist-esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
var __makeTemplateObject = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};








var StyledDialog = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  top: 48px;\n"], ["\n  top: 48px;\n"])));

var Burger = function Burger() {
  // ~~~~~ Redux state ~~~~~
  // ~~~~~ Hooks ~~~~~
  var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__["default"])(); // ~~~~~ Cmp state ~~~~~

  var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      open = _a[0],
      setOpen = _a[1]; // ~~~~~ Refs ~~~~~
  // ~~~~~ Effects ~~~~~
  // ~~~~~ Handlers ~~~~~


  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(hamburger_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: theme.palette.black['900'],
      toggled: open,
      toggle: setOpen
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledDialog, {
      TransitionComponent: _mui_material__WEBPACK_IMPORTED_MODULE_6__["default"],
      open: open,
      fullScreen: true
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Burger);
var templateObject_1;

/***/ }),

/***/ "./frontend/src/Components/Header/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@mui/material/ListItem/ListItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-router-dom/index.js");
/* harmony import */ var _Burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./frontend/src/Components/Header/Burger/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");






var Header = function Header() {
  // ~~~~~ Redux state ~~~~~
  // ~~~~~ Hooks ~~~~~
  // ~~~~~ Cmp state ~~~~~
  // ~~~~~ Refs ~~~~~
  // ~~~~~ Effects ~~~~~
  // ~~~~~ Handlers ~~~~~
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    elevation: 1,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
      display: 'flex',
      alignItems: "center",
      justifyContent: 'space-between',
      pl: 1,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link,
        to: '/',
        display: 'flex',
        alignItems: "center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          src: "/assets/images/svg/logo.svg",
          width: 122
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
        sx: {
          display: 'flex'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
            component: react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link,
            to: '/explore',
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
                variant: "underline",
                children: "Explores"
              })
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
            component: react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link,
            to: '/',
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
              variant: "underline",
              children: "individuals"
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Burger__WEBPACK_IMPORTED_MODULE_0__["default"], {})]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./frontend/src/pages/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./frontend/src/Components/Header/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");




var Home = function Home() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Components_Header__WEBPACK_IMPORTED_MODULE_0__["default"], {})
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ })

}]);
//# sourceMappingURL=frontend_src_pages_index_tsx.aaa3c18edacb96e2cd05.js.map