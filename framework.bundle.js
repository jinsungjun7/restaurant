"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["framework"],{

/***/ "./src/framework.js":
/*!**************************!*\
  !*** ./src/framework.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ framework)
/* harmony export */ });
function framework() {
    // header menu bar
    const header = document.createElement('div');
    header.classList.add('header');
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = '패스트리';

    const menuBar = document.createElement('div');
    const home = document.createElement('div');
    home.textContent = 'Home';
    home.setAttribute('id', 'home');
    const menu = document.createElement('div');
    menu.textContent = 'Menu';
    menu.setAttribute('id', 'menu');
    const contact = document.createElement('div');
    contact.textContent = 'Contact Us';
    contact.setAttribute('id', 'contact');

    menuBar.classList.add("menuBar");
    menuBar.setAttribute('id', 'home');
    home.classList.add('tab');
    menu.classList.add('tab');
    contact.classList.add('tab');
    menuBar.appendChild(home);
    menuBar.appendChild(menu);
    menuBar.appendChild(contact);

    
    header.appendChild(title);
    header.appendChild(menuBar);

    
    // body 
    const body = document.createElement('div');
    body.classList.add('body');
    body.setAttribute('id', 'home');
    
    // footer
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.innerHTML = 'Copyright &copy; 2022 Jinsungjun';


    return [header, body, footer];
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/framework.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWV3b3JrLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDOzs7QUFHekM7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZnJhbWV3b3JrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZyYW1ld29yaygpIHtcbiAgICAvLyBoZWFkZXIgbWVudSBiYXJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ+2MqOyKpO2KuOumrCc7XG5cbiAgICBjb25zdCBtZW51QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgaG9tZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUnKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBtZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnO1xuICAgIGNvbnRhY3Quc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0Jyk7XG5cbiAgICBtZW51QmFyLmNsYXNzTGlzdC5hZGQoXCJtZW51QmFyXCIpO1xuICAgIG1lbnVCYXIuc2V0QXR0cmlidXRlKCdpZCcsICdob21lJyk7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgbWVudUJhci5hcHBlbmRDaGlsZChob21lKTtcbiAgICBtZW51QmFyLmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIG1lbnVCYXIuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgICBcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChtZW51QmFyKTtcblxuICAgIFxuICAgIC8vIGJvZHkgXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnYm9keScpO1xuICAgIGJvZHkuc2V0QXR0cmlidXRlKCdpZCcsICdob21lJyk7XG4gICAgXG4gICAgLy8gZm9vdGVyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5pbm5lckhUTUwgPSAnQ29weXJpZ2h0ICZjb3B5OyAyMDIyIEppbnN1bmdqdW4nO1xuXG5cbiAgICByZXR1cm4gW2hlYWRlciwgYm9keSwgZm9vdGVyXTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=