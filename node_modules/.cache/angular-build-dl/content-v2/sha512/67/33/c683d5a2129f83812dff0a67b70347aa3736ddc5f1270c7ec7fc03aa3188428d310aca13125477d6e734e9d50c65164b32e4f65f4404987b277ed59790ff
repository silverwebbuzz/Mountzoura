/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"runtime": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"Kids-kid-kid-add-kid-add-module":"Kids-kid-kid-add-kid-add-module","Kids-subscribe-kid-premium-kid-premium-module":"Kids-subscribe-kid-premium-kid-premium-module","Teachers-student-ID-id-correct-id-correct-module":"Teachers-student-ID-id-correct-id-correct-module","Users-forgots-forgot-correct-forgot-correct-module":"Users-forgots-forgot-correct-forgot-correct-module","Users-forgots-forgot-wrong-forgot-wrong-module":"Users-forgots-forgot-wrong-forgot-wrong-module","Users-intros-intro2-intro2-module":"Users-intros-intro2-intro2-module","Users-intros-intro3-intro3-module":"Users-intros-intro3-intro3-module","Users-teacher-parent-teacher-parent-module":"Users-teacher-parent-teacher-parent-module","common":"common","default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2":"default~Home-home-kid-home-kid-module~Home-teacher-premium-teacher-premium-module~Kids-kid-kid-added~650e87c2","Home-home-kid-home-kid-module":"Home-home-kid-home-kid-module","Home-teacher-premium-teacher-premium-module":"Home-teacher-premium-teacher-premium-module","Kids-kid-kid-new-kid-new-module":"Kids-kid-kid-new-kid-new-module","Kids-profile-kid-free-profile-kid-free-profile-module":"Kids-profile-kid-free-profile-kid-free-profile-module","Kids-profile-kid-premium-profile-kid-premium-profile-module":"Kids-profile-kid-premium-profile-kid-premium-profile-module","Kids-subscribe-kid-free-kid-free-module":"Kids-subscribe-kid-free-kid-free-module","Pdfs-pdf-pdf-module":"Pdfs-pdf-pdf-module","Quizzes-quiz-kids-quiz-ans-quiz-ans-correct-quiz-ans-correct-module":"Quizzes-quiz-kids-quiz-ans-quiz-ans-correct-quiz-ans-correct-module","Quizzes-quiz-kids-quiz-ans-quiz-ans-wrong-quiz-ans-wrong-module":"Quizzes-quiz-kids-quiz-ans-quiz-ans-wrong-quiz-ans-wrong-module","Quizzes-quiz-kids-quiz-play-quiz-play-module":"Quizzes-quiz-kids-quiz-play-quiz-play-module","Quizzes-quiz-kids-quiz-result-quiz-result-module":"Quizzes-quiz-kids-quiz-result-quiz-result-module","Quizzes-quiz-kids-quiz-single-quiz-single-module":"Quizzes-quiz-kids-quiz-single-quiz-single-module","Quizzes-quiz-premium-quiz-premium-module":"Quizzes-quiz-premium-quiz-premium-module","Teachers-homework-student-homework-not-student-homework-not-module":"Teachers-homework-student-homework-not-student-homework-not-module","Teachers-homework-student-homework-played-student-homework-played-module":"Teachers-homework-student-homework-played-student-homework-played-module","Teachers-homework-student-homework-student-homework-module":"Teachers-homework-student-homework-student-homework-module","Teachers-student-ID-id-wrong-id-wrong-module":"Teachers-student-ID-id-wrong-id-wrong-module","Teachers-student-quiz-list-quiz-correct-quiz-correct-module":"Teachers-student-quiz-list-quiz-correct-quiz-correct-module","Teachers-student-quiz-list-quiz-wrong-quiz-wrong-module":"Teachers-student-quiz-list-quiz-wrong-quiz-wrong-module","Teachers-student-quiz-list-single-quiz-single-quiz-module":"Teachers-student-quiz-list-single-quiz-single-quiz-module","Teachers-student-student-add-student-add-module":"Teachers-student-student-add-student-add-module","Users-forgots-forgot-forgot-module":"Users-forgots-forgot-forgot-module","Users-gdpr-policy-gdpr-policy-module":"Users-gdpr-policy-gdpr-policy-module","Users-notifications-notifications-module":"Users-notifications-notifications-module","Users-privacy-policy-privacy-policy-module":"Users-privacy-policy-privacy-policy-module","Users-profile-profile-module":"Users-profile-profile-module","Users-requests-child-requests-child-module":"Users-requests-child-requests-child-module","Users-requests-requests-module":"Users-requests-requests-module","Users-settings-settings-module":"Users-settings-settings-module","Users-terms-terms-module":"Users-terms-terms-module","Kids-kid-kid-added-kid-added-module":"Kids-kid-kid-added-kid-added-module","Teachers-student-student-added-student-added-module":"Teachers-student-student-added-student-added-module","Users-intros-intro1-intro1-module":"Users-intros-intro1-intro1-module","Users-login-login-module":"Users-login-login-module","Users-registers-register-child-register-child-module":"Users-registers-register-child-register-child-module","Users-registers-register-teacher-register-teacher-module":"Users-registers-register-teacher-register-teacher-module","default~Pdfs-pdf-kids-list-pdf-kids-list-module~Pdfs-pdf-search-pdf-search-module~Quizzes-kid-homewo~8c33cf76":"default~Pdfs-pdf-kids-list-pdf-kids-list-module~Pdfs-pdf-search-pdf-search-module~Quizzes-kid-homewo~8c33cf76","Pdfs-pdf-kids-list-pdf-kids-list-module":"Pdfs-pdf-kids-list-pdf-kids-list-module","Pdfs-pdf-search-pdf-search-module":"Pdfs-pdf-search-pdf-search-module","Quizzes-kid-homework-kid-homework-module":"Quizzes-kid-homework-kid-homework-module","Quizzes-quiz-kids-kids-quiz-list-kids-quiz-list-module":"Quizzes-quiz-kids-kids-quiz-list-kids-quiz-list-module","Quizzes-quiz-search-quiz-search-module":"Quizzes-quiz-search-quiz-search-module","Quizzes-quiz-teachers-teachers-quiz-list-teachers-quiz-list-module":"Quizzes-quiz-teachers-teachers-quiz-list-teachers-quiz-list-module","videos-kid-list-kid-list-module":"videos-kid-list-kid-list-module","videos-video-search-video-search-module":"videos-video-search-video-search-module","home-home-teacher-home-teacher-module":"home-home-teacher-home-teacher-module","videos-video-video-module":"videos-video-video-module","firebase-auth":"firebase-auth","polyfills-core-js":"polyfills-core-js","polyfills-css-shim":"polyfills-css-shim","polyfills-dom":"polyfills-dom","shadow-css-c63963b5-js":"shadow-css-c63963b5-js","tabs-tabs-module":"tabs-tabs-module","swiper-bundle-95afeea2-js":"swiper-bundle-95afeea2-js","focus-visible-15ada7f7-js":"focus-visible-15ada7f7-js","input-shims-4f0dbb39-js":"input-shims-4f0dbb39-js","keyboard-dd970efc-js":"keyboard-dd970efc-js","status-tap-0b3e89c4-js":"status-tap-0b3e89c4-js","swipe-back-0a6a44c8-js":"swipe-back-0a6a44c8-js","tap-click-252af35a-js":"tap-click-252af35a-js"}[chunkId]||chunkId) +    "-es5.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// run deferred modules from other chunks
/******/ 	checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([]);
//# sourceMappingURL=runtime-es5.js.map