(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calculator/calculator.component */ "./src/app/calculator/calculator.component.ts");
//File was created for future additions, at this moment it's not necessarily to have it.
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_2__["CalculatorComponent"],
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/calculator/calculator.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_4__["CalculatorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calculator/calculator.component.css":
/*!*****************************************************!*\
  !*** ./src/app/calculator/calculator.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.checkbox {\r\n  padding-right: 20px;\r\n}\r\n.container{\r\n  text-align: center;\r\n  position: absolute;\r\n  top: 40%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%,-50%);\r\n          transform: translate(-50%,-50%);\r\n  width: 100%;\r\n}\r\n.form-control{\r\n  width: 350px;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n.zloty-text{\r\n  white-space: nowrap;\r\n}\r\n.label-text{\r\n  padding-right: 40px;\r\n  padding-left: 10px;\r\n}\r\nhr{\r\n  width: 600px;\r\n  padding-bottom: 30px;\r\n}\r\n.history{\r\n  text-align: left;\r\n  margin-top: 30px;\r\n}\r\n@-webkit-keyframes text {\r\n  0%{\r\n    color: black;\r\n  }\r\n  30%{\r\n    letter-spacing: 20px;\r\n  }\r\n}\r\n@keyframes text {\r\n  0%{\r\n    color: black;\r\n  }\r\n  30%{\r\n    letter-spacing: 20px;\r\n  }\r\n}\r\ninput[type=\"checkbox\"], input[type=\"radio\"]{\r\n  position: absolute;\r\n  right: 9000px;\r\n}\r\n.toggle input[type=\"radio\"] + .label-text:before{\r\n  text-align: center;\r\n  font-size: 20px;\r\n  margin-top: 10px;\r\n  content: \"\\f204\";\r\n  font-family: \"FontAwesome\";\r\n  speak: none;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-variant: normal;\r\n  text-transform: none;\r\n  line-height: 1;\r\n  -webkit-font-smoothing:antialiased;\r\n  width: 1em;\r\n  display: inline-block;\r\n  margin-right: 10px;\r\n}\r\n.toggle input[type=\"radio\"]:checked + .label-text:before{\r\n  content: \"\\f205\";\r\n  color: #16a085;\r\n  -webkit-animation: effect 600ms;\r\n          animation: effect 600ms;\r\n}\r\n.toggle input[type=\"radio\"]:disabled + .label-text{\r\n  color: #aaa;\r\n}\r\n.toggle input[type=\"radio\"]:disabled + .label-text:before{\r\n  content: \"\\f204\";\r\n  color: #ccc;\r\n}\r\n@-webkit-keyframes effect{\r\n  0%{-webkit-transform: scale(0);transform: scale(0);}\r\n  25%{-webkit-transform: scale(1.3);transform: scale(1.3);}\r\n  75%{-webkit-transform: scale(1.4);transform: scale(1.4);}\r\n  100%{-webkit-transform: scale(1);transform: scale(1);}\r\n}\r\n@keyframes effect{\r\n  0%{-webkit-transform: scale(0);transform: scale(0);}\r\n  25%{-webkit-transform: scale(1.3);transform: scale(1.3);}\r\n  75%{-webkit-transform: scale(1.4);transform: scale(1.4);}\r\n  100%{-webkit-transform: scale(1);transform: scale(1);}\r\n}\r\n.btn{\r\n  border-color: transparent;\r\n  border-radius: 10px;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 30px;\r\n  width: 200px;\r\n  height: 38px;\r\n  font-size: 15px;\r\n  background: #3ba082;\r\n  font-family: 'Raleway', sans-serif;\r\n}\r\nh3{\r\n  padding-top: 25px;\r\n  color: #3b3b3b;\r\n  font-family: 'Raleway', sans-serif;\r\n}\r\nhr{\r\n  width: 360px;\r\n  margin-top: 30px;\r\n}\r\n.form-check{\r\n  font-family: 'Raleway', sans-serif;\r\n}\r\n.history{\r\n  font-family: 'Raleway', sans-serif;\r\n  padding-bottom: 15px;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n.form-default{\r\n  background: rgba(255, 255, 255, 0.8);\r\n  height: 100vh;\r\n  border-radius: 2px;\r\n  border-right: black;\r\n  display: block;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  width: 360px;\r\n  height: 400px;\r\n}\r\n.form-control{\r\n  width: 260px;\r\n  font-family: \"Yu Gothic\"\r\n}\r\n.p-salary{\r\n  margin-top: 15px;\r\n  font-family: 'Raleway', sans-serif;\r\n}\r\n.head-tr{\r\n  font-family: 'Raleway', sans-serif;\r\n}\r\n.table{\r\n  background: rgba(255, 255, 255, 0.8);\r\n  font-family: \"Yu Gothic\"\r\n}\r\n.table-wrapper-scroll-y {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 400px;\r\n  display: block;\r\n  max-height: 400px;\r\n  overflow-y: scroll;\r\n  -ms-overflow-style: -ms-autohiding-scrollbar;\r\n}\r\n@media only screen and (max-width: 992px) {\r\n  .table{\r\n    width: 300px;\r\n  }\r\n\r\n}\r\n@media only screen and (max-width: 768px) {\r\n\r\n  .table{\r\n  margin-top: 50px;\r\n  }\r\n\r\n  .form-default{\r\n    margin-top: 90px;\r\n  }\r\n\r\n  .table-wrapper-scroll-y{\r\n    max-height: 200px;\r\n  }\r\n\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/calculator/calculator.component.html":
/*!******************************************************!*\
  !*** ./src/app/calculator/calculator.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n\r\n<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm\">\r\n\r\n       <form class=\"form-default\">\r\n          <h3>Salary calculator</h3>\r\n            <hr>\r\n               <div class=\"form-group\">\r\n                 <input type=\"number\" class=\"form-control\" id=\"value\"\r\n                    placeholder=\"Enter daily rate\"\r\n                     required\r\n                      [(ngModel)]=\"calculator.value\" [(ngModel)]=\"calculator.inputUser\" name=\"value\" #value=\"ngModel\">\r\n\r\n               </div>\r\n        <form>\r\n          <div class=\"form-check\">\r\n            <label class=\"toggle\">\r\n              <input type=\"radio\" name=\"toggle\" value=\"EUR\"\r\n               [(ngModel)]=\"calculator.currency\" name=\"currency\"><span class=\"label-text\">EUR</span>\r\n            </label>\r\n            <label class=\"toggle\">\r\n               <input type=\"radio\" name=\"toggle\"  value=\"GBP\"\r\n               [(ngModel)]=\"calculator.currency\" name=\"currency\"> <span class=\"label-text\">GBP</span>\r\n             </label>\r\n            <label class=\"toggle\">\r\n              <input type=\"radio\" name=\"toggle\" value=\"PLN\"\r\n               [(ngModel)]=\"calculator.currency\" name=\"currency\"> <span class=\"label-text\">PLN</span>\r\n            </label>\r\n           </div>\r\n         </form>\r\n\r\n         <div class=\"result-label\">\r\n           <p class=\"p-salary\">Net monthly salary: </p>\r\n           <h4 id=\"myInput\" *ngIf=\"currencies\">{{currencies[currencies.length-1].value}}</h4>\r\n         </div>\r\n\r\n         <div class=\"button\">\r\n           <button type=\"button\" class=\"btn btn-dark\"   (click)=\"refresh()\"  (click)=\"addSalary()\">Calculate</button>\r\n        </div>\r\n\r\n       </form>\r\n    </div>\r\n\r\n     <div class=\"col-sm\">\r\n\r\n       <table class=\"table table-striped table-wrapper-scroll-y\">\r\n         <thead>\r\n           <tr class=\"head-tr\">\r\n              <th scope=\"col\">№</th>\r\n              <th scope=\"col\">Currency type</th>\r\n              <th scope=\"col\">Daily rate</th>\r\n              <th scope=\"col\">Net monthly salary(zł)</th>\r\n\r\n           </tr>\r\n          </thead>\r\n          <tbody>\r\n             <tr *ngFor=\"let cur of currencies; index as i\">\r\n                <td>{{cur.id}}</td>\r\n               <td>{{cur.currency}}</td>\r\n               <td>{{cur.inputUser}}</td>\r\n               <td>{{cur.value}}</td>\r\n            </tr>\r\n           </tbody>\r\n         </table>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/calculator/calculator.component.ts":
/*!****************************************************!*\
  !*** ./src/app/calculator/calculator.component.ts ***!
  \****************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../currency */ "./src/app/currency.ts");
/* harmony import */ var _currency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../currency.service */ "./src/app/currency.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent(currencyService, location) {
        this.currencyService = currencyService;
        this.location = location;
        this.calculator = new _currency__WEBPACK_IMPORTED_MODULE_1__["Currency"]();
        this.submitted = false;
    }
    CalculatorComponent.prototype.ngOnInit = function () {
        this.getSalary();
    };
    CalculatorComponent.prototype.newSalary = function () {
        this.submitted = false;
        this.calculator = new _currency__WEBPACK_IMPORTED_MODULE_1__["Currency"]();
    };
    CalculatorComponent.prototype.addSalary = function () {
        this.submitted = true;
        this.save();
    };
    CalculatorComponent.prototype.getSalary = function () {
        var _this = this;
        return this.currencyService.getCurrencies()
            .subscribe(function (currencies) {
            console.log(currencies);
            _this.currencies = currencies;
        });
    };
    CalculatorComponent.prototype.onSelect = function (selectedItem) {
        console.log("Selected item Id: ", selectedItem.Id); // You get the Id of the selected item here
    };
    CalculatorComponent.prototype.refresh = function () {
        window.location.reload();
    };
    CalculatorComponent.prototype.save = function () {
        console.log(this.calculator);
        this.currencyService.addCurrency(this.calculator)
            .subscribe();
    };
    CalculatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calculator',
            template: __webpack_require__(/*! ./calculator.component.html */ "./src/app/calculator/calculator.component.html"),
            styles: [__webpack_require__(/*! ./calculator.component.css */ "./src/app/calculator/calculator.component.css")]
        }),
        __metadata("design:paramtypes", [_currency_service__WEBPACK_IMPORTED_MODULE_2__["CurrencyService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], CalculatorComponent);
    return CalculatorComponent;
}());



/***/ }),

/***/ "./src/app/currency.service.ts":
/*!*************************************!*\
  !*** ./src/app/currency.service.ts ***!
  \*************************************/
/*! exports provided: CurrencyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyService", function() { return CurrencyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var CurrencyService = /** @class */ (function () {
    function CurrencyService(http) {
        this.http = http;
        this.currencyUrl = 'http://localhost:8080/api/';
    }
    CurrencyService.prototype.getCurrencies = function () {
        return this.http.get(this.currencyUrl);
    };
    CurrencyService.prototype.getCurrency = function (id) {
        var url = this.currencyUrl + "/" + id;
        return this.http.get(url);
    };
    CurrencyService.prototype.addCurrency = function (currency) {
        return this.http.post(this.currencyUrl, currency, httpOptions);
    };
    CurrencyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CurrencyService);
    return CurrencyService;
}());



/***/ }),

/***/ "./src/app/currency.ts":
/*!*****************************!*\
  !*** ./src/app/currency.ts ***!
  \*****************************/
/*! exports provided: Currency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Currency", function() { return Currency; });
var Currency = /** @class */ (function () {
    function Currency() {
    }
    return Currency;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development model, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production model because it will have a negative impact
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Vlad\Desktop\Important\zadanie_kalkulator_s\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map