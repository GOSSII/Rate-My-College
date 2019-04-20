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

/***/ "./src/app/admin-dashboard/admin-dashboard.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page_titile{\n    padding-top: 5px;\n    text-align: center;\n}\n.special-card{\n    background-color: rgba(245, 245, 245, 1);\n    opacity: .4;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksd0NBQXdDO0lBQ3hDLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlX3RpdGlsZXtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zcGVjaWFsLWNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAxKTtcbiAgICBvcGFjaXR5OiAuNDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"page_titile\">\n    <h3>Admin Dashboard</h3>\n  </div>\n  <div class=\"container\">\n    <h3>Create Survey</h3>\n    <div class=\"row\">\n      <div class=\"col-md-4 col-sm-4 col-xs-12\">\n        <div class=\"card\">\n          <h5 class=\"card-header\">Free</h5>\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">MCQ Survey Template</h5>\n            <p class=\"card-text\">Ask people about their experience base on Close-ended Questions.</p>\n            <a href=\"/Survey1\" class=\"btn btn-primary\"> C R E A T E</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-sm-4 col-xs-12\">\n          <div class=\"card\">\n            <h5 class=\"card-header\">Free</h5>\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Agree/Disagre Survey Template</h5>\n              <p class=\"card-text\">Ask people's opinion base on Quick poll Questions.</p>\n              <a href=\"#\" class=\"btn btn-primary\">C R E A T E</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-12\">\n            <div class=\"card special-card\">\n              <h5 class=\"card-header\">Featured</h5>\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Custom Survey Template</h5>\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n                <a href=\"#\" class=\"btn btn-primary\" >C R E A T E</a>\n              </div>\n            </div>\n          </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent() {
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
    };
    AdminDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__(/*! ./admin-dashboard.component.html */ "./src/app/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./admin-dashboard.component.css */ "./src/app/admin-dashboard/admin-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/products/products.component */ "./src/app/pages/products/products.component.ts");
/* harmony import */ var _pages_services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/services/services.component */ "./src/app/pages/services/services.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contacts/contact-list/contact-list.component */ "./src/app/contacts/contact-list/contact-list.component.ts");
/* harmony import */ var _contacts_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contacts/contact-details/contact-details.component */ "./src/app/contacts/contact-details/contact-details.component.ts");
/* harmony import */ var _contacts_contact_delete_contact_delete_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contacts/contact-delete/contact-delete.component */ "./src/app/contacts/contact-delete/contact-delete.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "./src/app/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _survey1_survey1_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./survey1/survey1.component */ "./src/app/survey1/survey1.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _take_survey_take_survey_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./take-survey/take-survey.component */ "./src/app/take-survey/take-survey.component.ts");
/* harmony import */ var _thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./thankyou/thankyou.component */ "./src/app/thankyou/thankyou.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");
/*
Project: Career-Portfolio-MEAN-STACK
Name: Dipeshpuri Goswami
Id: 300984229
Date 29, March 2019
*/

// Modules


// Components



















var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { title: 'Home' } },
    { path: 'takesurvey', component: _take_survey_take_survey_component__WEBPACK_IMPORTED_MODULE_19__["TakeSurveyComponent"], data: { title: 'Take Survey' } },
    { path: 'takesurvey/:id', component: _take_survey_take_survey_component__WEBPACK_IMPORTED_MODULE_19__["TakeSurveyComponent"], data: { title: 'Take Survey' } },
    { path: 'thankyou', component: _thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_20__["ThankyouComponent"], data: { title: 'Thank you' } },
    { path: 'admin', component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["AdminDashboardComponent"], data: { title: 'admin' }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'UserProfile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_16__["UserProfileComponent"], data: { title: 'UserProfile' }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'Survey1', component: _survey1_survey1_component__WEBPACK_IMPORTED_MODULE_17__["Survey1Component"], data: { title: 'Survey1' }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'test', component: _test_test_component__WEBPACK_IMPORTED_MODULE_18__["TestComponent"], data: { title: 'Survey1' }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'report/:id', component: _report_report_component__WEBPACK_IMPORTED_MODULE_21__["ReportComponent"], data: { title: 'Survey Report' }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], data: { title: 'About' } },
    { path: 'products', component: _pages_products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"], data: { title: 'Products' } },
    { path: 'services', component: _pages_services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"], data: { title: 'Services' } },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], data: { title: 'Contact' } },
    { path: 'contact/contact-list', component: _contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_9__["ContactListComponent"], data: { title: 'Contact List' }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'contact/contact-list/add', component: _contacts_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_10__["ContactDetailsComponent"], data: { title: 'Add Todo' }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'contact/contact-list/edit/:id', component: _contacts_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_10__["ContactDetailsComponent"], data: { title: 'Edit Todo' }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'contact/contact-list/delete/:id', component: _contacts_contact_delete_contact_delete_component__WEBPACK_IMPORTED_MODULE_11__["ContactDeleteComponent"], data: { title: 'Add Todo' }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"], data: { title: 'Register' } },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], data: { title: 'Register' } },
    { path: 'logout', redirectTo: '/login', pathMatch: 'full' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /* \nProject: Career-Portfolio-MEAN-STACK    \nName: Dipeshpuri Goswami\nId: 300984229 \nDate 29, March 2019 \n*/ -->\n\n<app-header></app-header>\n<flash-messages></flash-messages>\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
Project: Career-Portfolio-MEAN-STACK
Name: Dipeshpuri Goswami
Id: 300984229
Date 29, March 2019
*/


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Dipesh Career-Portfolio-MEAN-STACK ';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/*! exports provided: jwtTokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtTokenGetter", function() { return jwtTokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _partials_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./partials/header/header.component */ "./src/app/partials/header/header.component.ts");
/* harmony import */ var _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./partials/footer/footer.component */ "./src/app/partials/footer/footer.component.ts");
/* harmony import */ var _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/products/products.component */ "./src/app/pages/products/products.component.ts");
/* harmony import */ var _pages_services_services_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/services/services.component */ "./src/app/pages/services/services.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contacts/contact-list/contact-list.component */ "./src/app/contacts/contact-list/contact-list.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _contacts_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contacts/contact-details/contact-details.component */ "./src/app/contacts/contact-details/contact-details.component.ts");
/* harmony import */ var _contacts_contact_delete_contact_delete_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./contacts/contact-delete/contact-delete.component */ "./src/app/contacts/contact-delete/contact-delete.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "./src/app/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _survey1_survey1_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./survey1/survey1.component */ "./src/app/survey1/survey1.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _take_survey_take_survey_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./take-survey/take-survey.component */ "./src/app/take-survey/take-survey.component.ts");
/* harmony import */ var _thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./thankyou/thankyou.component */ "./src/app/thankyou/thankyou.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");
/*
Project: Career-Portfolio-MEAN-STACK
Name: Dipeshpuri Goswami
Id: 300984229
Date 29, March 2019
*/

// Modules





// Components















// import { SurveyComponent } from './test/survey.component';
// import { SurveyCreatorComponent } from './test/survey.creator.component';
// Services


// Route Guards








function jwtTokenGetter() {
    return localStorage.getItem('id_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _partials_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_9__["BasePageComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _pages_products_products_component__WEBPACK_IMPORTED_MODULE_12__["ProductsComponent"],
                _pages_services_services_component__WEBPACK_IMPORTED_MODULE_13__["ServicesComponent"],
                _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
                _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"],
                _contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_16__["ContactListComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _contacts_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_19__["ContactDetailsComponent"],
                _contacts_contact_delete_contact_delete_component__WEBPACK_IMPORTED_MODULE_20__["ContactDeleteComponent"],
                _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["AdminDashboardComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_25__["UserProfileComponent"],
                _survey1_survey1_component__WEBPACK_IMPORTED_MODULE_26__["Survey1Component"],
                //  SurveyComponent,
                // SurveyCreatorComponent,
                _test_test_component__WEBPACK_IMPORTED_MODULE_27__["TestComponent"],
                _take_survey_take_survey_component__WEBPACK_IMPORTED_MODULE_28__["TakeSurveyComponent"],
                _thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_29__["ThankyouComponent"],
                _report_report_component__WEBPACK_IMPORTED_MODULE_30__["ReportComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_21__["FlashMessagesModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_22__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: jwtTokenGetter
                    }
                })
            ],
            providers: [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_21__["FlashMessagesService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contacts/contact-delete/contact-delete.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/contacts/contact-delete/contact-delete.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3QtZGVsZXRlL2NvbnRhY3QtZGVsZXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/contacts/contact-delete/contact-delete.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/contacts/contact-delete/contact-delete.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contacts/contact-delete/contact-delete.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/contacts/contact-delete/contact-delete.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContactDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDeleteComponent", function() { return ContactDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contact_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/contact-list.service */ "./src/app/services/contact-list.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/contact */ "./src/app/models/contact.ts");






var ContactDeleteComponent = /** @class */ (function () {
    function ContactDeleteComponent(activatedRoute, flashMessage, contactListService, router) {
        this.activatedRoute = activatedRoute;
        this.flashMessage = flashMessage;
        this.contactListService = contactListService;
        this.router = router;
    }
    ContactDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.activatedRoute.snapshot.data.title;
        this.contact = new _models_contact__WEBPACK_IMPORTED_MODULE_5__["Contact"]();
        this.activatedRoute.params.subscribe(function (params) {
            _this.contact._id = params.id;
        });
        this.deleteContact(this.contact);
    };
    ContactDeleteComponent.prototype.deleteContact = function (contact) {
        var _this = this;
        this.contactListService.deleteContact(contact).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-warning', timeOut: 3000 });
                _this.router.navigate(['/contact/contact-list']);
            }
            else {
                _this.flashMessage.show('Delete ToDo Failed', { cssClass: 'alert-danger', timeOut: 3000 });
                _this.router.navigate(['/contact/contact-list']);
            }
        });
    };
    ContactDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-delete',
            template: __webpack_require__(/*! ./contact-delete.component.html */ "./src/app/contacts/contact-delete/contact-delete.component.html"),
            styles: [__webpack_require__(/*! ./contact-delete.component.css */ "./src/app/contacts/contact-delete/contact-delete.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_contact_list_service__WEBPACK_IMPORTED_MODULE_2__["ContactListService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ContactDeleteComponent);
    return ContactDeleteComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contact-details/contact-details.component.css":
/*!************************************************************************!*\
  !*** ./src/app/contacts/contact-details/contact-details.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".onoffswitch {\n    position: relative; width: 90px;\n    -webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;\n}\n.onoffswitch-checkbox {\n    display: none;\n}\n.onoffswitch-label {\n    display: block; overflow: hidden; cursor: pointer;\n    border: 2px solid #999999; border-radius: 20px;\n}\n.onoffswitch-inner {\n    display: block; width: 200%; margin-left: -100%;\n    transition: margin 0.3s ease-in 0s;\n}\n.onoffswitch-inner:before, .onoffswitch-inner:after {\n    display: block; float: left; width: 50%; height: 30px; padding: 0; line-height: 30px;\n    font-size: 14px; color: white; font-family: Trebuchet, Arial, sans-serif; font-weight: bold;\n    box-sizing: border-box;\n}\n.onoffswitch-inner:before {\n    content: \"Active\";\n    padding-left: 10px;\n    background-color: #34A7C1; color: #FFFFFF;\n}\n.onoffswitch-inner:after {\n    content: \"Draft\";\n    padding-right: 10px;\n    background-color: #EEEEEE; color: #999999;\n    text-align: right;\n}\n.onoffswitch-switch {\n    display: block; width: 18px; margin: 6px;\n    background: #FFFFFF;\n    position: absolute; top: 0; bottom: 0;\n    right: 56px;\n    border: 2px solid #999999; border-radius: 20px;\n    transition: all 0.3s ease-in 0s; \n}\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\n    margin-left: 0;\n}\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\n    right: 0px; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvY29udGFjdC1kZXRhaWxzL2NvbnRhY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCLEVBQUUsV0FBVztJQUMvQix3QkFBd0IsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUI7QUFDMUU7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlO0lBQ2pELHlCQUF5QixFQUFFLG1CQUFtQjtBQUNsRDtBQUNBO0lBQ0ksY0FBYyxFQUFFLFdBQVcsRUFBRSxrQkFBa0I7SUFDL0Msa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxjQUFjLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLGlCQUFpQjtJQUNwRixlQUFlLEVBQUUsWUFBWSxFQUFFLHlDQUF5QyxFQUFFLGlCQUFpQjtJQUMzRixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCLEVBQUUsY0FBYztBQUM3QztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix5QkFBeUIsRUFBRSxjQUFjO0lBQ3pDLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYyxFQUFFLFdBQVcsRUFBRSxXQUFXO0lBQ3hDLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBRSxNQUFNLEVBQUUsU0FBUztJQUNyQyxXQUFXO0lBQ1gseUJBQXlCLEVBQUUsbUJBQW1CO0lBQzlDLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdHMvY29udGFjdC1kZXRhaWxzL2NvbnRhY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9ub2Zmc3dpdGNoIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IHdpZHRoOiA5MHB4O1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTsgLW1vei11c2VyLXNlbGVjdDpub25lOyAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4ub25vZmZzd2l0Y2gtY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4ub25vZmZzd2l0Y2gtbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrOyBvdmVyZmxvdzogaGlkZGVuOyBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzk5OTk5OTsgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5vbm9mZnN3aXRjaC1pbm5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAyMDAlOyBtYXJnaW4tbGVmdDogLTEwMCU7XG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIDAuM3MgZWFzZS1pbiAwcztcbn1cbi5vbm9mZnN3aXRjaC1pbm5lcjpiZWZvcmUsIC5vbm9mZnN3aXRjaC1pbm5lcjphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7IGZsb2F0OiBsZWZ0OyB3aWR0aDogNTAlOyBoZWlnaHQ6IDMwcHg7IHBhZGRpbmc6IDA7IGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDsgY29sb3I6IHdoaXRlOyBmb250LWZhbWlseTogVHJlYnVjaGV0LCBBcmlhbCwgc2Fucy1zZXJpZjsgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5vbm9mZnN3aXRjaC1pbm5lcjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiQWN0aXZlXCI7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNEE3QzE7IGNvbG9yOiAjRkZGRkZGO1xufVxuLm9ub2Zmc3dpdGNoLWlubmVyOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIkRyYWZ0XCI7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFOyBjb2xvcjogIzk5OTk5OTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5vbm9mZnN3aXRjaC1zd2l0Y2gge1xuICAgIGRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMThweDsgbWFyZ2luOiA2cHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiA1NnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5OTk5OTk7IGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbiAwczsgXG59XG4ub25vZmZzd2l0Y2gtY2hlY2tib3g6Y2hlY2tlZCArIC5vbm9mZnN3aXRjaC1sYWJlbCAub25vZmZzd2l0Y2gtaW5uZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xufVxuLm9ub2Zmc3dpdGNoLWNoZWNrYm94OmNoZWNrZWQgKyAub25vZmZzd2l0Y2gtbGFiZWwgLm9ub2Zmc3dpdGNoLXN3aXRjaCB7XG4gICAgcmlnaHQ6IDBweDsgXG59Il19 */"

/***/ }),

/***/ "./src/app/contacts/contact-details/contact-details.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/contacts/contact-details/contact-details.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content for the Details Page -->\n\n\n\n<div class=\"container\">\n      <br />\n   \n      <div class=\"text-center\">\n         <h1>{{ title }}</h1>\n      </div>\n      \n      <div class=\"card\">\n   \n         <div class=\"card-body\">\n            <div class=\"form-group\">\n               <label for=\"LastNameTextField\">Survey Title</label>\n               <input type=\"text\" class=\"form-control\" id=\"LastNameTextField\" placeholder=\"Enter Description\"\n                  name=\"lastName\" [(ngModel)]=\"contact.title\" value=\"{{ contact.title }}\" required>\n            </div>\n            <div class=\"form-group\">\n               <label for=\"LastNameTextField\">Survey Description</label>\n               <input type=\"text\" class=\"form-control\" id=\"LastNameTextField\" placeholder=\"Enter Description\"\n                  name=\"lastName\" [(ngModel)]=\"contact.desc\" value=\"{{ contact.desc }}\" required>\n            </div>\n         </div>\n   \n   \n      </div>\n      <br />\n   \n      <div class=\"row\">\n         <div class=\"col-md-offset-3 col-md-8\">\n            <form class=\"form\" (submit)=\"onDetailsPageSubmit()\">\n   \n               <!-- Question 1 starts-->\n               <div class=\"card\">\n                  <div class=\"card-header\">\n   \n                     <div class=\"input-group mb-3\">\n                        <div class=\"input-group-prepend\">\n                           <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">1)</span>\n                        </div>\n                        <input class=\"form-control\" aria-label=\"Sizing example input\"\n                           aria-describedby=\"inputGroup-sizing-default\" type=\"text\" name=\"question\" id=\"Q1TextField\"\n                           placeholder=\"Enter Question Here \" name=\"Q1TextField\" [(ngModel)]=\"contact.Q1\"\n                           value=\"{{ contact.Q1 }}\">\n                     </div>\n   \n                  </div>\n   \n                  <div class=\"row questionrow\">\n                     <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"card-body\">\n                           <div class=\"row\">\n                              <div class=\"col-md-8\">\n                                 <div class=\"input-group\">\n                                    <input type=\"text\" class=\"form-control\" aria-label=\"Text input with radio button\"\n                                       id=\"Q1O1TextField\" placeholder=\"Enter Question Here \" name=\"Q1O1TextField\"\n                                       [(ngModel)]=\"contact.Q1O1\" value=\"{{ contact.Q1O1 }}\">\n                                 </div>\n                                 <div class=\"input-group\">\n                                  \n                                    <input type=\"text\" class=\"form-control\" aria-label=\"Text input with radio button\"\n                                       id=\"Q1O2TextField\" placeholder=\"Enter Question Here \" name=\"Q1O2TextField\"\n                                       [(ngModel)]=\"contact.Q1O2\" value=\"{{ contact.Q1O2 }}\">\n                                 </div>\n                              </div>\n                              <div class=\"col-md-8\">\n                                 <div class=\"input-group\">\n                                    <input type=\"text\" class=\"form-control\" aria-label=\"Text input with radio button\"\n                                       id=\"Q1O3TextField\" placeholder=\"Enter Question Here \" name=\"Q1O3TextField\"\n                                       [(ngModel)]=\"contact.Q1O3\" value=\"{{ contact.Q1O3 }}\">\n                                 </div>\n                                 <div class=\"input-group\">\n                                    <input type=\"text\" class=\"form-control\" aria-label=\"Text input with radio button\"\n                                       id=\"Q1O4TextField\" placeholder=\"Enter Question Here \" name=\"Q1O4TextField\"\n                                       [(ngModel)]=\"contact.Q1O4\" value=\"{{ contact.Q1O4 }}\">\n                                 </div>\n                              </div>\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n               </div>\n               <!-- Question 1 Ends-->\n   \n               <br />\n               <!-- Question 2 starts-->\n               <div class=\"card\">\n                  <div class=\"card-header\">\n   \n                     <div class=\"input-group mb-3\">\n                        <div class=\"input-group-prepend\">\n                           <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">2)</span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" aria-label=\"Sizing example input\"\n                           aria-describedby=\"inputGroup-sizing-default\" name=\"question\" id=\"Q2TextField\"\n                           placeholder=\"Enter Question Here \" name=\"Q2TextField\" [(ngModel)]=\"contact.Q2\"\n                           value=\"{{ contact.Q2 }}\">\n                     </div>\n                  </div>\n                  <div class=\"row questionrow\">\n                     <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"card-body\">\n                           <div class=\"row\">\n                              <div class=\"col-md-8\">\n                                 <div class=\"input-group\">\n                            \n                                    <input type=\"text\" class=\"form-control\" aria-label=\"Text input with radio button\"\n                                       id=\"Q2O1TextField\" placeholder=\"Enter Question Here \" name=\"Q2O1TextField\"\n                                       [(ngModel)]=\"contact.Q2O1\" value=\"{{ contact.Q2O1 }}\">\n                                 </div>\n                                 <div class=\"input-group\">\n                             \n                                    <input type=\"text\" class=\"form-control\" aria-label=\"Text input with radio button\"\n                                       id=\"Q2OTextField\" placeholder=\"Enter Question Here \" name=\"Q2O2TextField\"\n                                       [(ngModel)]=\"contact.Q2O2\" value=\"{{ contact.Q2O2 }}\">\n                                 </div>\n                              </div>\n                              <div class=\"col-md-8\">\n                                 <div class=\"input-group\">\n                                \n                                    <input type=\"text\" class=\"form-control\" aria-label=\"Text input with radio button\"\n                                       id=\"Q2O3TextField\" placeholder=\"Enter Question Here \" name=\"Q2O3TextField\"\n                                       [(ngModel)]=\"contact.Q2O3\" value=\"{{ contact.Q2O3 }}\">\n                                 </div>\n                                 <div class=\"input-group\">\n                             \n                                    <input type=\"text\" class=\"form-control\" aria-label=\"Text input with radio button\"\n                                       id=\"Q2O4TextField\" placeholder=\"Enter Question Here \" name=\"Q2O4TextField\"\n                                       [(ngModel)]=\"contact.Q2O4\" value=\"{{ contact.Q2O4 }}\">\n                                 </div>\n                              </div>\n                           </div>\n   \n   \n                        </div>\n                     </div>\n                  </div>\n               </div>\n               <!-- Question 2 Ends-->\n               <br />\n   \n               <!-- Question 3 starts-->\n               <div class=\"card\">\n                  <div class=\"card-header\">\n   \n                     <div class=\"input-group mb-3\">\n                        <div class=\"input-group-prepend\">\n                           <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">3)</span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" aria-label=\"Sizing example input\"\n                           aria-describedby=\"inputGroup-sizing-default\" name=\"question\" id=\"Q3TextField\"\n                           placeholder=\"Enter Question Here \" name=\"Q3TextField\" [(ngModel)]=\"contact.Q3\"\n                           value=\"{{ contact.Q3 }}\">\n                     </div>\n                  </div>\n                  <div class=\"row questionrow\">\n                     <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                        <div class=\"card-body\">\n   \n                           <div class=\"row\">\n                              <div class=\"col-md-8\">\n                                 <div class=\"input-group\">\n                         \n                                    <input type=\"text\" class=\"form-control\" aria-label=\"Text input with radio button\"\n                                       id=\"Q3O1TextField\" placeholder=\"Enter Question Here \" name=\"Q3O1TextField\"\n                                       [(ngModel)]=\"contact.Q3O1\" value=\"{{ contact.Q3O1 }}\">\n                                 </div>\n                                 <div class=\"input-group\">\n                                    <input type=\"text\" class=\"form-control\" aria-label=\"Text input with radio button\"\n                                       id=\"Q3O2TextField\" placeholder=\"Enter Question Here \" name=\"Q3O2TextField\"\n                                       [(ngModel)]=\"contact.Q3O2\" value=\"{{ contact.Q3O2 }}\">\n                                 </div>\n                              </div>\n                              <div class=\"col-md-8\">\n                                 <div class=\"input-group\">\n                           \n                                    <input type=\"text\" class=\"form-control\" aria-label=\"Text input with radio button\"\n                                       id=\"Q3O3TextField\" placeholder=\"Enter Question Here \" name=\"Q3O3TextField\"\n                                       [(ngModel)]=\"contact.Q3O3\" value=\"{{ contact.Q3O3 }}\">\n                                 </div>\n                                 <div class=\"input-group\">\n                           \n                                    <input type=\"text\" class=\"form-control\" aria-label=\"Text input with radio button\"\n                                       id=\"Q3O4TextField\" placeholder=\"Enter Question Here \" name=\"Q3O4TextField\"\n                                       [(ngModel)]=\"contact.Q3O4\" value=\"{{ contact.Q3O4 }}\">\n                                 </div>\n                              </div>\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n               </div>\n               <!-- Question 3 Ends-->\n               <br />\n   \n               <div *ngIf=\"status\" class=\"row\">\n                  <div class=\"col-md-4\">\n                     Status :\n                     <div class=\"onoffswitch\">\n                        <input type=\"checkbox\" name=\"onoffswitch\" class=\"onoffswitch-checkbox\" id=\"myonoffswitch\" checked\n                           [(ngModel)]=\"contact.status\" value=\"{{ contact.status }}\">\n                        <label class=\"onoffswitch-label\" for=\"myonoffswitch\">\n                           <span class=\"onoffswitch-inner\"></span>\n                           <span class=\"onoffswitch-switch\"></span>\n                        </label>\n                     </div>\n                  </div>\n               </div>\n               <button type=\"submit\" class=\"btn btn-outline-primary\">\n                  <i class=\"fas fa-edit\"></i> {{ title }}</button>\n               &nbsp;&nbsp;&nbsp;\n               <a routerLink=\"/contact/contact-list\" class=\"btn btn-outline-dark\">\n                  <i class=\"fas fa-undo\"></i> Cancel</a>\n               <br /><br />\n   \n            </form>\n         </div>\n      </div>\n   \n   \n   </div>"

/***/ }),

/***/ "./src/app/contacts/contact-details/contact-details.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/contacts/contact-details/contact-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: ContactDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailsComponent", function() { return ContactDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contact_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/contact-list.service */ "./src/app/services/contact-list.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/contact */ "./src/app/models/contact.ts");






var ContactDetailsComponent = /** @class */ (function () {
    function ContactDetailsComponent(activatedRoute, flashMessage, contactListService, router) {
        this.activatedRoute = activatedRoute;
        this.flashMessage = flashMessage;
        this.contactListService = contactListService;
        this.router = router;
        this.status = false;
    }
    ContactDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.activatedRoute.snapshot.data.title;
        this.contact = new _models_contact__WEBPACK_IMPORTED_MODULE_5__["Contact"]();
        this.activatedRoute.params.subscribe(function (params) {
            _this.contact._id = params.id;
        });
        if (this.title === 'Edit Todo') {
            this.status = true;
            this.getContact(this.contact);
        }
    };
    ContactDetailsComponent.prototype.getContact = function (contact) {
        var _this = this;
        this.contactListService.getContact(contact).subscribe(function (data) {
            _this.contact = data.todo;
            // console.log("data recive -> ", this.contact);
        });
    };
    ContactDetailsComponent.prototype.onDetailsPageSubmit = function () {
        var _this = this;
        switch (this.title) {
            case 'Add Todo':
                // console.log("this.contact", this.contact)
                var k = JSON.parse(localStorage.getItem('user'));
                // console.log("dsd",k.id);
                // const contact = ({
                //   user_id :k.id,
                //   title : this.contact.title,
                //   questions: [{
                //       question: this.contact.Q1,
                //       o1: this.contact.O1,
                //       o2: this.contact.O2,
                //       o3: this.contact.O3,
                //       o4: this.contact.O4,
                //   }],
                //   status: 1
                // });
                // console.log("this.contact AFTER ", contact);
                this.contactListService.addContact(this.contact).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeOut: 3000 });
                        _this.router.navigate(['/contact/contact-list']);
                    }
                    else {
                        _this.flashMessage.show('Add Todo Failed', { cssClass: 'alert-danger', timeOut: 3000 });
                        _this.router.navigate(['/contact/contact-list']);
                    }
                });
                break;
            case 'Edit Todo':
                // console.log("Edited doc -> ", this.contact);
                this.contactListService.editContact(this.contact).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeOut: 3000 });
                        _this.router.navigate(['/contact/contact-list']);
                    }
                    else {
                        _this.flashMessage.show('Edit Todo Failed', { cssClass: 'alert-danger', timeOut: 3000 });
                        _this.router.navigate(['/contact/contact-list']);
                    }
                });
                break;
        }
    };
    ContactDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-details',
            template: __webpack_require__(/*! ./contact-details.component.html */ "./src/app/contacts/contact-details/contact-details.component.html"),
            styles: [__webpack_require__(/*! ./contact-details.component.css */ "./src/app/contacts/contact-details/contact-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_contact_list_service__WEBPACK_IMPORTED_MODULE_2__["ContactListService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ContactDetailsComponent);
    return ContactDetailsComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/contacts/contact-list/contact-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3QtbGlzdC9jb250YWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/contacts/contact-list/contact-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-offset-3 col-md-6\">\n          <h1>TODO List</h1>\n          <a class=\"btn btn-primary\" routerLink=\"/contact/contact-list/add\" role=\"button\">\n          <i class=\"fas fa-plus-circle\"></i> Add a Task</a>\n          <br>\n          <table class=\"table table-bordered table-striped table-hover\">\n              <!-- Header Row-->\n              <tr>\n                  <th class=\"text-center\">Title</th>\n                  <th class=\"text-center\">Description</th>\n                  <th class=\"text-center\">Status</th>\n                  <th class=\"text-center\"></th>\n                  <th class=\"text-center\"></th>\n                  <th class=\"text-center\"></th>\n              </tr>\n\n              <!-- Repeatable Template Row -->\n                  <tr *ngFor=\"let contact of contacts\">\n                      <td class=\"text-center\">{{ contact.title }}</td>\n                      <td class=\"text-center\">{{ contact.desc }}</td>\n                      <td class=\"text-center\">{{ contact.status }}</td>\n\n                      <td class=\"text-center\">\n                      <a routerLink=\"/contact/contact-list/edit/{{ contact._id }}\"\n                          class=\"btn btn-primary\"><i class=\"fas fa-pencil-alt\"></i> Edit</a>\n                      </td>\n\n                      <td class=\"text-center\">\n                              <a routerLink=\"/contact/contact-list/delete/{{ contact._id }}\" (click)=\"onDeleteClick()\"\n                                  class=\"btn btn-danger\"><i class=\"fas fa-trash-alt\"></i> Delete</a>\n                              </td>\n\n                              <td class=\"text-center\">\n                                    <a routerLink=\"/report/{{ contact._id }}\" (click)=\"onStaticsClick()\"\n                                        class=\"btn btn-danger\"><i class=\"fas fa-trash-alt\"></i> Statics</a>\n                                    </td>\n                  </tr>\n          </table>\n\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/contacts/contact-list/contact-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contact_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/contact-list.service */ "./src/app/services/contact-list.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


// import { ContactListService } from 'src/app/services/contact-list.service';



var ContactListComponent = /** @class */ (function () {
    function ContactListComponent(contactListService, flashMessage, router) {
        this.contactListService = contactListService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ContactListComponent.prototype.ngOnInit = function () {
        this.contacts = new Array();
        this.displayContactList();
    };
    ContactListComponent.prototype.onDeleteClick = function () {
        if (!confirm('Are You Sure?')) {
            this.router.navigate(['/contact/contact-list']);
        }
    };
    ContactListComponent.prototype.displayContactList = function () {
        var _this = this;
        this.contactListService.getList().subscribe(function (data) {
            if (data.success) {
                _this.contacts = data.SurveyList;
            }
            else {
                _this.flashMessage.show('User must be logged-in', { cssClass: 'alert-danger', timeOut: 3000 });
            }
        });
    };
    ContactListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-list',
            template: __webpack_require__(/*! ./contact-list.component.html */ "./src/app/contacts/contact-list/contact-list.component.html"),
            styles: [__webpack_require__(/*! ./contact-list.component.css */ "./src/app/contacts/contact-list/contact-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_contact_list_service__WEBPACK_IMPORTED_MODULE_2__["ContactListService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ContactListComponent);
    return ContactListComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron{\n    padding: 20px;\n}\n.col-xs-12{\n    padding-bottom: 20px;\n}\n.card{\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbntcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuLmNvbC14cy0xMntcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5jYXJke1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Start -->\n<div class=\"wrapper\">\n  <div class=\"jumbotron jumbotron-fluid\">\n      <div class=\"row\">\n     \n\n\n\n        <div class=\"col-md-4 col-xs-12\" *ngFor=\"let contact of contacts\">\n            <div class=\"card \">\n                <div class=\"card-header\">\n                  Featured\n                </div>\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">{{ contact.title }}</h5>\n                    <p class=\"card-text\">{{ contact.desc }}</p>\n                    <!-- <a href=\"#\" class=\"btn btn-primary\">Take The Survey</a> -->\n                    <a routerLink=\"/takesurvey/{{ contact._id }}\"\n                    class=\"btn btn-primary\"><i class=\"fas fa-poll\"></i> Take The Survey</a>\n                </div>\n              </div>\n        </div>\n      </div>\n  </div>\n</div>\n<!-- Content End -->\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/survey.service */ "./src/app/services/survey.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


// import { ContactListService } from 'src/app/services/contact-list.service';



var HomeComponent = /** @class */ (function () {
    function HomeComponent(surveyService, flashMessage, router) {
        this.surveyService = surveyService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.contacts = new Array();
        this.displayContactList();
    };
    HomeComponent.prototype.displayContactList = function () {
        var _this = this;
        this.surveyService.getActiveSurvey().subscribe(function (data) {
            if (data.success) {
                _this.contacts = data.SurveyList;
            }
            else {
                _this.flashMessage.show('User must be logged-in', { cssClass: 'alert-danger', timeOut: 3000 });
            }
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/models/contact.ts":
/*!***********************************!*\
  !*** ./src/app/models/contact.ts ***!
  \***********************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
var Contact = /** @class */ (function () {
    function Contact() {
    }
    return Contact;
}());



/***/ }),

/***/ "./src/app/models/surveyResponse.ts":
/*!******************************************!*\
  !*** ./src/app/models/surveyResponse.ts ***!
  \******************************************/
/*! exports provided: surveyResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "surveyResponse", function() { return surveyResponse; });
var surveyResponse = /** @class */ (function () {
    function surveyResponse() {
    }
    return surveyResponse;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/about/about.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \nProject: Career-Portfolio-MEAN-STACK    \nName: Dipeshpuri Goswami\nId: 300984229 \nDate 29, March 2019 \n-->\n\n<!-- Content Start -->\n<div class=\"wrapper\">\n  <div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"main\">\n      <h1 class=\"display-5\">About me,</h1>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Dipesh Goswami</h5>\n              <p>\n                I am currently enrolled in the Advanced Software Engineering\n                Technology program at Centennial College and also has earned a\n                <strong> Master Degree </strong> in computer application from\n                Pune University in India. <br />\n                I am an engineer and a\n                <strong>front-end development</strong> specialist with an eye\n                for aesthetic detail. <br />\n                I recently started working as a\n                <strong>Student Researcher</strong> at Centennial College. I\n                worked on multiple projects at\n                <a href=\"https://wimtach.centennialcollege.ca/student-dipesh/\"\n                  ><b>WIMTACH</b></a\n                >\n                such as <strong>Winters Tools-To-Go</strong>,<strong\n                  >BlueSalt Media</strong\n                >\n                and <strong>CareerBuddy</strong> in which he participated in the\n                <strong\n                  >user interface (UI) implementation, database designing, web\n                  services, and front-end functionality designing</strong\n                >.\n              </p>\n              <br />\n              <h3>My Skills</h3>\n              <ul>\n                <li>Angular 6, Java and PHP</li>\n                <li>Ionic Framework</li>\n                <li>Javascript/Jquery</li>\n                <li>HTML, CSS / Bootstrap</li>\n                <li>MySql,Firebase and Oracle</li>\n              </ul>\n              <br>\n              <p>\n              \n              <a href=\"assets/Resume_DipeshpuriGoswami.pdf\" download><h2>HIRE ME..</h2></a>\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <img\n            src=\"assets/profile-picture.jpg\"\n            alt=\"Dipeshpuri Goswami\"\n            width=\"100%\"\n            height=\"100%\"\n          />\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Content End -->\n\n"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AboutComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AboutComponent, _super);
    function AboutComponent(route) {
        return _super.call(this, route) || this;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AboutComponent);
    return AboutComponent;
}(_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/pages/contact/contact.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n    padding: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgICBwYWRkaW5nOiAxMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \nProject: Career-Portfolio-MEAN-STACK    \nName: Dipeshpuri Goswami\nId: 300984229 \nDate 29, March 2019 \n-->\n\n<div *ngIf=\"isLoggedIn()\" class=\"container\">\n  <br>\n  <div class=\"row\">\n    <div class=\"col col-md-5\">\n      <h1 class=\"display-5\">Admin Dashboard</h1>\n    </div>\n    <!-- <div class=\"col-md-7\">\n      <div class=\"card\">\n        <h5 class=\"card-header alert-success\">Secure Area For Admin</h5>\n        <div class=\"card-body\">\n          <a routerLink=\"contact-list\" class=\"btn btn-primary\"><i class=\"fas fa-users fa-lg\"></i> Todo List</a>\n        </div>\n      </div>\n    </div> -->\n  </div>\n</div>\n\n<!-- <div class=\"wrapper\">\n  <div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"main\">\n      <h1 *ngIf=\"!isLoggedIn()\" class=\"display-5\">Contact</h1>\n      <div class=\"row\">\n        <div class=\"col-md-5\">\n          <div class=\"card\">\n\n            <div class=\"cord_wrapper\">\n              <div class=\"contact_img\" style=\"float:left;\">\n                <img src=\"assets/portfolio/contact1.png\" class=\"img img-resonsive\" style=\"height:50px; width:50px\">\n              </div>\n              <div class=\"contact_title\" style=\"display:inline;\">\n                <strong>START A PROJECT</strong>\n                <h3><strong style=\"color: rgb(68, 52, 46);\">911@DipsGoswami.in</strong></h3>\n              </div>\n            </div>\n\n            <div class=\"cord_wrapper\">\n              <div class=\"contact_img\" style=\"float:left;\">\n                <img src=\"assets/portfolio/contact2.png\" class=\"img img-resonsive\" style=\"height:50px; width:50px\">\n              </div>\n              <div class=\"contact_title\" style=\"display:inline;\">\n                <strong>CONTACT ME</strong>\n                <h3><strong style=\"color: rgb(68, 52, 46);\">+1 6 4 7 8 0 3 2 0 6 0</strong></h3>\n              </div>\n            </div>\n\n            <div class=\"cord_wrapper\">\n\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-7\">\n          <form method=\"POST\" action=\"/contact/postcontact\" accept-charset=\"utf-8\">\n            <div class=\"modal-body\" style=\"padding: 5px;\">\n              <div class=\"row\">\n                <div class=\"col-lg-6 col-md-6 col-sm-6\" style=\"padding-bottom: 10px;\">\n                  <input class=\"form-control\" name=\"firstname\" placeholder=\"Firstname\" type=\"text\" required autofocus />\n                </div>\n                <div class=\"col-lg-6 col-md-6 col-sm-6\" style=\"padding-bottom: 10px;\">\n                  <input class=\"form-control\" name=\"lastname\" placeholder=\"Lastname\" type=\"text\" required />\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-12 col-md-12 col-sm-12\" style=\"padding-bottom: 10px;\">\n                  <input class=\"form-control\" name=\"email\" placeholder=\"E-mail\" type=\"text\" required />\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-12 col-md-12 col-sm-12\" style=\"padding-bottom: 10px;\">\n                  <input class=\"form-control\" name=\"subject\" placeholder=\"Subject\" type=\"text\" required />\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                  <textarea style=\"resize:vertical;\" class=\"form-control\" placeholder=\"Message...\" rows=\"6\"\n                    name=\"comment\" required></textarea>\n                </div>\n              </div>\n            </div>\n            <div class=\"panel-footer\" style=\"margin-bottom:-14px;\">\n              <input type=\"submit\" class=\"btn btn-md btn-success\" value=\"Send\" />\n\n\n            </div>\n          </form>\n\n        </div>\n      </div>\n    </div>\n  </div> -->"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/*
Project: Career-Portfolio-MEAN-STACK
Name: Dipeshpuri Goswami
Id: 300984229
Date 29, March 2019
*/





var ContactComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContactComponent, _super);
    function ContactComponent(route, authService) {
        var _this = _super.call(this, route) || this;
        _this.authService = authService;
        return _this;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.isLoggedIn = function () {
        return this.authService.loggedIn();
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/pages/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ContactComponent);
    return ContactComponent;
}(_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_3__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group input {\n    height: auto;\n    border-radius: 2rem;\n    line-height: 2;\n}\n\n.form-group .btn {\n    font-size: 80%;\n    border-radius: 5rem;\n    letter-spacing: .1rem;\n    font-weight: bold;\n    padding: 1rem;\n    transition: all 0.2s;\n    margin-bottom: 10px;\n}\n\n/* body{\n  background: #007bff;\n  background: linear-gradient(to right, #0062E6, #33AEFF);\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2Qjs7QUFDQTs7O0dBR0ciLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXAgaW5wdXQge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyO1xufVxuXG4uZm9ybS1ncm91cCAuYnRuIHtcbiAgICBmb250LXNpemU6IDgwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4vKiBib2R5e1xuICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDYyRTYsICMzM0FFRkYpO1xufSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /* \nProject: Career-Portfolio-MEAN-STACK    \nName: Dipeshpuri Goswami\nId: 300984229 \nDate 29, March 2019 \n*/ -->\n\n\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n            <div class=\"card card-signin my-5\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title text-center\">Sign In</h5>\n                    <form autocomplete=\"off\" (submit)=\"onLoginSubmit()\">\n                        <fieldset class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.username\" name=\"username\"\n                                placeholder=\"Username\" id=\"username\" required autofocus autocomplete=\"off\">\n                        </fieldset>\n                        <fieldset class=\"form-group\">\n                            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" name=\"password\"\n                                placeholder=\"Password\" id=\"password\" required autocomplete=\"off\">\n                        </fieldset>\n                        <fieldset class=\"form-group text-right\">\n                            <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" value=\"Login\"\n                                type=\"submit\">Sign in</button>\n\n                            <a routerLink=\"/home\">\n\n                                <button class=\"btn btn-lg btn-warning btn-block text-uppercase\"\n                                    value=\"Cancel\">Cancel</button>\n                            </a>\n                            <hr class=\"my-4\">\n                            <a routerLink=\"/register\">\n                                <button class=\"btn btn-lg btn-info btn-block text-uppercase\" value=\"Register\"\n                                    type=\"submit\">Sign Up</button>\n                            </a>\n                        </fieldset>\n                    </form>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");
/*
Project: Career-Portfolio-MEAN-STACK
Name: Dipeshpuri Goswami
Id: 300984229
Date 29, March 2019
*/






var LoginComponent = /** @class */ (function () {
    function LoginComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.authService.authenticateUser(this.user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeOut: 3000 });
                _this.router.navigate(['/admin']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeOut: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /* \nProject: Career-Portfolio-MEAN-STACK    \nName: Dipeshpuri Goswami\nId: 300984229 \nDate 29, March 2019 \n*/ -->\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col col-md-12\">\n      <h1 class=\"display-2\"><strong>Error: 404</strong>-Page Not Found</h1>\n      <a routerLink=\"/home\" class=\"btn btn-primary btn-lg\"><i class=\"fas fa-undo-alt fa-lg\"></i> Take Me Home</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/pages/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/products/products.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/products/products.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/products/products.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/products/products.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \nProject: Career-Portfolio-MEAN-STACK    \nName: Dipeshpuri Goswami\nId: 300984229 \nDate 29, March 2019 \n-->\n\n<!-- Content Start -->\n<div class=\"wrapper project\">\n  <div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"main\">\n      <h1 class=\"display-5\">Projects, I Have Done</h1>\n      <!-- Row 1 Start -->\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"card\">\n            <h5 class=\"card-header\">Web Development</h5>\n            <div class=\"card-body\">\n              <p class=\"card-text\"></p>\n                  <img src=\"assets/portfolio/jb_thumnil_1.png\" alt=\"\">\n                  <h5 class=\"card-title\">JB Plate Depo</h5>\n               <h6>Online Construction Plate Rent & sell website with payment Integration and real time chat bot.</h6>\n              \n              <!-- <a href=\"projects/jbplatedepo\" class=\"btn btn-primary\">Learn More About it</a> -->\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-6\">\n                <div class=\"card\">\n                  <h5 class=\"card-header\">Web Application Development</h5>\n                  <div class=\"card-body\">\n                    <p class=\"card-text\"></p>\n                        <img src=\"assets/portfolio/razoo.png\" alt=\"\">\n                        <h5 class=\"card-title\">mightycause</h5>\n                        <h6>mightycause is the online fundraising software for empowering nonprofits, people, and the causes they believe in.</h6>\n                    \n                    <!-- <a href=\"projects/mightycause\" class=\"btn btn-primary\">Learn More About it</a> -->\n                  </div>\n                </div>\n              </div>\n      </div>\n      <!-- Row 1 End -->\n    </div>\n  </div>\n</div>\n<!-- Content End -->\n"

/***/ }),

/***/ "./src/app/pages/products/products.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/products/products.component.ts ***!
  \******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProductsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProductsComponent, _super);
    function ProductsComponent(route) {
        return _super.call(this, route) || this;
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/pages/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/pages/products/products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProductsComponent);
    return ProductsComponent;
}(_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/pages/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group input {\n    height: auto;\n    border-radius: 2rem;\n    line-height: 2;\n}\n\n.form-group .btn {\n    font-size: 80%;\n    border-radius: 5rem;\n    letter-spacing: .1rem;\n    font-weight: bold;\n    padding: 1rem;\n    transition: all 0.2s;\n    margin-bottom: 10px;\n}\n\n/* body{\n  background: #007bff;\n  background: linear-gradient(to right, #0062E6, #33AEFF);\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2Qjs7QUFDQTs7O0dBR0ciLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXAgaW5wdXQge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyO1xufVxuXG4uZm9ybS1ncm91cCAuYnRuIHtcbiAgICBmb250LXNpemU6IDgwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4vKiBib2R5e1xuICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDYyRTYsICMzM0FFRkYpO1xufSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /* \nProject: Career-Portfolio-MEAN-STACK    \nName: Dipeshpuri Goswami\nId: 300984229 \nDate 29, March 2019 \n*/ -->\n\n\n<div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n                <div class=\"card card-signin my-5\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title text-center\">Sign Up</h5>\n                        <form autocomplete=\"off\" (submit)=\"onRegisterSubmit()\">\n                                <fieldset class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\"\n                                    [(ngModel)]=\"user.username\"\n                                    name=\"username\" placeholder=\"Enter Username\"\n                                    id=\"username\" required autocomplete=\"off\">\n                                </fieldset>\n                                <fieldset class=\"form-group\">\n                                    <input type=\"password\" class=\"form-control\"\n                                    [(ngModel)]=\"user.password\"\n                                    name=\"password\" placeholder=\"Enter Password\"\n                                    id=\"password\" required autocomplete=\"off\">\n                                </fieldset>\n                                <fieldset class=\"form-group\">\n                                    <input type=\"email\" class=\"form-control\"\n                                    [(ngModel)]=\"user.email\"\n                                    name=\"email\" placeholder=\"Enter Email\"\n                                    id=\"email\" required autocomplete=\"off\">\n                                </fieldset>\n                                <fieldset class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\"\n                                    [(ngModel)]=\"user.displayName\"\n                                    name=\"displayName\" placeholder=\"Enter Display Name\"\n                                    id=\"displayName\" required autocomplete=\"off\">\n                                </fieldset>\n                                <fieldset class=\"form-group text-right\">\n                                   <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" value=\"Register\"\n                                    type=\"submit\">Sign Up</button>\n    \n                                <a routerLink=\"/home\">\n                                    <button class=\"btn btn-lg btn-warning btn-block text-uppercase\"\n                                        value=\"Cancel\">Cancel</button>\n                                </a>\n                                </fieldset>\n                            </form>\n    \n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    "

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");
/*
Project: Career-Portfolio-MEAN-STACK
Name: Dipeshpuri Goswami
Id: 300984229
Date 29, March 2019
*/






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.authService.registerUser(this.user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and may log in', { cssClass: 'alert-success', timeOut: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('A registration Error Occurred', { cssClass: 'alert-danger', timeOut: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/pages/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/services/services.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/services/services.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".svg-inline--fa{\n    font-size: 30px !important;\n    float: left !important;\n    font-weight: 900 !important;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsMkJBQTJCO0VBQzdCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdmctaW5saW5lLS1mYXtcbiAgICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDAgIWltcG9ydGFudDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/services/services.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/services/services.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \nProject: Career-Portfolio-MEAN-STACK    \nName: Dipeshpuri Goswami\nId: 300984229 \nDate 29, March 2019 \n-->\n\n<!-- Content Start -->\n<div class=\"wrapper\">\n  <div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"main\">\n      <h1 class=\"display-5\">Services, I Provide</h1>\n      <!-- Row 1 Start -->\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <i class=\"fa fa-globe\"></i>\n              <div class=\"service-info\">\n                <h5>Web Developmenst</h5>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <i class=\"fas fa-mobile-alt\"></i>\n              <div class=\"service-info\">\n                <h5>Cross-platform Development</h5>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <i class=\"fab fa-aws\"></i>\n              <div class=\"service-info\">\n                <h5>Cloud computing</h5>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- Row 1 End -->\n      <br />\n      <!-- Row 2 Start -->\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <i class=\"fa fa-search-plus\"></i>\n              <div class=\"service-info\">\n                <h5>Search Engine Optimization</h5>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <i class=\"fas fa-cubes\"></i>\n              <div class=\"service-info\">\n                <h5>MEAN-Stack Developer</h5>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <i class=\"fas fa-database\"></i>\n              <div class=\"service-info\">\n                <h5>Database Designing</h5>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- Row 2 End -->\n      <br />\n      <!-- Row 3 Start -->\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <i class=\"fab fa-angular\"></i>\n              <div class=\"service-info\">\n                <h5>Angular Developer</h5>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <i class=\"fa fa-flask\"></i>\n              <div class=\"service-info\">\n                <h5>Customization</h5>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <i class=\"fab fa-php\"></i>\n              <div class=\"service-info\">\n                <h5>PHP Developer</h5>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- Row 3 End -->\n    </div>\n  </div>\n</div>\n<!-- Content End -->\n"

/***/ }),

/***/ "./src/app/pages/services/services.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/services/services.component.ts ***!
  \******************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ServicesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ServicesComponent, _super);
    function ServicesComponent(route) {
        return _super.call(this, route) || this;
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/pages/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/pages/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ServicesComponent);
    return ServicesComponent;
}(_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/partials/base-page/base-page.component.css":
/*!************************************************************!*\
  !*** ./src/app/partials/base-page/base-page.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL2Jhc2UtcGFnZS9iYXNlLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/partials/base-page/base-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/partials/base-page/base-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1 class=\"display-4\">Welcome to {{ title }}</h1>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/partials/base-page/base-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/partials/base-page/base-page.component.ts ***!
  \***********************************************************/
/*! exports provided: BasePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePageComponent", function() { return BasePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/*
Project: Career-Portfolio-MEAN-STACK
Name: Dipeshpuri Goswami
Id: 300984229
Date 29, March 2019
*/



var BasePageComponent = /** @class */ (function () {
    function BasePageComponent(route) {
        this.route = route;
    }
    BasePageComponent.prototype.ngOnInit = function () {
        this.title = this.route.snapshot.data.title;
    };
    BasePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-base-page',
            template: __webpack_require__(/*! ./base-page.component.html */ "./src/app/partials/base-page/base-page.component.html"),
            styles: [__webpack_require__(/*! ./base-page.component.css */ "./src/app/partials/base-page/base-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BasePageComponent);
    return BasePageComponent;
}());



/***/ }),

/***/ "./src/app/partials/footer/footer.component.css":
/*!******************************************************!*\
  !*** ./src/app/partials/footer/footer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/partials/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/partials/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /* \nProject: Career-Portfolio-MEAN-STACK    \nName: Dipeshpuri Goswami\nId: 300984229 \nDate 29, March 2019 \n*/ -->\n<!-- \n<div class=\"navbar fixed-bottom navbar-light bg-light\">\n  <h6>&copy; Copyright {{ year }}. All Rights Reserved</h6>\n</div> -->\n"

/***/ }),

/***/ "./src/app/partials/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
Project: Career-Portfolio-MEAN-STACK
Name: Dipeshpuri Goswami
Id: 300984229
Date 29, March 2019
*/


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        var date = new Date();
        this.year = date.getFullYear();
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/partials/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/partials/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/partials/header/header.component.css":
/*!******************************************************!*\
  !*** ./src/app/partials/header/header.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/partials/header/header.component.html":
/*!*******************************************************!*\
  !*** ./src/app/partials/header/header.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /* \nProject: Career-Portfolio-MEAN-STACK    \nName: Dipeshpuri Goswami\nId: 300984229 \nDate 29, March 2019 \n*/ -->\n\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/\"> <img src=\"assets/logo.png\"></a>\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/\"\n          ><i class=\"fab fa-lg fa-atlassian\"></i> Home\n      </a\n        >\n      </li>\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/about\"\n          ><i class=\"fas fa-lg fa-archway\"></i> About</a\n        >\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/products\"\n          ><i class=\"fab fa-lg fa-apple\"></i> Products</a\n        >\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/services\"\n          ><i class=\"fab fa-lg fa-servicestack\"></i> Services</a\n        >\n      </li> -->\n      <li *ngIf=\"isLoggedIn()\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/admin\"\n          ><i class=\"fa fa-lg fa-archway\"></i> Dashboard</a\n        >\n      </li> \n\n      <li *ngIf=\"isLoggedIn()\" class=\"navbar-text text-success ml-5 mr-5 d-none d-lg-inline\"><i class=\"fas fa-lg fa-user\"></i>\n        Welcome, {{ user.displayName }}</li>\n\n        <li *ngIf=\"isLoggedIn()\" class=\"nav-item\"><a routerLink=\"/UserProfile\" class=\"nav-link\">\n          <i class=\"fa fa-lg fa-user-circle\"></i> Profile</a></li>\n\n      <li *ngIf=\"isLoggedIn()\" class=\"nav-item\"><a (click)=\"onLogoutClick()\" routerLink=\"/logout\" class=\"nav-link\">\n        <i class=\"fa fa-lg fa-sign-out-alt\"></i> Logout</a></li>\n\n      <li *ngIf=\"!isLoggedIn()\" class=\"nav-item\"><a routerLink=\"/login\" class=\"nav-link\">\n        <i class=\"fa fa-lg fa-sign-in-alt\"></i> Login</a></li>\n\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/partials/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");
/*
Project: Career-Portfolio-MEAN-STACK
Name: Dipeshpuri Goswami
Id: 300984229
Date 29, March 2019
*/






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    HeaderComponent.prototype.onLogoutClick = function () {
        var _this = this;
        this.authService.logout().subscribe(function (data) {
            _this.flashMessage.show(data.msg, { cssClass: 'alert-warning', timeOut: 5000 });
            _this.router.navigate(['/login']);
        });
    };
    HeaderComponent.prototype.isLoggedIn = function () {
        var result = this.authService.loggedIn();
        if (result) {
            this.user = JSON.parse(localStorage.getItem('user'));
        }
        return result;
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/partials/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/partials/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/report/report.component.css":
/*!*********************************************!*\
  !*** ./src/app/report/report.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user{\n    text-align: right;\n    font-size: 20px;\n    font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlcntcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/report/report.component.html":
/*!**********************************************!*\
  !*** ./src/app/report/report.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"status\">\n    dsdsdcs\n  </div>\n \n  <button class=\"btn btn-primary btn-block text-uppercase\" value=\"Export As PDF\"\n  (click)=\"captureScreen()\">export as pdf</button>\n  <div class=\"container\" id=\"contentToConvert\">\n    <h2>Report of {{ contact. title }}</h2>\n    <div class=\"user\">{{ contact.users}} Users Participate</div>\n    <p>{{ contact.desc}}</p>\n    <div class=\"row\" >\n      <div class=\"col-md-12\">\n        <div class=\"question\">\n          <h4> Q.1 ) {{ contact.Question_1}} </h4>\n        </div>\n        <div class=\"option\">{{ contact.Q1_Ops_1 }}</div>\n        <div class=\"progress\">\n          <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" \n            aria-valuemax=\"100\" [ngStyle]=\"{'width': (contact.Q1A1) + '%'}\" >\n            {{ contact.Q1A1 }}%\n            </div>\n        </div>\n        <div class=\"option\">{{ contact.Q1_Ops_2 }}</div>\n        <div class=\"progress\">\n          <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" \n               aria-valuemax=\"100\" [ngStyle]=\"{'width': (contact.Q1A2) + '%'}\" >\n                 {{ contact.Q1A2 }}%\n               </div>\n        </div>\n        <div class=\"option\">{{ contact.Q1_Ops_3 }}</div>\n        <div class=\"progress\">\n          <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" \n                 aria-valuemax=\"100\" [ngStyle]=\"{'width': (contact.Q1A3) + '%'}\" >\n                   {{ contact.Q1A3 }}%\n                 </div>\n        </div>\n        <div class=\"option\">{{ contact.Q1_Ops_4 }}</div>\n        <div class=\"progress\">\n          <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" \n                   aria-valuemax=\"100\" [ngStyle]=\"{'width': (contact.Q1A4) + '%'}\" >\n                     {{ contact.Q1A4 }}%\n                   </div>\n        </div>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"question\">\n            <h4> Q.2 ) {{ contact.Question_2}} </h4>\n          </div>\n          <div class=\"option\">{{ contact.Q2_Ops_1 }}</div>\n          <div class=\"progress\">\n            <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" \n              aria-valuemax=\"100\" [ngStyle]=\"{'width': (contact.Q2A1) + '%'}\" >\n              {{ contact.Q2A1 }}%\n              </div>\n          </div>\n          <div class=\"option\">{{ contact.Q2_Ops_2 }}</div>\n          <div class=\"progress\">\n            <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" \n                 aria-valuemax=\"100\" [ngStyle]=\"{'width': (contact.Q2A2) + '%'}\" >\n                   {{ contact.Q2A2 }}%\n                 </div>\n          </div>\n          <div class=\"option\">{{ contact.Q2_Ops_3 }}</div>\n          <div class=\"progress\">\n            <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" \n                   aria-valuemax=\"100\" [ngStyle]=\"{'width': (contact.Q2A3) + '%'}\" >\n                     {{ contact.Q2A3 }}%\n                   </div>\n          </div>\n          <div class=\"option\">{{ contact.Q2_Ops_4 }}</div>\n          <div class=\"progress\">\n            <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" \n                     aria-valuemax=\"100\" [ngStyle]=\"{'width': (contact.Q2A4) + '%'}\" >\n                       {{ contact.Q2A4 }}%\n                     </div>\n          </div>\n        </div>\n      </div>\n      <hr>\n      <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"question\">\n              <h4> Q.3 ) {{ contact.Question_3}} </h4>\n            </div>\n            <div class=\"option\">{{ contact.Q3_Ops_1 }}</div>\n            <div class=\"progress\">\n              <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" \n                aria-valuemax=\"100\" [ngStyle]=\"{'width': (contact.Q3A1) + '%'}\" >\n                {{ contact.Q3A1 }}%\n                </div>\n            </div>\n            <div class=\"option\">{{ contact.Q3_Ops_2 }}</div>\n            <div class=\"progress\">\n              <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" \n                   aria-valuemax=\"100\" [ngStyle]=\"{'width': (contact.Q3A2) + '%'}\" >\n                     {{ contact.Q3A2 }}%\n                   </div>\n            </div>\n            <div class=\"option\">{{ contact.Q3_Ops_3 }}</div>\n            <div class=\"progress\">\n              <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" \n                     aria-valuemax=\"100\" [ngStyle]=\"{'width': (contact.Q3A3) + '%'}\" >\n                       {{ contact.Q3A3 }}%\n                     </div>\n            </div>\n            <div class=\"option\">{{ contact.Q3_Ops_4 }}</div>\n            <div class=\"progress\">\n              <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" \n                       aria-valuemax=\"100\" [ngStyle]=\"{'width': (contact.Q3A4) + '%'}\" >\n                         {{ contact.Q3A4 }}%\n                       </div>\n            </div>\n          </div>\n        </div>\n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/report/report.component.ts":
/*!********************************************!*\
  !*** ./src/app/report/report.component.ts ***!
  \********************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/survey.service */ "./src/app/services/survey.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _models_contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/contact */ "./src/app/models/contact.ts");


// import { ContactListService } from 'src/app/services/contact-list.service';





// import { Contact } from 'src/app/models/contact';

var ReportComponent = /** @class */ (function () {
    function ReportComponent(activatedRoute, flashMessage, SurveyService, router) {
        this.activatedRoute = activatedRoute;
        this.flashMessage = flashMessage;
        this.SurveyService = SurveyService;
        this.router = router;
    }
    ReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contact = new _models_contact__WEBPACK_IMPORTED_MODULE_7__["Contact"]();
        this.activatedRoute.params.subscribe(function (params) {
            _this.contact._id = params.id;
            console.log('sdds', _this.contact);
        });
        this.getReport(this.contact._id);
    };
    ReportComponent.prototype.getReport = function (contact) {
        var _this = this;
        var status = false;
        console.log('sdds id ', contact);
        this.SurveyService.getReports(contact).subscribe(function (data) {
            _this.contact = data.todo;
            console.log(_this.contact);
            var jj = 70;
            if (_this.contact.users === 0) {
                status = true;
            }
            //this.GenerateProgressBar(this.contact);
        });
    };
    // private GenerateProgressBar(contact: Contact): void{
    //   var current_progress = 0;
    //   var interval = setInterval(function() {
    //       current_progress += 20;
    //       $("#dynamic")
    //       .css("width", current_progress + "%")
    //       .attr("aria-valuenow", current_progress)
    //       .text(current_progress + "% Complete");
    //       if (current_progress >= contact.Q1A2)
    //           clearInterval(interval);
    //   }, 1000);
    // }
    ReportComponent.prototype.captureScreen = function () {
        var data = document.getElementById('contentToConvert');
        html2canvas__WEBPACK_IMPORTED_MODULE_6___default()(data).then(function (canvas) {
            // Few necessary setting options  
            var imgWidth = 208;
            var pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_5__('p', 'mm', 'a4'); // A4 size page of PDF  
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('BlackDotReport.pdf'); // Generated PDF   
        });
    };
    ReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.css */ "./src/app/report/report.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ReportComponent);
    return ReportComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/*
Project: Career-Portfolio-MEAN-STACK
Name: Dipeshpuri Goswami
Id: 300984229
Date 29, March 2019
*/





var AuthService = /** @class */ (function () {
    function AuthService(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
        // private endpoint = 'http://localhost:3000/api/';
        this.endpoint = 'https://ratemycolleges.herokuapp.com/api/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            })
        };
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.endpoint + 'register', user, this.httpOptions);
    };
    AuthService.prototype.authenticateUser = function (user) {
        return this.http.post(this.endpoint + 'login', user, this.httpOptions);
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', 'Bearer ' + token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
        return this.http.get(this.endpoint + 'logout', this.httpOptions);
    };
    AuthService.prototype.loggedIn = function () {
        return !this.jwtService.isTokenExpired(this.authToken);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/contact-list.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/contact-list.service.ts ***!
  \**************************************************/
/*! exports provided: ContactListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListService", function() { return ContactListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/*
Project: Career-Portfolio-MEAN-STACK
Name: Dipeshpuri Goswami
Id: 300984229
Date 29, March 2019
*/




var ContactListService = /** @class */ (function () {
    function ContactListService(http) {
        this.http = http;
        this.authToken = null;
        // private endpoint = 'http://localhost:3000/api/todo/';
        this.endpoint = 'https://ratemycolleges.herokuapp.com/api/todo/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            })
        };
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    ContactListService.prototype.getList = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.loadToken();
        return this.http.get(this.endpoint + this.user.id, this.httpOptions);
    };
    ContactListService.prototype.getContact = function (contact) {
        this.loadToken();
        return this.http.get(this.endpoint + 'edit/' + contact._id, this.httpOptions);
    };
    ContactListService.prototype.addContact = function (contact) {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.loadToken();
        return this.http.post(this.endpoint + 'add/' + this.user.id, contact, this.httpOptions);
    };
    ContactListService.prototype.editContact = function (contact) {
        this.loadToken();
        return this.http.post(this.endpoint + 'edit/' + contact._id, contact, this.httpOptions);
    };
    ContactListService.prototype.deleteContact = function (contact) {
        this.loadToken();
        return this.http.get(this.endpoint + 'delete/' + contact._id, this.httpOptions);
    };
    ContactListService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    };
    ContactListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContactListService);
    return ContactListService;
}());



/***/ }),

/***/ "./src/app/services/survey.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/survey.service.ts ***!
  \********************************************/
/*! exports provided: SurveyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyService", function() { return SurveyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/*
Project: Career-Portfolio-MEAN-STACK
Name: Dipeshpuri Goswami
Id: 300984229
Date 29, March 2019
*/




var SurveyService = /** @class */ (function () {
    function SurveyService(http) {
        this.http = http;
        this.authToken = null;
        // private endpoint = 'http://localhost:3000/api/takesurvey/';
        this.endpoint = 'https://ratemycolleges.herokuapp.com/api/todo/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            })
        };
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    SurveyService.prototype.getActiveSurvey = function () {
        return this.http.get(this.endpoint, this.httpOptions);
    };
    SurveyService.prototype.getContact = function (contact) {
        return this.http.get(this.endpoint + contact._id, this.httpOptions);
    };
    SurveyService.prototype.addContact = function (contact) {
        return this.http.post(this.endpoint + 'add/' + contact._id, contact, this.httpOptions);
    };
    SurveyService.prototype.getReports = function (contact) {
        this.loadToken();
        return this.http.get(this.endpoint + 'report/' + contact, this.httpOptions);
    };
    SurveyService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    };
    SurveyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SurveyService);
    return SurveyService;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UserListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListService", function() { return UserListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/*
Project: Career-Portfolio-MEAN-STACK
Name: Dipeshpuri Goswami
Id: 300984229
Date 29, March 2019
*/




var UserListService = /** @class */ (function () {
    function UserListService(http) {
        this.http = http;
        this.authToken = null;
        // private endpoint = 'http://localhost:3000/api/users/';
        this.endpoint = 'https://ratemycolleges.herokuapp.com/api/todo/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
            })
        };
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    UserListService.prototype.getUser = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log('toekn', this.user.id);
        this.loadToken();
        return this.http.get(this.endpoint + '/' + this.user.id, this.httpOptions);
    };
    UserListService.prototype.getContact = function (contact) {
        this.loadToken();
        return this.http.get(this.endpoint + 'edit/' + this.user.id, this.httpOptions);
    };
    UserListService.prototype.addContact = function (contact) {
        this.loadToken();
        return this.http.post(this.endpoint + 'add', contact, this.httpOptions);
    };
    UserListService.prototype.editContact = function (user) {
        this.loadToken();
        return this.http.put(this.endpoint + 'edit/' + this.user.id, user, this.httpOptions);
    };
    UserListService.prototype.deleteContact = function (contact) {
        this.loadToken();
        return this.http.get(this.endpoint + 'delete/' + contact._id, this.httpOptions);
    };
    UserListService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    };
    UserListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserListService);
    return UserListService;
}());



/***/ }),

/***/ "./src/app/survey1/survey1.component.css":
/*!***********************************************!*\
  !*** ./src/app/survey1/survey1.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    padding-top: 10px;\n}\n.surveyTitile{\n    font-size: 40px;\n    background-color:#fee151;\n    color: #343a40;\n}\n.surveyTitile, ::-webkit-input-placeholder { /* Edge */\n    color: #343a40;\n  }\n.question{\n    color: #343a40;\n    font-size: 24px;\n    font-weight: 300;\n    font-style: normal;\n    text-decoration: none;\n}\n.input-group{\n    padding: 10px;\n}\n.question{\n    width: 90%;\n}\n.questionrow{\n    padding-bottom: 10px;\n}\n/* Testing Zone */\n#content{\n    width:100%;\n    height:90px;\n    border:1px solid black;\n  }\n#contentInside{\n    width:100px;\n    height:70px;\n    margin:7px;\n    border:1px solid black;\n    display:inline-flex;\n  }\ni {\n    cursor: pointer;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5MS9zdXJ2ZXkxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsY0FBYztBQUNsQjtBQUNBLDZDQUE2QyxTQUFTO0lBQ2xELGNBQWM7RUFDaEI7QUFDRjtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBRUEsaUJBQWlCO0FBRWpCO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxzQkFBc0I7RUFDeEI7QUFDQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7QUFDQTtJQUNFLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9zdXJ2ZXkxL3N1cnZleTEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uc3VydmV5VGl0aWxle1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZWUxNTE7XG4gICAgY29sb3I6ICMzNDNhNDA7XG59XG4uc3VydmV5VGl0aWxlLCA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBFZGdlICovXG4gICAgY29sb3I6ICMzNDNhNDA7XG4gIH1cbi5xdWVzdGlvbntcbiAgICBjb2xvcjogIzM0M2E0MDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmlucHV0LWdyb3Vwe1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4ucXVlc3Rpb257XG4gICAgd2lkdGg6IDkwJTtcbn1cbi5xdWVzdGlvbnJvd3tcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLyogVGVzdGluZyBab25lICovXG5cbiNjb250ZW50e1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjkwcHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcbiAgfVxuICAjY29udGVudEluc2lkZXtcbiAgICB3aWR0aDoxMDBweDtcbiAgICBoZWlnaHQ6NzBweDtcbiAgICBtYXJnaW46N3B4O1xuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XG4gICAgZGlzcGxheTppbmxpbmUtZmxleDtcbiAgfVxuICBpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/survey1/survey1.component.html":
/*!************************************************!*\
  !*** ./src/app/survey1/survey1.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"container\">\n       <div class=\"row surveyTitile\">\n          <div class=\"col-md-12\">\n             <form>\n                <input type=\"text\" name=\"surveyTitile\" placeholder=\"MCQ Survey Template\">\n             </form>\n          </div>\n       </div>\n       <hr>\n\n       <!-- question starts  -->\n       <form class=\"form\" (submit)=\"onSurveyPageSubmit()\">\n          <button type=\"submit\" class=\"btn btn-primary\">submit \n </button>\n       <div class=\"row questionrow\">\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\n             <div class=\"card\">\n                <div class=\"card-body\">\n                   <div class=\"question\">\n                      <h4> 1) \n                         <input type=\"text\" name=\"question\" \n                         id=\"Q1TextField\"\n                         placeholder=\"Enter Question Here \"\n                         name=\"Q1TextField\"\n                         [(ngModel)]=\"survey.Q1\"\n                         value=\"{{ survey.Q1 }}\"\n                         >\n                      </h4>\n                   </div>\n                   <div class=\"row\">\n                      <div class=\"col-md-6\">\n                         <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                               <div class=\"input-group-text\">\n                                  <input type=\"radio\" aria-label=\"Radio button for following text input\">\n                               </div>\n                            </div>\n                            <input type=\"text\" class=\"form-control\" aria-label=\"Text input with radio button\"\n                            id=\"O1TextField\"\n                            placeholder=\"Enter Question Here \"\n                            name=\"O1TextField\"\n                            [(ngModel)]=\"survey.O1\"\n                            value=\"{{ survey.O1 }}\"\n                            >\n                         </div>\n                         <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                               <div class=\"input-group-text\">\n                                  <input type=\"radio\" aria-label=\"Radio button for following text input\"\n                                  id=\"O2TextField\"\n                                  placeholder=\"Enter Question Here \"\n                                  name=\"O2TextField\"\n                                  [(ngModel)]=\"survey.O2\"\n                                  value=\"{{ survey.O2 }}\">\n                               </div>\n                            </div>\n                            <input type=\"text\" class=\"form-control\" aria-label=\"Text input with radio button\">\n                         </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                         <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                               <div class=\"input-group-text\">\n                                  <input type=\"radio\" aria-label=\"Radio button for following text input\"\n                                  id=\"O3TextField\"\n                                  placeholder=\"Enter Question Here \"\n                                  name=\"O3TextField\"\n                                  [(ngModel)]=\"survey.O3\"\n                                  value=\"{{ survey.O3 }}\"\n                                  >\n                               </div>\n                            </div>\n                            <input type=\"text\" class=\"form-control\" aria-label=\"Text input with radio button\">\n                         </div>\n                         <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                               <div class=\"input-group-text\">\n                                  <input type=\"radio\" aria-label=\"Radio button for following text input\"\n                                  id=\"O4TextField\"\n                                  placeholder=\"Enter Question Here \"\n                                  name=\"O4TextField\"\n                                  [(ngModel)]=\"survey.O4\"\n                                  value=\"{{ survey.O4 }}\">\n                               </div>\n                            </div>\n                            <input type=\"text\" class=\"form-control\" aria-label=\"Text input with radio button\">\n                         </div>\n                      </div>\n                   </div>\n                </div>\n             </div>\n          </div>\n       </div>\n      \n      </form>\n<!-- question ends -->\n\n    </div>\n </div>"

/***/ }),

/***/ "./src/app/survey1/survey1.component.ts":
/*!**********************************************!*\
  !*** ./src/app/survey1/survey1.component.ts ***!
  \**********************************************/
/*! exports provided: Survey1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Survey1Component", function() { return Survey1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Survey1Component = /** @class */ (function () {
    function Survey1Component() {
        this.fieldArray = [];
        this.newAttribute = {};
        this.firstField = true;
        this.firstFieldName = 'Option A';
        this.questionCount = 1;
    }
    Survey1Component.prototype.ngOnInit = function () {
    };
    Survey1Component.prototype.addFieldValue = function (index) {
        if (this.fieldArray.length <= 2) {
            this.fieldArray.push(this.newAttribute);
            this.newAttribute = {};
        }
        else {
        }
    };
    Survey1Component.prototype.deleteFieldValue = function (index) {
        this.fieldArray.splice(index, 1);
    };
    Survey1Component.prototype.onEditCloseItems = function () {
        this.isEditItems = !this.isEditItems;
    };
    Survey1Component.prototype.onSubmitForm = function (survey) {
        console.log("result", survey);
    };
    Survey1Component.prototype.onAddQuestion = function () {
    };
    // Logic For the Survey Storage 
    Survey1Component.prototype.onSurveyPageSubmit = function () {
        console.log(this.survey);
    };
    Survey1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-survey1',
            template: __webpack_require__(/*! ./survey1.component.html */ "./src/app/survey1/survey1.component.html"),
            styles: [__webpack_require__(/*! ./survey1.component.css */ "./src/app/survey1/survey1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Survey1Component);
    return Survey1Component;
}());



/***/ }),

/***/ "./src/app/take-survey/take-survey.component.css":
/*!*******************************************************!*\
  !*** ./src/app/take-survey/take-survey.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rha2Utc3VydmV5L3Rha2Utc3VydmV5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/take-survey/take-survey.component.html":
/*!********************************************************!*\
  !*** ./src/app/take-survey/take-survey.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n      <div class=\"row\">\n            <div class=\"col-sm-10 col-md-10 col-lg-10 mx-auto\">\n                <div class=\"card card-signin my-5\">\n                    <div class=\"card-body\">\n      <br />\n   \n      <div class=\"text-center\">\n         <h1>{{ title }}</h1>\n      </div>\n      <div class=\"card\">\n   \n         <div class=\"card-body\">\n            <blockquote class=\"blockquote mb-0\">\n               <h1>{{ contact.title }}</h1>\n               <footer> <cite title=\"Source Title\">{{ contact.desc }}</cite></footer>\n            </blockquote>\n         </div>\n      </div>\n      <br>\n   \n      <div class=\"row\">\n         <div class=\"col-md-12\">\n            <form class=\"form\" (submit)=\"onDetailsPageSubmit()\">\n               <!-- Question 1 starts-->\n               <div class=\"card\">\n                  <div class=\"card-header\">\n                     <h4>\n                        <label>1) {{ contact.Q1 }}</label>\n                        <input type=\"text\" name=\"question\" id=\"Q1TextField\" placeholder=\"Enter Question Here \"\n                           name=\"Q1TextField\" [(ngModel)]=\"contact.Q1\" value=\"{{ contact.Q1 }}\" hidden />\n                     </h4>\n                  </div>\n                  <ul class=\"list-group list-group-flush\">\n                     <li class=\"list-group-item\">\n                        <label class=\"form-check-label\" for=\"radio1\">\n                           <input type=\"radio\" id=\"radio1\" name=\"optradio1\" [(ngModel)]=\"contact.A1\"\n                              value=\"{{ contact.Q1O1 }}\" />\n                           {{ contact.Q1O1 }}\n                        </label>\n                     </li>\n                     <li class=\"list-group-item\">\n                        <label class=\"form-check-label\" for=\"radio2\">\n                           <input type=\"radio\" id=\"radio2\" name=\"optradio1\" [(ngModel)]=\"contact.A1\"\n                              value=\"{{ contact.Q1O2 }}\" />\n                           {{ contact.Q1O2 }}\n                        </label>\n                     </li>\n                     <li class=\"list-group-item\">\n                        <label class=\"form-check-label\" for=\"radio3\">\n                           <input type=\"radio\" id=\"radio3\" name=\"optradio1\" [(ngModel)]=\"contact.A1\"\n                              value=\"{{ contact.Q1O3 }}\" />\n                           {{ contact.Q1O3 }}\n                        </label>\n                     </li>\n                     <li class=\"list-group-item\">\n                        <label class=\"form-check-label\" for=\"radio4\">\n                           <input type=\"radio\" id=\"radio4\" name=\"optradio1\" [(ngModel)]=\"contact.A1\"\n                              value=\"{{ contact.Q1O4 }}\" />\n                           {{ contact.Q1O4 }}\n                        </label>\n                     </li>\n                  </ul>\n               </div>\n               <!-- Question 1 Ends-->\n               <br />\n               <!-- Question 2 starts-->\n               <div class=\"card\">\n                  <div class=\"card-header\">\n                     <h4>\n                        <label>2) {{ contact.Q2 }}</label>\n                        <input type=\"text\" name=\"question\" id=\"Q2TextField\" placeholder=\"Enter Question Here \"\n                           name=\"Q2TextField\" [(ngModel)]=\"contact.Q2\" value=\"{{ contact.Q2 }}\" hidden />\n                     </h4>\n                  </div>\n                  <ul class=\"list-group list-group-flush\">\n                     <li class=\"list-group-item\">\n                        <label class=\"form-check-label\" for=\"radio5\">\n                           <input type=\"radio\" id=\"radio5\" name=\"optradio2\" [(ngModel)]=\"contact.A2\"\n                              value=\"{{ contact.Q2O1 }}\" />\n                           {{ contact.Q2O1 }}\n                        </label>\n                     </li>\n                     <li class=\"list-group-item\">\n                        <label class=\"form-check-label\" for=\"radio6\">\n                           <input type=\"radio\" id=\"radio6\" name=\"optradio2\" [(ngModel)]=\"contact.A2\"\n                              value=\"{{ contact.Q2O2 }}\" />\n                           {{ contact.Q2O2 }}\n                        </label>\n                     </li>\n                     <li class=\"list-group-item\">\n                        <label class=\"form-check-label\" for=\"radio7\">\n                           <input type=\"radio\" id=\"radio7\" name=\"optradio2\" [(ngModel)]=\"contact.A2\"\n                              value=\"{{ contact.Q2O3 }}\" />\n                           {{ contact.Q2O3 }}\n                        </label>\n                     </li>\n                     <li class=\"list-group-item\">\n                        <label class=\"form-check-label\" for=\"radio8\">\n                           <input type=\"radio\" id=\"radio8\" name=\"optradio2\" [(ngModel)]=\"contact.A2\"\n                              value=\"{{ contact.Q2O4 }}\" />\n                           {{ contact.Q2O4 }}\n                        </label>\n                     </li>\n                  </ul>\n               </div>\n               <!-- Question 2 Ends-->\n               <br />\n               <!-- Question 3 starts-->\n               <div class=\"card\">\n                  <div class=\"card-header\">\n                     <h4>\n                        <label>3) {{ contact.Q3 }}</label>\n                        <input type=\"text\" name=\"question\" id=\"Q2TextField\" placeholder=\"Enter Question Here \"\n                           name=\"Q2TextField\" [(ngModel)]=\"contact.Q3\" value=\"{{ contact.Q3 }}\" hidden />\n                     </h4>\n                  </div>\n                  <ul class=\"list-group list-group-flush\">\n                     <li class=\"list-group-item\">\n                        <label class=\"form-check-label\" for=\"radio9\">\n                           <input type=\"radio\" id=\"radio9\" name=\"optradio3\" [(ngModel)]=\"contact.A3\"\n                              value=\"{{ contact.Q3O1 }}\" />\n                           {{ contact.Q3O1 }}\n                        </label>\n                     </li>\n                     <li class=\"list-group-item\">\n                        <label class=\"form-check-label\" for=\"radio10\">\n                           <input type=\"radio\" id=\"radio10\" name=\"optradio3\" [(ngModel)]=\"contact.A3\"\n                              value=\"{{ contact.Q3O2 }}\" />\n                           {{ contact.Q3O2 }}\n                        </label>\n                     </li>\n                     <li class=\"list-group-item\">\n                        <label class=\"form-check-label\" for=\"radio11\">\n                           <input type=\"radio\" id=\"radio11\" name=\"optradio3\" [(ngModel)]=\"contact.A3\"\n                              value=\"{{ contact.Q3O3 }}\" />\n                           {{ contact.Q3O3 }}\n                        </label>\n                     </li>\n                     <li class=\"list-group-item\">\n                        <label class=\"form-check-label\" for=\"radio12\">\n                           <input type=\"radio\" id=\"radio12\" name=\"optradio3\" [(ngModel)]=\"contact.A3\"\n                              value=\"{{ contact.Q3O4 }}\" />\n                           {{ contact.Q3O4 }}\n                        </label>\n                     </li>\n                  </ul>\n               </div>\n               <!-- Question 3 Ends-->\n               <br />\n   \n   \n   \n               <button type=\"submit\" class=\"btn btn-outline-primary\">\n                  <i class=\"fas fa-edit\"></i> Submit the Survey\n               </button>\n               &nbsp;&nbsp;&nbsp;\n               <a routerLink=\"/home\" class=\"btn btn-outline-dark\">\n                  <i class=\"fas fa-undo\"></i> Cancel</a>\n               <br /><br />\n   \n   \n            </form>\n         </div>\n      </div>\n   \n   \n   </div></div></div></div>\n   </div>\n\n\n   "

/***/ }),

/***/ "./src/app/take-survey/take-survey.component.ts":
/*!******************************************************!*\
  !*** ./src/app/take-survey/take-survey.component.ts ***!
  \******************************************************/
/*! exports provided: TakeSurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeSurveyComponent", function() { return TakeSurveyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/survey.service */ "./src/app/services/survey.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/contact */ "./src/app/models/contact.ts");
/* harmony import */ var _models_surveyResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/surveyResponse */ "./src/app/models/surveyResponse.ts");


// import { ContactListService } from 'src/app/services/contact-list.service';



// import { Contact } from 'src/app/models/contact';


var TakeSurveyComponent = /** @class */ (function () {
    function TakeSurveyComponent(activatedRoute, flashMessage, SurveyService, router) {
        this.activatedRoute = activatedRoute;
        this.flashMessage = flashMessage;
        this.SurveyService = SurveyService;
        this.router = router;
        this.surveyresponse = new _models_surveyResponse__WEBPACK_IMPORTED_MODULE_6__["surveyResponse"]();
    }
    TakeSurveyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contact = new _models_contact__WEBPACK_IMPORTED_MODULE_5__["Contact"]();
        this.activatedRoute.params.subscribe(function (params) {
            _this.contact._id = params.id;
        });
        this.getContact(this.contact);
    };
    TakeSurveyComponent.prototype.getContact = function (contact) {
        var _this = this;
        this.SurveyService.getContact(contact).subscribe(function (data) {
            _this.contact = data.todo;
        });
    };
    TakeSurveyComponent.prototype.onDetailsPageSubmit = function () {
        var _this = this;
        console.log("back -> ", this.contact);
        this.SurveyService.addContact(this.contact).subscribe(function (data) {
            if (data.success) {
                //this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
                _this.router.navigate(['/thankyou']);
            }
            else {
                //this.flashMessage.show('Add Todo Failed', {cssClass: 'alert-danger', timeOut: 3000});
                _this.router.navigate(['/home']);
            }
        });
    };
    TakeSurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-take-survey',
            template: __webpack_require__(/*! ./take-survey.component.html */ "./src/app/take-survey/take-survey.component.html"),
            styles: [__webpack_require__(/*! ./take-survey.component.css */ "./src/app/take-survey/take-survey.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TakeSurveyComponent);
    return TakeSurveyComponent;
}());



/***/ }),

/***/ "./src/app/test/test.component.css":
/*!*****************************************!*\
  !*** ./src/app/test/test.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/test/test.component.html":
/*!******************************************!*\
  !*** ./src/app/test/test.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n    {{ title }}\n  </h1>\n<!--   \n  <h1>Survey</h1>\n  <survey [json]=\"json\" (submitSurvey)=\"sendData($event)\"></survey>\n  \n  <h1>Survey JS Creator</h1>\n  <survey-creator\n    [json]=\"json\"\n    (surveySaved)=\"onSurveySaved($event)\"\n  ></survey-creator>\n   -->"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestComponent = /** @class */ (function () {
    function TestComponent() {
        this.title = "app works!";
        this.json = {
            title: "Product Feedback Survey Example",
            showProgressBar: "top",
        };
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent.prototype.onSurveySaved = function (survey) {
        this.json = survey;
        console.log("result", this.json);
    };
    TestComponent.prototype.sendData = function (result) {
        //TODO update with your own behavior    
        console.log(result);
    };
    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/test/test.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/thankyou/thankyou.component.css":
/*!*************************************************!*\
  !*** ./src/app/thankyou/thankyou.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoYW5reW91L3RoYW5reW91LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/thankyou/thankyou.component.html":
/*!**************************************************!*\
  !*** ./src/app/thankyou/thankyou.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <br />\n    <br />\n    <div class=\"card text-center\">\n  \n      <div class=\"card-body\">\n        <h1 class=\"display-4\">Thank you for your response.</h1>\n        <hr class=\"my-4\">\n  \n        <br />\n        <p>Your response is successfully submitted.</p>\n  \n        <br />\n        <a class=\"btn btn-outline-dark btn-lg\" routerLink=\"/home\" role=\"button\">Try more Survey</a>\n        <br />\n      </div>\n      <div class=\"card-footer text-muted\">\n        Powered by: B L A C K D O T\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/thankyou/thankyou.component.ts":
/*!************************************************!*\
  !*** ./src/app/thankyou/thankyou.component.ts ***!
  \************************************************/
/*! exports provided: ThankyouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouComponent", function() { return ThankyouComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ThankyouComponent = /** @class */ (function () {
    function ThankyouComponent() {
    }
    ThankyouComponent.prototype.ngOnInit = function () {
    };
    ThankyouComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-thankyou',
            template: __webpack_require__(/*! ./thankyou.component.html */ "./src/app/thankyou/thankyou.component.html"),
            styles: [__webpack_require__(/*! ./thankyou.component.css */ "./src/app/thankyou/thankyou.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ThankyouComponent);
    return ThankyouComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Content for the Details Page -->\n <div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-offset-5 col-md-6\">\n          <h1>{{ title }}</h1>\n\n          <form class=\"form\" (submit)=\"onDetailsPageSubmit()\">\n              <div class=\"form-group\">\n                  <label for=\"FirstNameTextField\">Name</label>\n                  <input type=\"text\" class=\"form-control\"\n                  id=\"FirstNameTextField\"\n                  placeholder=\"Enter Name\"\n                  name=\"firstName\"\n                  [(ngModel)]=\"User.username\"\n                  value=\"{{ User.username }}\"\n                  required>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"FirstNameTextField\">Display Name</label>\n                <input type=\"text\" class=\"form-control\"\n                id=\"FirstNameTextField\"\n                placeholder=\"Enter Display Name\"\n                name=\"firstName\"\n                [(ngModel)]=\"User.displayName\"\n                value=\"{{ User.displayName }}\"\n                required>\n            </div>\n\n              <div class=\"form-group\">\n                  <label for=\"LastNameTextField\">Email</label>\n                  <input type=\"text\" class=\"form-control\"\n                  id=\"LastNameTextField\"\n                  placeholder=\"Enter Email\"\n                  name=\"lastName\"\n                  [(ngModel)]=\"User.email\"\n                  value=\"{{ User.email }}\"\n                  required>\n              </div>\n\n              <!-- <div class=\"form-group\">\n                  <label for=\"AgeTextField\">Password</label>\n                  <input type=\"text\" class=\"form-control\"\n                  id=\"AgeTextField\"\n                  placeholder=\"********\"\n                  name=\"age\"\n                  [(ngModel)]=\"User.salt\"\n                  value=\"{{ User.salt }}\"\n                  required>\n              </div> -->\n\n              <button type=\"submit\" class=\"btn btn-primary\">\n              <i class=\"fas fa-edit\"></i> {{ title }}</button>\n              <a routerLink=\"/admin\" class=\"btn btn-warning\">\n                  <i class=\"fas fa-undo\"></i> Cancel</a>\n          </form>\n\n\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/models/user */ "./src/app/models/user.ts");






var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(activatedRoute, flashMessage, UserListService, router) {
        this.activatedRoute = activatedRoute;
        this.flashMessage = flashMessage;
        this.UserListService = UserListService;
        this.router = router;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.title = this.activatedRoute.snapshot.data.title;
        this.User = new _app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.getUser(this.User);
        this.activatedRoute.params.subscribe(function (params) {
            var kk = params.id;
        });
    };
    UserProfileComponent.prototype.getUser = function (User) {
        var _this = this;
        this.UserListService.getUser().subscribe(function (data) {
            _this.User = data.data;
            // let id = localStorage.getItem('user');
            // console.log('toekn', id)
        });
    };
    UserProfileComponent.prototype.onDetailsPageSubmit = function () {
        var _this = this;
        console.log("data", this.User);
        this.UserListService.editContact(this.User).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeOut: 3000 });
                _this.router.navigate(['/UserProfile']);
            }
            else {
                _this.flashMessage.show('Edit Todo Failed', { cssClass: 'alert-danger', timeOut: 3000 });
                _this.router.navigate(['/admin']);
            }
        });
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UserListService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserProfileComponent);
    return UserProfileComponent;
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

module.exports = __webpack_require__(/*! /Users/gossi/Desktop/Rate-My-College/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map