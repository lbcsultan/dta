(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<div class=\"container main\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <h2 class=\"page-header\">What is dual-token authentication? </h2>\n\n  <div class=\"alert alert-warning\" role=\"alert\">\n    <h5>\n      It is a new token authentication technology that can be used in web services to improve security and efficiency of\n      web services. <br><br>\n\n      OAuth2.0 (and JWT) is the standard token authentication technology that is widely used in modern web services.\n      OAuth 2.0 bearer token is widely used for stateless authentication in web environment, but it is vulnerable to\n      eavesdropping attack. Thus, it should be used only in secure communication environment like https that it cannot\n      provide stateless authentication. OAuth 2.0 MAC token is designed to provide randomized authentication using\n      message authentication code that it can be used in non-secure communication environment, but it cannot provide\n      stateless authentication since server has to keep the track of all mac keys for every client. <br><br>\n\n      Dual-token authentication is newly developed token authentication technology that uses dual-token instead of\n      single token. Server issues dual-token (public token and secret token) to logged in client (web browser). Then\n      client can prove its authenticity instantly in time-dependent one-time way using the dual-token, and the server\n      can verify it stateless way without managing any user dependent information. <br><br>\n\n      Dual-token authentication is very efficient in the point of web server. Since time-dependent one-time\n      authentication information cannot be reused by eavesdropping attacker, whole web service can be served in\n      non-secure communication channel, which will save lots of computing. It is considered as an ultimate token\n      authentication technology that makes real stateless web service possible. <br><br>\n\n      This is a simplified model service that demonstrate the dual-token authentication.\n    </h5>\n\n  </div>\n\n\n  <h2 class=\"page-header\">Implementation Environment </h2>\n\n  <div class=\"alert alert-info\" role=\"alert\">\n    <b>MEAN Stack </b>\n    <p>\n      Web development using MongoDB/Express/Angular/Node.js\n    </p>\n\n    <b>Node.js/Express Backend </b>\n    <p>\n      Backend service using node.js and express\n    </p>\n\n    <b>Angular/Cli Frontend </b>\n    <p>\n      Easy web development using Angular front-end framework\n    </p>\n\n    <b>Ionic Framework </b>\n    <p>\n      Dual(iOS/Android) mode mobile app development using Ionic framework\n    </p>\n\n    <b>Heroku Deployment </b>\n    <p>\n      Heroku Cloud Service\n    </p>\n\n    <b>MongoDB Compass </b>\n    <p>\n      MongoDB as a Service\n    </p>\n  </div>\n\n  <h2 class=\"page-header\">Security Technologies</h2>\n\n  <div class=\"alert alert-warning\" role=\"alert\">\n    <b>Dual-Token Authentication </b>\n    <p>\n      Server issues dual-token(public token/secret token) to logged in users <br>\n      Keeping authenticated state using dual-token through plain communication channel <br>\n      High performance without https requirement <br>\n    </p>\n\n    <b>JWT Authentication </b>\n    <p>\n      Application example of JWT authentication <br>\n      It should be executed in https secure communication\n    </p>\n\n    <b>Issuing Certificate </b>\n    <p>\n      Server issues certificate to logged-in user\n    </p>\n\n    <b>Signature-based One-click Easy Login </b>\n    <p>\n      Implement one-click easy login using digital signature and certificate\n    </p>\n\n    <b>Secure ID/Pass Login </b>\n    <p>\n      Server delievers server certificate to client when root(home) page is connected. <br>\n      ID/Pass login information was encrypted with server certificate. <br>\n      Server sends dual-token to client in encrypted way\n    </p>\n\n    <b>Simple Encryption Channel using Dual Token </b>\n    <p>\n      Generate one-time key using dual-token and apply to message encryption\n    </p>\n\n    <b>Simple Message Authentication using Dual Token </b>\n    <p>\n      Generate one-time key using dual-token and apply to message authentication\n    </p>\n  </div>\n\n  <h2 class=\"page-header\">Details of Generation and Usage of Dual-Token </h2>\n\n  <div class=\"alert alert-info\" role=\"alert\">\n    <b>Issuing dual-token by server </b>\n    <p>\n      ptoken = JWT(userInfo, serverSecretKey) <br>\n      stoken = JWT(ptoken, serverSecretKey) <br>\n      Server sends [ptoken, stoken] to client <br>\n      Client saves [ptoken, stoken] in LocalStorage of the browser\n    </p>\n\n    <b>Generating one-time auth info by client </b>\n    <p>\n      Generate client current time (ctime) <br>\n      Compute auth = Hash(ctime, stoken) <br>\n      Client sends [ctime, ptoken, auth] to server\n    </p>\n\n    <b>Verification of client authentication by server </b>\n    <p>\n      Generate server current time (stime) <br>\n      Compute stoken from ptoken: stoken = JWT(ptoken, serverSecretKey) <br>\n      Compute auth' = Hash(ctime, stoken) <br>\n      Verification: (1) Check time difference, (2) Verification of ptoken, (3) Match auth=?auth'\n    </p>\n\n  </div>\n\n  <h2 class=\"page-header\">Notices </h2>\n\n  <div class=\"alert alert-warning\" role=\"alert\">\n    <b>When ID/pass login fails </b>\n    <p>\n      Reload Home page, which will deliever server certificate. <br>\n      ID/Pass login uses server certificate to protect login information from eavesdropping.\n    </p>\n\n    <b>When easy login fails </b>\n    <p>\n      You can utilize easy login only when the client browser is equipped with certificate. You need to get the\n      certificate first.\n    </p>\n  </div>\n\n  <h2 class=\"page-header\">Contact Info. </h2>\n\n  <div class=\"alert alert-info\" role=\"alert\">\n    <b>Professor Byoungcheon Lee </b>\n    <p>\n      - Department of Information Security, Joongbu University, Korea <br>\n      - Email: sultan @ joongbu . ac . kr <br>\n      - Homepage: <a href=\"http://cris.joongbu.ac.kr\"> http://cris.joongbu.ac.kr</a>\n\n    </p>\n\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/blog.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/blog.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"name\">\n  <h2 class=\"page-header\"> JWT Authentication </h2>\n  <p>\n    Demonstration of JWT authentication\n  </p>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Name: {{name}}</li>\n    <li class=\"list-group-item\">Username: {{username}}</li>\n    <li class=\"list-group-item\">Email: {{email}}</li>\n    <li class=\"list-group-item\">Age: {{age}}</li>\n  </ul>\n  <br>\n  <h2 class=\"page-header\"> Information sent to the server to access this page </h2>\n  <div class=\"alert alert-success\" role=\"alert\">\n    <p>Public Token :\n      <textarea class=\"form-control\" rows=\"5\"> {{ptoken}}</textarea>\n    </p>\n\n    <p>\n      Fixed JWT(ptoken) is sent to the server repeatedly. <br>\n      If eavesdropping attacker gets this token, s/he will be able to logged in easily. <br>\n      Thus, this communication should be protected with https protocol.\n    </p>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cert/cert.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cert/cert.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"page-header\">Certificate Request</h2>\n<form (ngSubmit)=\"onCertRequest()\">\n  <div class=\"form-group\">\n    <label> Common Name - common name is same as username. It is auto typed in. </label>\n    <input type=\"text\" [(ngModel)]=\"common\" name=\"common\" class=\"form-control\" disabled>\n  </div>\n  <div class=\"form-group\">\n    <label> Organizational Unit Name </label>\n    <input type=\"text\" [(ngModel)]=\"orgUnit\" name=\"orgUnit\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label> Organization Name </label>\n    <input type=\"text\" [(ngModel)]=\"organization\" name=\"organization\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label> Locality Name </label>\n    <input type=\"text\" [(ngModel)]=\"locality\" name=\"locality\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label> State or Province Name </label>\n    <input type=\"text\" [(ngModel)]=\"state\" name=\"state\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label> Country - KR for Korea </label>\n    <input type=\"text\" [(ngModel)]=\"country\" name=\"country\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Certificate Request\">\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"name\">\n  <h2 class=\"page-header\">Name: {{name}}</h2>\n  <form>\n    <div class=\"form-group\">\n      <label>UserInfo</label>\n      <textarea class=\"form-control\" rows=\"1\" disabled>{{userString}}</textarea>\n    </div>\n    <hr>\n    <div class=\"form-group\">\n      <label>Public Token</label>\n      <textarea class=\"form-control\" rows=\"8\" disabled>{{ptoken}}</textarea>\n    </div>\n    <div class=\"form-group\">\n      <label>Secret Token</label>\n      <textarea class=\"form-control\" rows=\"8\" disabled>{{stoken}}</textarea>\n    </div>\n    <hr>\n    <div class=\"form-group\">\n      <label>User certificate</label>\n      <textarea class=\"form-control\" rows=\"8\" disabled>{{certPem}}</textarea>\n    </div>\n    <div class=\"form-group\">\n      <label>Server certificate</label>\n      <textarea class=\"form-control\" rows=\"8\" disabled>{{caCertPem}}</textarea>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/encrypt/encrypt.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/encrypt/encrypt.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"page-header\">Message Encryption </h2>\n<div class=\"alert alert-info\" role=\"alert\">\n  <p>\n    This page demonstrates message encryption using one-time secret key which is changing continually depending on time.\n    Server can recover the same one-time secret key and decrypt the ciphertext. Try to send the same message repeatedly,\n    then check the changing of one-time secret key.\n  </p>\n</div>\n<hr>\n<form (ngSubmit)=\"onEncryptSubmit()\">\n  <div class=\"form-group\">\n    <label> Type in input message.</label>\n    <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"plaintext\" name=\"plaintext\"></textarea>\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Send Encrypted Message\">\n</form>\n<hr>\n\n<div class=\"alert alert-info\" role=\"alert\">\n  <h4>Generated one-time secret key </h4>\n  <p>{{key}}</p>\n</div>\n\n<div class=\"alert alert-warning\" role=\"alert\">\n  <h4> Information sent to the server </h4>\n  <p> - Public Token:\n    <textarea class=\"form-control\" rows=\"5\"> {{ptoken}}</textarea>\n  </p>\n  <p> - Current Time: {{ctime}} </p>\n  <p> - Ciphertext:\n    <textarea class=\"form-control\" rows=\"5\"> {{encrypted}}</textarea>\n  </p>\n</div>\n\n<div class=\"alert alert-success\" role=\"alert\">\n  <h4> Server reply of decrypted message </h4>\n  <textarea class=\"form-control\" rows=\"5\"> {{decrypted}}</textarea>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"jumbotron text-center alert-danger\">\n    <h1>Dual-Token Authentication </h1>\n    <p class=\"lead\"> 이중토큰 인증 서비스 </p>\n    <a class=\"btn btn-primary\" routerLink='/register'> Register </a>\n    &nbsp;&nbsp;\n    <a class=\"btn btn-success\" routerLink='/login'> Login </a>\n  </div>\n\n  <div class=\"row text-center\">\n    <div class=\"col alert-warning\">\n      <h3>MEAN Framework </h3>\n      <p>Web development using Node.js / Express / MongoDB / Angular </p>\n    </div>\n    <div class=\"col alert-info\">\n      <h3>Angular Front-end</h3>\n      <p>Front-end framework using module, component, service </p>\n    </div>\n    <div class=\"col alert-warning\">\n      <h3>Ionic Framework </h3>\n      <p>Mobile app development using Ionic Framework </p>\n    </div>\n  </div>\n\n  <div class=\"row text-center\">\n    <div class=\"col alert-info\">\n      <h3>JWT </h3>\n      <p>Maintaining authenticated state using JSON web token and Passport </p>\n    </div>\n    <div class=\"col alert-warning\">\n      <h3>Dual token authentication </h3>\n      <p> Keeping authenticated state using dual-token (public token/secret token) through plain communication channel\n      </p>\n    </div>\n    <div class=\"col alert-info\">\n      <h3>One-click Easy login </h3>\n      <p>Certificate and digital signature-based one-click login </p>\n    </div>\n  </div>\n  <br>\n\n  <hr>\n\n  <h4> Information on Server Certificate </h4>\n  <div class=\"alert alert-info\">\n\n    <p> Common Name: {{caCommon}} </p>\n    <p> Organization: {{caOrganization}}</p>\n    <p> Org Unit: {{caOU}} </p>\n    <p> Server certificate (stored in LocalStorage) </p>\n    <textarea class=\"form-control\" rows=\"8\">{{caCertPem}} </textarea>\n  </div>\n\n  <h4> Verification of server using one-time server signature </h4>\n  <div class=\"alert alert-success\">\n    <p> Current Time: {{currentTime}}</p>\n    <p> Nonce: {{nonceHex}}</p>\n    <p> One-time signature:</p>\n    <textarea class=\"form-control\" rows=\"5\">{{signatureHex}} </textarea>\n    <p> Signature verification: {{verified}}</p>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/list/list.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/list/list.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"page-header\">User List </h2>\n<p>\n  Show user list registered in this server...\n</p>\n<table class=\"table table-striped\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th>Name</th>\n      <th>Username</th>\n      <th>Email</th>\n      <th>Age</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let user of users\">\n      <td>{{user.name}}</td>\n      <td>{{user.username}}</td>\n      <td>{{user.email}}</td>\n      <td>{{user.age}}</td>\n    </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"page-header\">Login </h2>\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <div class=\"alert alert-warning\">\n      <h3 class=\"page-header\">ID/Pass Login </h3>\n      <form (ngSubmit)=\"onLoginSubmit()\">\n        <div class=\"form-group\">\n          <label>Username</label>\n          <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"username\">\n        </div>\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\">\n        </div>\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n      </form>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"alert alert-info\">\n      <h3 class=\"page-header\"> One-click Easy Login </h3>\n      <p>\n        One-click easy login without ID/pass.\n        This feature can be used only after your browser is equipped with certificate. First, you need to get the\n        certificate from the server.\n      </p>\n      <form (ngSubmit)=\"onLoginSigSubmit()\">\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"One-click Easy Login\">\n      </form>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mac/mac.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mac/mac.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"page-header\">Message Authentication </h2>\n<div class=\"alert alert-info\" role=\"alert\">\n  <p>\n    This page demonstrates message authentication using one-time secret key which is changing continually depending on\n    time.\n    Server can recover the same one-time secret key and check the authenticity of message. Try to send the same message\n    repeatedly, then check the changing of one-time secret key.\n  </p>\n</div>\n<hr>\n<form (ngSubmit)=\"onMacSubmit()\">\n  <div class=\"form-group\">\n    <label> Type in input message.</label>\n    <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"plaintext\" name=\"plaintext\"></textarea>\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Send Message\">\n</form>\n<hr>\n\n<div class=\"alert alert-info\" role=\"alert\">\n  <h4>Generated one-time secret key </h4>\n  <p>{{key}}</p>\n</div>\n\n<div class=\"alert alert-warning\" role=\"alert\">\n  <h4> Information sent to the server </h4>\n  <p> - Public Token:\n    <textarea class=\"form-control\" rows=\"5\"> {{ptoken}}</textarea>\n  </p>\n  <p> - Current Time: {{ctime}} </p>\n  <p> - Message:\n    <textarea class=\"form-control\" rows=\"3\"> {{plaintext}}</textarea>\n  </p>\n  <p> - MAC: {{mac}} </p>\n</div>\n\n<div class=\"alert alert-success\" role=\"alert\">\n  <h4> Server reply </h4>\n  <p> {{msg}} </p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" routerLink='/'>DualTokenAuth</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink='/'>Home</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink='/about'>Intro</a></li>\n      <li *ngIf=\"checkLoggedIn()\" class=\"nav-item\"><a class=\"nav-link\" routerLink='/dashboard'> Dashboard </a></li>\n      <li *ngIf=\"checkLoggedIn()\" class=\"nav-item\"><a class=\"nav-link\" routerLink='/list'>List</a></li>\n      <li *ngIf=\"checkLoggedIn()\" class=\"nav-item\"><a class=\"nav-link\" routerLink='/blog'> JWT </a></li>\n      <li *ngIf=\"checkLoggedIn()\" class=\"nav-item\"><a class=\"nav-link\" routerLink='/profile'>DTA </a></li>\n      <li *ngIf=\"checkLoggedIn()\" class=\"nav-item\"><a class=\"nav-link\" routerLink='/encrypt'> Encrypt </a></li>\n      <li *ngIf=\"checkLoggedIn()\" class=\"nav-item\"><a class=\"nav-link\" routerLink='/mac'> Mac </a></li>\n      <li *ngIf=\"checkLoggedIn()\" class=\"nav-item\"><a class=\"nav-link\" routerLink='/cert'> Certificate </a></li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li *ngIf=\"!checkLoggedIn()\" class=\"nav-item\"><a class=\"nav-link\" routerLink='/login'>Login</a></li>\n      <li *ngIf=\"!checkLoggedIn()\" class=\"nav-item\"><a class=\"nav-link\" routerLink='/register'>Register</a></li>\n      <li *ngIf=\"checkLoggedIn()\" class=\"nav-item\"><a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n      </li>\n      <li *ngIf=\"checkLoggedIn()\" class=\"nav-item\"><a class=\"nav-link\" (click)=\"onDeleteCertClick()\"\n          href=\"#\">DeleteCert</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"name\">\n  <h2 class=\"page-header\"> DTA Demonstration </h2>\n  <p>\n    Demonstration of dual-token authentication\n  </p>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Name: {{name}}</li>\n    <li class=\"list-group-item\">Username: {{username}}</li>\n    <li class=\"list-group-item\">Email: {{email}}</li>\n    <li class=\"list-group-item\">Age: {{age}}</li>\n  </ul>\n  <br>\n  <h2 class=\"page-header\"> Information sent to the server to access this page </h2>\n  <div class=\"alert alert-success\" role=\"alert\">\n    <p>Public Token:\n      <textarea class=\"form-control\" rows=\"6\"> {{ptoken}}</textarea>\n    </p>\n  </div>\n  <div class=\"alert alert-warning\" role=\"alert\">\n    <p>Current Time : {{ctime}}</p>\n    <p>One-time Auth : {{auth}}</p>\n    <p>One-time Auth is changing depending on current time, thus eavesdropping of this information is useless.</p>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"page-header\">Register</h2>\n<form (ngSubmit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label> Name </label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label> Email </label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label> Age </label>\n    <input type=\"text\" [(ngModel)]=\"age\" name=\"age\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label> Username </label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label> Password1 </label>\n    <input type=\"password\" [(ngModel)]=\"password1\" name=\"password1\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label> Password2 </label>\n    <input type=\"password\" [(ngModel)]=\"password2\" name=\"password2\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_encrypt_encrypt_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/encrypt/encrypt.component */ "./src/app/components/encrypt/encrypt.component.ts");
/* harmony import */ var _components_mac_mac_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/mac/mac.component */ "./src/app/components/mac/mac.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_cert_cert_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/cert/cert.component */ "./src/app/components/cert/cert.component.ts");
















const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'navbar', component: _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'list', component: _components_list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'encrypt', component: _components_encrypt_encrypt_component__WEBPACK_IMPORTED_MODULE_11__["EncryptComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'mac', component: _components_mac_mac_component__WEBPACK_IMPORTED_MODULE_12__["MacComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'blog', component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_13__["BlogComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'cert', component: _components_cert_cert_component__WEBPACK_IMPORTED_MODULE_15__["CertComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\n  margin-top: 10px;\n  min-height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXFJUQS1IZXJva3VcXGR0YVxcYW5ndWxhci1zcmMvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbn1cbiIsIi5tYWluIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWluLWhlaWdodDogNTAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AppComponent = class AppComponent {
    constructor(http) {
        this.http = http;
        this.title = 'angular-src';
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _components_encrypt_encrypt_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/encrypt/encrypt.component */ "./src/app/components/encrypt/encrypt.component.ts");
/* harmony import */ var _components_mac_mac_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/mac/mac.component */ "./src/app/components/mac/mac.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_cert_cert_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/cert/cert.component */ "./src/app/components/cert/cert.component.ts");

























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
            _components_list_list_component__WEBPACK_IMPORTED_MODULE_13__["ListComponent"],
            _components_encrypt_encrypt_component__WEBPACK_IMPORTED_MODULE_19__["EncryptComponent"],
            _components_mac_mac_component__WEBPACK_IMPORTED_MODULE_20__["MacComponent"],
            _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_21__["BlogComponent"],
            _components_about_about_component__WEBPACK_IMPORTED_MODULE_22__["AboutComponent"],
            _components_cert_cert_component__WEBPACK_IMPORTED_MODULE_23__["CertComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16__["FlashMessagesModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_18__["JwtModule"].forRoot({
                config: {
                    tokenGetter: () => {
                        return localStorage.getItem('id_token');
                    }
                }
            })
        ],
        providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_14__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16__["FlashMessagesService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/components/about/about.component.scss")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/components/blog/blog.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/blog/blog.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let BlogComponent = class BlogComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.ptoken = localStorage.getItem('ptoken');
        this.authService.getBlog().subscribe(blog => {
            this.name = blog.user.name;
            this.username = blog.user.username;
            this.email = blog.user.email;
            this.age = blog.user.age;
        }, err => {
            console.log(err);
            return false;
        });
    }
};
BlogComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/blog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blog.component.scss */ "./src/app/components/blog/blog.component.scss")).default]
    })
], BlogComponent);



/***/ }),

/***/ "./src/app/components/cert/cert.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/cert/cert.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2VydC9jZXJ0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/cert/cert.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/cert/cert.component.ts ***!
  \***************************************************/
/*! exports provided: CertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertComponent", function() { return CertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





let CertComponent = class CertComponent {
    constructor(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ngOnInit() {
        this.common = JSON.parse(localStorage.getItem('userNoPW')).username;
    }
    onCertRequest() {
        const request = {
            country: this.country,
            state: this.state,
            locality: this.locality,
            organization: this.organization,
            orgUnit: this.orgUnit,
            common: this.common
        };
        this.authService.certRequest(request).subscribe(data => {
            if (data.success) {
                this.authService.storeCert(data.cert, data.caCert);
                this.flashMessage.show('Your certificate was issued.', {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
                this.router.navigate(['dashboard']);
            }
            else {
                this.flashMessage.show('Certificate issuing fails', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                this.router.navigate(['cert']);
            }
        });
    }
};
CertComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"] }
];
CertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cert',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cert/cert.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cert.component.scss */ "./src/app/components/cert/cert.component.scss")).default]
    })
], CertComponent);



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
        this.userString = localStorage.getItem('userNoPW');
        this.name = JSON.parse(this.userString).name;
        this.ptoken = localStorage.getItem('ptoken');
        this.stoken = localStorage.getItem('stoken');
        this.certPem = localStorage.getItem('cert');
        this.caCertPem = localStorage.getItem('caCert');
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/components/encrypt/encrypt.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/encrypt/encrypt.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW5jcnlwdC9lbmNyeXB0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/encrypt/encrypt.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/encrypt/encrypt.component.ts ***!
  \*********************************************************/
/*! exports provided: EncryptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncryptComponent", function() { return EncryptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var node_forge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node-forge */ "./node_modules/node-forge/lib/index.js");
/* harmony import */ var node_forge__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_forge__WEBPACK_IMPORTED_MODULE_4__);





let EncryptComponent = class EncryptComponent {
    constructor(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    ngOnInit() {
    }
    onEncryptSubmit() {
        this.ctime = new Date().getTime().toString();
        this.ptoken = localStorage.getItem('ptoken');
        this.stoken = localStorage.getItem('stoken');
        this.key = this.authService.getKey(this.ctime, this.stoken);
        this.encrypted = this.authService.getEncrypt(this.plaintext, this.key);
        this.authService.encryptedMessage(this.encrypted, this.ctime, this.ptoken).subscribe(data => {
            if (data.decrypted) {
                this.decrypted = node_forge__WEBPACK_IMPORTED_MODULE_4__["util"].decodeUtf8(data.decrypted.data);
            }
        });
    }
};
EncryptComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"] }
];
EncryptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-encrypt',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./encrypt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/encrypt/encrypt.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./encrypt.component.scss */ "./src/app/components/encrypt/encrypt.component.scss")).default]
    })
], EncryptComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var node_forge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! node-forge */ "./node_modules/node-forge/lib/index.js");
/* harmony import */ var node_forge__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(node_forge__WEBPACK_IMPORTED_MODULE_5__);






const pki = node_forge__WEBPACK_IMPORTED_MODULE_5__["pki"];
let HomeComponent = class HomeComponent {
    constructor(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ngOnInit() {
        this.authService.connectHome().subscribe(data => {
            this.currentTime = new Date(data.currentTime); // Server current time
            this.nonceHex = data.nonceHex;
            this.caCertPem = data.caCertPem;
            this.signatureHex = data.signatureHex;
            let caCert = pki.certificateFromPem(data.caCertPem);
            let caPublicKey = caCert.publicKey;
            let signature = node_forge__WEBPACK_IMPORTED_MODULE_5__["util"].hexToBytes(data.signatureHex);
            let clientTime = new Date().getTime(); // Client current time
            let diff = clientTime - data.currentTime;
            let md = node_forge__WEBPACK_IMPORTED_MODULE_5__["md"].sha1.create();
            md.update(data.currentTime, 'utf8');
            md.update(data.nonceHex, 'utf8');
            let result = caPublicKey.verify(md.digest().bytes(), signature);
            if (result == true && diff < 100000) {
                this.verified = result;
                localStorage.setItem('caCert', data.caCertPem);
            }
            this.caCommon = caCert.subject.getField('CN').value;
            this.caOrganization = caCert.subject.getField('O').value;
            this.caOU = caCert.subject.getField('OU').value;
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/list/list.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/list/list.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



let ListComponent = class ListComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.getList().subscribe(users => {
            this.users = users;
        });
    }
};
ListComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/list/list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.component.scss */ "./src/app/components/list/list.component.scss")).default]
    })
], ListComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var node_forge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! node-forge */ "./node_modules/node-forge/lib/index.js");
/* harmony import */ var node_forge__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(node_forge__WEBPACK_IMPORTED_MODULE_5__);






const pki = node_forge__WEBPACK_IMPORTED_MODULE_5__["pki"];
let LoginComponent = class LoginComponent {
    constructor(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ngOnInit() {
    }
    // ID/Pass login
    onLoginSubmit() {
        // Get ca certificate
        let caCertPem = localStorage.getItem('caCert');
        let caCert = pki.certificateFromPem(caCertPem);
        let caPublicKey = caCert.publicKey;
        // Build up LoginInfo
        const loginInfo = {
            username: this.username,
            password: this.password
        };
        let loginInfoJson = JSON.stringify(loginInfo);
        // Encrypt LoginInfo with CA's public key
        let key = node_forge__WEBPACK_IMPORTED_MODULE_5__["random"].getBytesSync(16); // Random Session Key for AES encryption
        let cipher = node_forge__WEBPACK_IMPORTED_MODULE_5__["cipher"].createCipher('AES-ECB', key);
        cipher.start();
        cipher.update(node_forge__WEBPACK_IMPORTED_MODULE_5__["util"].createBuffer(loginInfoJson, 'binary'));
        cipher.finish();
        let ciphertext = cipher.output; // Encrypted userInfo
        let ciphertextHex = node_forge__WEBPACK_IMPORTED_MODULE_5__["util"].bytesToHex(ciphertext);
        let encryptedKey = caPublicKey.encrypt(key, 'RSA-OAEP'); // Encrypted session key with server's public key
        let encryptedKeyHex = node_forge__WEBPACK_IMPORTED_MODULE_5__["util"].bytesToHex(encryptedKey);
        // Encrypted LoginInfo.
        const loginInfoEnc = {
            ciphertextHex: ciphertextHex,
            encryptedKeyHex: encryptedKeyHex // Encrypted session key with server's public key
        };
        this.authService.authenticateUser(loginInfoEnc).subscribe(data => {
            if (data.success) {
                // Recover UserInfo
                let ciphertextToHex = data.ciphertextToHex;
                let ciphertext = node_forge__WEBPACK_IMPORTED_MODULE_5__["util"].hexToBytes(ciphertextToHex);
                let decipher = node_forge__WEBPACK_IMPORTED_MODULE_5__["cipher"].createDecipher('AES-ECB', key);
                decipher.start();
                decipher.update(node_forge__WEBPACK_IMPORTED_MODULE_5__["util"].createBuffer(ciphertext, 'binary'));
                decipher.finish();
                let recovered = decipher.output;
                let recoveredParse = JSON.parse(recovered);
                let ptoken = recoveredParse.ptoken;
                let stoken = recoveredParse.stoken;
                let userNoPW = recoveredParse.userNoPW;
                this.userNoPW = userNoPW;
                // Store Token and User Info
                this.authService.storeUserData(ptoken, stoken, userNoPW);
                this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                this.router.navigate(['dashboard']); //Logged in and Redirect to dashboard
            }
            else {
                this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                this.router.navigate(['login']); // Login failed and redirect to Login page
            }
        });
    }
    // One-click easy login using digital signature
    onLoginSigSubmit() {
        this.authService.authenticateSigUser().subscribe(data => {
            if (data.success) {
                this.authService.storeUserData(data.ptoken, data.stoken, data.userNoPW);
                this.flashMessage.show('Easy login successful', { cssClass: 'alert-success', timeout: 5000 });
                this.router.navigate(['dashboard']);
            }
            else {
                this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                this.router.navigate(['login']);
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/mac/mac.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/mac/mac.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFjL21hYy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/mac/mac.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/mac/mac.component.ts ***!
  \*************************************************/
/*! exports provided: MacComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacComponent", function() { return MacComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var node_forge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node-forge */ "./node_modules/node-forge/lib/index.js");
/* harmony import */ var node_forge__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_forge__WEBPACK_IMPORTED_MODULE_4__);





let MacComponent = class MacComponent {
    constructor(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    ngOnInit() {
    }
    onMacSubmit() {
        this.ctime = new Date().getTime().toString();
        this.ptoken = localStorage.getItem('ptoken');
        this.stoken = localStorage.getItem('stoken');
        this.key = this.authService.getKey(this.ctime, this.stoken);
        const plaintextUtf8 = node_forge__WEBPACK_IMPORTED_MODULE_4__["util"].encodeUtf8(this.plaintext);
        this.mac = this.authService.getMac(plaintextUtf8, this.key);
        this.authService.macMessage(plaintextUtf8, this.ctime, this.ptoken, this.mac).subscribe(data => {
            console.log(data);
            this.msg = data.msg;
        });
    }
};
MacComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"] }
];
MacComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mac',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mac.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mac/mac.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mac.component.scss */ "./src/app/components/mac/mac.component.scss")).default]
    })
], MacComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





let NavbarComponent = class NavbarComponent {
    constructor(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ngOnInit() {
    }
    onLogoutClick() {
        this.authService.logout();
        this.flashMessage.show('You are now logged out. Login again?', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    }
    checkLoggedIn() {
        return this.authService.loggedIn();
    }
    onDeleteCertClick() {
        localStorage.clear(); // Clear localStorage
        this.authService.logout();
        this.flashMessage.show('Certificate deleted. You are now logged out. ', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/profile/profile.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ProfileComponent = class ProfileComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.ctime = new Date().getTime().toString();
        this.ptoken = localStorage.getItem('ptoken');
        this.stoken = localStorage.getItem('stoken');
        this.auth = this.authService.computeAuth(this.ctime, this.stoken);
        this.authService.getProfile(this.ptoken, this.ctime, this.auth).subscribe(profile => {
            this.name = profile.userNoPW.name;
            this.username = profile.userNoPW.username;
            this.email = profile.userNoPW.email;
            this.age = profile.userNoPW.age;
        }, err => {
            console.log(err);
            this.authService.logout();
            this.router.navigate(['login']);
            return false;
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/components/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var node_forge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! node-forge */ "./node_modules/node-forge/lib/index.js");
/* harmony import */ var node_forge__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(node_forge__WEBPACK_IMPORTED_MODULE_6__);







const pki = node_forge__WEBPACK_IMPORTED_MODULE_6__["pki"];
let RegisterComponent = class RegisterComponent {
    constructor(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    onRegisterSubmit() {
        // Get Server certificate
        const caCertPem = localStorage.getItem('caCert');
        const caCert = pki.certificateFromPem(caCertPem);
        const caPublicKey = caCert.publicKey;
        // Check two password inputs
        if (this.password1 !== this.password2) {
            this.flashMessage.show('Two password inputs are not equal', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Generate new user info
        const userInfo = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password1,
            age: this.age
        };
        const userInfoJson = JSON.stringify(userInfo);
        // Check all input fields
        if (!this.validateService.validateRegister(userInfo)) {
            this.flashMessage.show('Fill out all required fields!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate email address
        if (!this.validateService.validateEmail(userInfo.email)) {
            this.flashMessage.show('Use correct email address!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Encrypt Login Info with Server's public key
        let key = node_forge__WEBPACK_IMPORTED_MODULE_6__["random"].getBytesSync(16); // Random Session Key for AES encryption
        let cipher = node_forge__WEBPACK_IMPORTED_MODULE_6__["cipher"].createCipher('AES-ECB', key);
        cipher.start();
        cipher.update(node_forge__WEBPACK_IMPORTED_MODULE_6__["util"].createBuffer(userInfoJson, 'binary'));
        cipher.finish();
        let ciphertext = cipher.output; // Encrypted userInfo
        let ciphertextHex = node_forge__WEBPACK_IMPORTED_MODULE_6__["util"].bytesToHex(ciphertext);
        let encryptedKey = caPublicKey.encrypt(key, 'RSA-OAEP'); // PublicKey-encrypted session key
        let encryptedKeyHex = node_forge__WEBPACK_IMPORTED_MODULE_6__["util"].bytesToHex(encryptedKey);
        // Encrypted Login Info
        const register = {
            ciphertextHex: ciphertextHex,
            encryptedKeyHex: encryptedKeyHex
        };
        // Register New User
        this.authService.registerUser(register).subscribe(data => {
            if (data.success) {
                this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                this.router.navigate(['/login']);
            }
            else {
                this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                this.router.navigate(['/register']);
            }
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var node_forge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node-forge */ "./node_modules/node-forge/lib/index.js");
/* harmony import */ var node_forge__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_forge__WEBPACK_IMPORTED_MODULE_4__);





const pki = node_forge__WEBPACK_IMPORTED_MODULE_4__["pki"];
// Basic header option
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let AuthService = class AuthService {
    constructor(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
    }
    // 0. API Connection
    prepEndpoint(ep) {
        // 1. localhost service
        // return 'http://localhost:3000/' + ep;
        // 2. Heroku cloud porting
        return ep;
    }
    // 1. Connecting Home, distribute server certificate
    connectHome() {
        const homeUrl = this.prepEndpoint('users/home');
        return this.http.get(homeUrl, httpOptions);
    }
    // 2. Register new user
    registerUser(register) {
        const registerUrl = this.prepEndpoint('users/register');
        return this.http.post(registerUrl, register, httpOptions);
    }
    // 3. ID/Pass login
    authenticateUser(login) {
        const loginUrl = this.prepEndpoint('users/authenticate');
        return this.http.post(loginUrl, login, httpOptions);
    }
    // 4. One-click easy login
    authenticateSigUser() {
        const privateKeyPem = localStorage.getItem('privateKey');
        const privateKey = pki.privateKeyFromPem(privateKeyPem);
        const certPem = localStorage.getItem('cert');
        const currentTime = new Date().getTime();
        const cert = pki.certificateFromPem(certPem);
        const username = cert.subject.getField('CN').value;
        // Signature generation on username, currentTime
        let md = node_forge__WEBPACK_IMPORTED_MODULE_4__["md"].sha1.create();
        md.update(username, 'utf8');
        md.update(currentTime, 'utf8');
        const signature = privateKey.sign(md);
        const signatureHex = node_forge__WEBPACK_IMPORTED_MODULE_4__["util"].bytesToHex(signature);
        // Easy login request
        const request = {
            username: username,
            currentTime: currentTime,
            signatureHex: signatureHex,
            certPem: certPem
        };
        const loginUrl = this.prepEndpoint('users/authenticateSig');
        return this.http.post(loginUrl, request, httpOptions);
    }
    // 5. Profile page using dual-token authentication (DTA)
    getProfile(ptoken, ctime, auth) {
        // Http header option for DTA
        const httpOptions1 = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': ptoken,
                'Ctime': ctime,
                'Auth': auth
            })
        };
        const profileUrl = this.prepEndpoint('users/profile');
        return this.http.get(profileUrl, httpOptions1);
    }
    // 6. Blog page using standard JWT authentication
    getBlog() {
        // http header option for JWT
        const httpOptions2 = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.ptoken
            })
        };
        const blogUrl = this.prepEndpoint('users/blog');
        return this.http.get(blogUrl, httpOptions2);
    }
    // 7. Show user list
    getList() {
        const listUrl = this.prepEndpoint('users/list');
        return this.http.get(listUrl, httpOptions);
    }
    // 8. Message encryption using one-time secret key
    encryptedMessage(encrypted, ctime, ptoken) {
        // http header option for message encryption
        const httpOptions3 = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': ptoken,
                'Ctime': ctime,
                'Enc': encrypted
            })
        };
        const encryptUrl = this.prepEndpoint('users/encrypt');
        return this.http.get(encryptUrl, httpOptions3);
    }
    getEncrypt(plaintext, key) {
        let plaintextUtf8 = node_forge__WEBPACK_IMPORTED_MODULE_4__["util"].encodeUtf8(plaintext);
        let key1 = node_forge__WEBPACK_IMPORTED_MODULE_4__["util"].hexToBytes(key);
        let cipher = node_forge__WEBPACK_IMPORTED_MODULE_4__["cipher"].createCipher('AES-ECB', key1);
        cipher.start();
        cipher.update(node_forge__WEBPACK_IMPORTED_MODULE_4__["util"].createBuffer(plaintextUtf8, 'binary'));
        cipher.finish();
        let ciphertext = cipher.output;
        return node_forge__WEBPACK_IMPORTED_MODULE_4__["util"].bytesToHex(ciphertext);
    }
    // 9. Message authentication using one-time secret key
    macMessage(plaintext, ctime, ptoken, mac) {
        // http header option for message authentication
        const httpOptions4 = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': ptoken,
                'Ctime': ctime,
                'Mac': mac,
                'Plaintext': plaintext
            })
        };
        const macUrl = this.prepEndpoint('users/mac');
        return this.http.get(macUrl, httpOptions4);
    }
    getMac(plaintext, key) {
        let md = node_forge__WEBPACK_IMPORTED_MODULE_4__["md"].sha256.create();
        md.update(plaintext + key);
        return md.digest().toHex();
    }
    // 10. Issuing certificate
    certRequest(request) {
        // Key generation
        let keyPair = pki.rsa.generateKeyPair(2048);
        let publicKey = keyPair.publicKey;
        let privateKey = keyPair.privateKey;
        let publicKeyPem = pki.publicKeyToPem(publicKey);
        let privateKeyPem = pki.privateKeyToPem(privateKey);
        // Storing private key
        localStorage.setItem('privateKey', privateKeyPem);
        // Certificate request. UTF-8 encoding.
        const req = {
            country: node_forge__WEBPACK_IMPORTED_MODULE_4__["util"].encodeUtf8(request.country),
            state: node_forge__WEBPACK_IMPORTED_MODULE_4__["util"].encodeUtf8(request.state),
            locality: node_forge__WEBPACK_IMPORTED_MODULE_4__["util"].encodeUtf8(request.locality),
            organization: node_forge__WEBPACK_IMPORTED_MODULE_4__["util"].encodeUtf8(request.organization),
            orgUnit: node_forge__WEBPACK_IMPORTED_MODULE_4__["util"].encodeUtf8(request.orgUnit),
            common: request.common,
            publicKey: publicKeyPem
        };
        const certUrl = this.prepEndpoint('users/cert');
        return this.http.post(certUrl, req, httpOptions);
    }
    // Other utility functions
    // 1. Store user data in LocalStorage
    storeUserData(ptoken, stoken, userNoPW) {
        localStorage.setItem('ptoken', ptoken);
        localStorage.setItem('stoken', stoken);
        localStorage.setItem('userNoPW', JSON.stringify(userNoPW));
        this.ptoken = ptoken;
        this.stoken = stoken;
        this.userNoPW = userNoPW;
    }
    // 2. Delete user info in logout
    logout() {
        this.ptoken = null;
        this.stoken = null;
        this.userNoPW = null;
        localStorage.removeItem('ptoken');
        localStorage.removeItem('stoken');
        localStorage.removeItem('userNoPW');
    }
    // 3. Check loggedIn state using JWT
    loggedIn() {
        return !this.jwtHelper.isTokenExpired(this.ptoken);
    }
    // 4. Generate one-time key
    getKey(ctime, stoken) {
        let md = node_forge__WEBPACK_IMPORTED_MODULE_4__["md"].sha256.create();
        md.update(ctime + stoken);
        const key = md.digest().toHex();
        return key;
    }
    // 5. Generate one-time auth
    computeAuth(ctime, stoken) {
        let md = node_forge__WEBPACK_IMPORTED_MODULE_4__["md"].sha256.create();
        md.update(ctime + stoken);
        return md.digest().toHex();
    }
    // 6. Store certificate
    storeCert(cert, caCert) {
        localStorage.setItem('cert', cert);
        localStorage.setItem('caCert', caCert);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ValidateService = class ValidateService {
    constructor() { }
    validateRegister(user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
};
ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ValidateService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\RTA-Heroku\dta\angular-src\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);