"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["home"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
function home() {
    //main title
    const title = document.createElement('div');
    title.classList.add("homeTitle");
    title.textContent = '패스트리';

    const description = document.createElement('div');
    description.classList.add('homeDescription');
    description.textContent = 'We serve award-winning Korean pastries and desserts.';

    const btn = document.createElement('div');
    btn.textContent = 'Our Menu';
    btn.classList.add('tab');
    btn.classList.add('menuBtn')
    btn.setAttribute('id', 'menu');
    
    return [title, description, btn];
};



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSgpIHtcbiAgICAvL21haW4gdGl0bGVcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJob21lVGl0bGVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAn7Yyo7Iqk7Yq466asJztcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnaG9tZURlc2NyaXB0aW9uJyk7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnV2Ugc2VydmUgYXdhcmQtd2lubmluZyBLb3JlYW4gcGFzdHJpZXMgYW5kIGRlc3NlcnRzLic7XG5cbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidG4udGV4dENvbnRlbnQgPSAnT3VyIE1lbnUnO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnbWVudUJ0bicpXG4gICAgYnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuICAgIFxuICAgIHJldHVybiBbdGl0bGUsIGRlc2NyaXB0aW9uLCBidG5dO1xufTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9