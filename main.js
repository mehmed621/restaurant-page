/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createAboutPage)\n/* harmony export */ });\nfunction createAboutPage() {\r\n  let aboutMainElement = document.createElement(\"main\");\r\n  aboutMainElement.setAttribute(\"id\", \"about-main\");\r\n\r\n  let secondDiv = document.createElement(\"div\");\r\n  secondDiv.setAttribute(\"id\", \"about\");\r\n\r\n  let firstHeader = document.createElement(\"h3\");\r\n  firstHeader.innerText = \"About\";\r\n\r\n  let thirdDiv = document.createElement(\"div\");\r\n  thirdDiv.setAttribute(\"id\", \"about-texts\");\r\n\r\n  let firstParag = document.createElement(\"p\");\r\n  firstParag.innerText =\r\n    \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur animi maxime rem sint quam repudiandae assumenda accusantium excepturi? Dolore deleniti quas ea, ab aut doloremque quaerat iure, est saepe modi sunt cupiditate quam quae quisquam maxime molestias voluptatum quod obcaecati soluta enim. Nam explicabo laboriosam voluptate, non totam modi. Assumenda?\";\r\n\r\n  let secondParag = document.createElement(\"p\");\r\n  secondParag.innerText =\r\n    \"Laborum excepturi, nulla velit dignissimos delectus sapiente a quis, labore sunt facere vel reprehenderit praesentium quos hic repellendus. Ipsum officiis, quae nam, aperiam dolore accusamus impedit harum alias fuga dicta illum facere nisi totam, laudantium enim ipsa pariatur culpa. Maxime ipsum impedit quas quis excepturi quidem.\";\r\n\r\n  let fourthDiv = document.createElement(\"div\");\r\n  fourthDiv.setAttribute(\"id\", \"some-about-images\");\r\n  fourthDiv.innerText = \"About Image\";\r\n\r\n  thirdDiv.appendChild(firstParag);\r\n  thirdDiv.appendChild(secondParag);\r\n  thirdDiv.appendChild(fourthDiv);\r\n\r\n  secondDiv.appendChild(firstHeader);\r\n  secondDiv.appendChild(thirdDiv);\r\n\r\n  aboutMainElement.appendChild(secondDiv);\r\n\r\n  return aboutMainElement;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createContactPage)\n/* harmony export */ });\nfunction createContactPage() {\r\n  let contactMainElement = document.createElement(\"main\");\r\n  contactMainElement.setAttribute(\"id\", \"contact-main\");\r\n\r\n  /* Contact Us Header */\r\n  let firstDiv = document.createElement(\"div\");\r\n  firstDiv.setAttribute(\"id\", \"contact\");\r\n\r\n  let firstHeading = document.createElement(\"h3\");\r\n  firstHeading.innerText = \"Contact Us\";\r\n\r\n  /* address div */\r\n  let secondDiv = document.createElement(\"div\");\r\n  secondDiv.setAttribute(\"id\", \"address\");\r\n  let firstAddressHeading = document.createElement(\"h4\");\r\n  firstAddressHeading.innerText = \"Phone: +123456789000\";\r\n  firstAddressHeading.classList.add(\"contact-infos\");\r\n  let secondAddressHeading = document.createElement(\"h4\");\r\n  secondAddressHeading.innerText =\r\n    \"Address: Lorem ipsum dolor sit amet consectetur adipisicing elit.\";\r\n  secondAddressHeading.classList.add(\"contact-infos\");\r\n  let thirdAddressHeading = document.createElement(\"h4\");\r\n  thirdAddressHeading.innerText = \"Email: restaurant.name@email,com\";\r\n  thirdAddressHeading.classList.add(\"contact-infos\");\r\n  secondDiv.appendChild(firstAddressHeading);\r\n  secondDiv.appendChild(secondAddressHeading);\r\n  secondDiv.appendChild(thirdAddressHeading);\r\n\r\n  let formElement = document.createElement(\"form\");\r\n  formElement.setAttribute(\"action\", \"action.php\");\r\n  formElement.setAttribute(\"id\", \"restaurant-form-id\");\r\n\r\n  let inputsContainer = document.createElement(\"div\");\r\n  inputsContainer.setAttribute(\"id\", \"inputs\");\r\n\r\n  let firstLabelDiv = document.createElement(\"div\");\r\n  firstLabelDiv.classList.add(\"label-group\");\r\n  let label1 = document.createElement(\"label\");\r\n  label1.setAttribute(\"for\", \"name\");\r\n  label1.innerText = \"Your Name: \";\r\n  let input1 = document.createElement(\"input\");\r\n  input1.setAttribute(\"type\", \"text\");\r\n  input1.setAttribute(\"id\", \"name\");\r\n  firstLabelDiv.appendChild(label1);\r\n  firstLabelDiv.appendChild(input1);\r\n\r\n  let secondLabelDiv = document.createElement(\"div\");\r\n  secondLabelDiv.classList.add(\"label-group\");\r\n  let label2 = document.createElement(\"label\");\r\n  label2.setAttribute(\"for\", \"email\");\r\n  label2.innerText = \"Your Email: \";\r\n\r\n  let input2 = document.createElement(\"input\");\r\n  input2.setAttribute(\"type\", \"email\");\r\n  input2.setAttribute(\"id\", \"email\");\r\n  secondLabelDiv.appendChild(label2);\r\n  secondLabelDiv.appendChild(input2);\r\n\r\n  let thirdLabelDiv = document.createElement(\"div\");\r\n  thirdLabelDiv.classList.add(\"label-group\");\r\n  let label3 = document.createElement(\"label\");\r\n  label3.setAttribute(\"for\", \"phone\");\r\n  label3.innerText = \"Your Phone: \";\r\n  let input3 = document.createElement(\"input\");\r\n  input3.setAttribute(\"type\", \"text\");\r\n  input3.setAttribute(\"id\", \"phone\");\r\n  thirdLabelDiv.appendChild(label3);\r\n  thirdLabelDiv.appendChild(input3);\r\n\r\n  let fourthLabelDiv = document.createElement(\"div\");\r\n  fourthLabelDiv.classList.add(\"label-group\");\r\n  let label4 = document.createElement(\"label\");\r\n  label4.setAttribute(\"for\", \"your-address\");\r\n  label4.innerText = \"Your Address: \";\r\n  let input4 = document.createElement(\"input\");\r\n  input4.setAttribute(\"type\", \"text\");\r\n  input4.setAttribute(\"id\", \"your-address\");\r\n  fourthLabelDiv.appendChild(label4);\r\n  fourthLabelDiv.appendChild(input4);\r\n\r\n  let fifthFormDiv = document.createElement(\"div\");\r\n  fifthFormDiv.classList.add(\"label-group\");\r\n  let label5 = document.createElement(\"label\");\r\n  label5.setAttribute(\"for\", \"message\");\r\n  label5.setAttribute(\"id\", \"your-message\");\r\n  label5.innerText = \"Your Message: \";\r\n  let textarea1 = document.createElement(\"textarea\");\r\n  textarea1.setAttribute(\"name\", \"name-message\");\r\n  textarea1.setAttribute(\"id\", \"message\");\r\n  textarea1.setAttribute(\"cols\", \"40\");\r\n  textarea1.setAttribute(\"rows\", \"6\");\r\n  fifthFormDiv.appendChild(label5);\r\n  fifthFormDiv.appendChild(textarea1);\r\n\r\n  /* inputs */\r\n  inputsContainer.appendChild(firstLabelDiv);\r\n  inputsContainer.appendChild(secondLabelDiv);\r\n  inputsContainer.appendChild(thirdLabelDiv);\r\n  inputsContainer.appendChild(fourthLabelDiv);\r\n  inputsContainer.appendChild(fifthFormDiv);\r\n\r\n  /* button */\r\n  let buttonElement = document.createElement(\"button\");\r\n  buttonElement.setAttribute(\"type\", \"submit\");\r\n  buttonElement.innerText = \"Submit\";\r\n\r\n  formElement.appendChild(inputsContainer);\r\n  formElement.appendChild(buttonElement);\r\n\r\n  contactMainElement.appendChild(firstHeading);\r\n  contactMainElement.appendChild(secondDiv);\r\n  contactMainElement.appendChild(formElement);\r\n\r\n  return contactMainElement;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHomepage)\n/* harmony export */ });\nfunction createHomepage() {\r\n  let mainElement = document.createElement(\"main\");\r\n  mainElement.setAttribute(\"id\", \"home-main\");\r\n  let firstDiv = document.createElement(\"div\");\r\n  firstDiv.setAttribute(\"id\", \"home-hero\");\r\n\r\n  let secondDiv = document.createElement(\"div\");\r\n  secondDiv.classList.add(\"hamburger-bg\");\r\n\r\n  let firstHeading = document.createElement(\"h2\");\r\n  firstHeading.innerText = \"Restaurant Name\";\r\n\r\n  let secondHeading = document.createElement(\"h4\");\r\n  secondHeading.innerText =\r\n    \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus at ullam sed.\";\r\n\r\n  secondDiv.appendChild(firstHeading);\r\n  secondDiv.appendChild(secondHeading);\r\n  firstDiv.appendChild(secondDiv);\r\n  mainElement.appendChild(firstDiv);\r\n\r\n  return mainElement;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nconst contentElement = document.querySelector(\"#content\")\r\n\r\nfunction appendNavbar(){\r\n    let NavElement = document.createElement(\"nav\")\r\n    let newButton = document.createElement(\"button\")\r\n    newButton.innerText = \"Home\"\r\n    newButton.addEventListener(\"click\", () => {\r\n        deleteChild()\r\n        createPage(_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n    })\r\n\r\n    let newButton2 = document.createElement(\"button\")\r\n    newButton2.innerText = \"About\"\r\n    newButton2.addEventListener(\"click\", () => {\r\n        deleteChild()\r\n        createPage(_about__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\r\n    })\r\n\r\n    let newButton3 = document.createElement(\"button\")\r\n    newButton3.innerText = \"Contact\"\r\n    newButton3.addEventListener(\"click\", () => {\r\n        deleteChild()\r\n        createPage(_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\r\n    })\r\n\r\n    NavElement.appendChild(newButton)\r\n    NavElement.appendChild(newButton2)\r\n    NavElement.appendChild(newButton3)\r\n\r\n    return NavElement;\r\n}\r\n\r\nfunction appendFooter(){\r\nlet newFooterElement = document.createElement(\"footer\")\r\nnewFooterElement.innerHTML = 'Restaurant Page for The Odin Project Curriculum.'\r\n\r\nreturn newFooterElement;\r\n}\r\n\r\n\r\n\r\nfunction deleteChild() { \r\n    let elmnt = document.querySelector(\"#content\"); \r\n    let first = elmnt.firstElementChild; \r\n    while (first) { \r\n        first.remove(); \r\n        first = elmnt.firstElementChild; \r\n    } \r\n} \r\n\r\nfunction createPage(page){\r\n    contentElement.appendChild(appendNavbar())\r\n    contentElement.appendChild(page())\r\n    contentElement.appendChild(appendFooter())\r\n}\r\n\r\n\r\nwindow.addEventListener(\"load\", () => {\r\n    deleteChild()\r\n    createPage(_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n})\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;