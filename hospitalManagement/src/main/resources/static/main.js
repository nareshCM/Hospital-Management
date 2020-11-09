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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _doctor_portal_component_doctor_portal_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doctor-portal-component/doctor-portal-component.component */ "./src/app/doctor-portal-component/doctor-portal-component.component.ts");
/* harmony import */ var _patient_portal_component_patient_portal_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patient-portal-component/patient-portal-component.component */ "./src/app/patient-portal-component/patient-portal-component.component.ts");





function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.DoctorNavigate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Doctor Portal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.PatientNavigate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Patient Portal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_app_doctor_portal_component_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-doctor-portal-component");
} }
function AppComponent_app_patient_portal_component_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-patient-portal-component");
} }
class AppComponent {
    constructor() {
        this.welcome = true;
        this.doctor = false;
        this.patient = false;
    }
    ngOnInit() {
    }
    DoctorNavigate() {
        (this.welcome) ? this.welcome = false : this.welcome = true;
        (this.doctor) ? this.doctor = false : this.doctor = true;
    }
    PatientNavigate() {
        (this.welcome) ? this.welcome = false : this.welcome = true;
        (this.patient) ? this.patient = false : this.patient = true;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 3, consts: [["id", "intro", "class", "wrapper row row-null", 4, "ngIf"], [4, "ngIf"], ["id", "intro", 1, "wrapper", "row", "row-null"], [1, "doctor", "center-align", "col-xs-6", "col-sm-6", "col-md-6", "col-lg-6", "col-null"], [1, "doctor-pic", "custom-card", 3, "click"], [1, "doctor-txt", "center-align"], [1, "patient", "center-align", "col-xs-6", "col-sm-6", "col-md-6", "col-lg-6", "col-null"], [1, "patient-pic", "custom-card", 3, "click"], [1, "patient-txt", "center-align"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 11, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_doctor_portal_component_1_Template, 1, 0, "app-doctor-portal-component", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_app_patient_portal_component_2_Template, 1, 0, "app-patient-portal-component", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.welcome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.doctor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.patient);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _doctor_portal_component_doctor_portal_component_component__WEBPACK_IMPORTED_MODULE_2__["DoctorPortalComponentComponent"], _patient_portal_component_patient_portal_component_component__WEBPACK_IMPORTED_MODULE_3__["PatientPortalComponentComponent"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  background-color: \"white\";\n  width: 100%;\n  height: 100%;\n}\n\n.patient-wrapper[_ngcontent-%COMP%] {\n  display: none;\n  background-color: \"white\";\n  width: 100%;\n  height: 100%;\n}\n\n.patient-detail[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: block;\n  margin: 15px;\n}\n\n.patient-detail[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 200px;\n  justify-content: center;\n  align-items: center;\n}\n\n.doctor-wrapper[_ngcontent-%COMP%] {\n  display: none;\n  background-color: \"white\";\n  width: 100%;\n  height: 100%;\n}\n\n.doctor[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n  height: 100%;\n}\n\n.patient[_ngcontent-%COMP%] {\n  float: right;\n  width: 50%;\n  height: 100%;\n}\n\n.center-align[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.row-null[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n.col-null[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n.doctor-pic[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 80%;\n  height: 80%;\n  background-image: url('doctor.jpg');\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.doctor-pic[_ngcontent-%COMP%]:hover   .doctor-txt[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.doctor-pic[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n.doctor-txt[_ngcontent-%COMP%] {\n  display: none;\n  width: 80%;\n  height: 80%;\n  position: absolute;\n  z-index: 100;\n  background-color: rgba(67, 187, 129, 0.6);\n}\n\n.doctor-txt[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 35px;\n}\n\n.patient-pic[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 80%;\n  height: 80%;\n  background-image: url('patient.jpg');\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.patient-txt[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 35px;\n}\n\n.patient-pic[_ngcontent-%COMP%]:hover   .patient-txt[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.patient-pic[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n.patient-txt[_ngcontent-%COMP%] {\n  display: none;\n  width: 80%;\n  height: 80%;\n  position: absolute;\n  z-index: 100;\n  background-color: rgba(67, 187, 129, 0.6);\n}\n\n.custom-card[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVNLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDTjs7QUFDSTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFTjs7QUFBSTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBR047O0FBQUM7RUFDQyxjQUFBO0VBQ0EsWUFBQTtBQUdGOztBQURDO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUlGOztBQURJO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFJTjs7QUFGSTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUtOOztBQUhJO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBTU47O0FBSkk7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQU9OOztBQUpJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFPTjs7QUFKSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBT047O0FBTEk7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQVFOOztBQUxJO0VBQ0UsYUFBQTtBQVFOOztBQUxJO0VBQ0UsNEVBQUE7QUFRTjs7QUFKSTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0FBT047O0FBSkk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQU9OOztBQUxJO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUFRTjs7QUFMSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBUU47O0FBTkk7RUFDRSxhQUFBO0FBU047O0FBTkk7RUFDRSw0RUFBQTtBQVNOOztBQUxJO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7QUFRTjs7QUFMSTtFQUNFLHdFQUFBO0VBQ0EscURBQUE7QUFRTiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsXHJcbiAgICBib2R5IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogXCJ3aGl0ZVwiO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnBhdGllbnQtd3JhcHBlciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFwid2hpdGVcIjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcblx0LnBhdGllbnQtZGV0YWlsIGZvcm0gaW5wdXQge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRtYXJnaW46IDE1cHg7XHJcblx0fVxyXG5cdC5wYXRpZW50LWRldGFpbCBmb3Jte1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0d2lkdGg6IDIwMHB4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcbiAgICAuZG9jdG9yLXdyYXBwZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIndoaXRlXCI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuZG9jdG9yIHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIC5wYXRpZW50IHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY2VudGVyLWFsaWduIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLnJvdy1udWxsIHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLW51bGwge1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfVxyXG4gICAgLmRvY3Rvci1waWMge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2RvY3Rvci5qcGcpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIH1cclxuXHJcbiAgICAuZG9jdG9yLXBpYzpob3ZlciAuZG9jdG9yLXR4dCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRvY3Rvci1waWM6aG92ZXIge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLFxyXG4gICAgICAgIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XHJcbiAgICB9XHJcblxyXG4gICAgLmRvY3Rvci10eHQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjcsIDE4NywgMTI5LCAwLjYpO1xyXG4gICAgfVxyXG5cclxuICAgIC5kb2N0b3ItdHh0IGg0IHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB9XHJcbiAgICAucGF0aWVudC1waWMge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL3BhdGllbnQuanBnKTtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhdGllbnQtdHh0IGg0IHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB9XHJcbiAgICAucGF0aWVudC1waWM6aG92ZXIgLnBhdGllbnQtdHh0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuXHJcbiAgICAucGF0aWVudC1waWM6aG92ZXIge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLFxyXG4gICAgICAgIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhdGllbnQtdHh0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY3LCAxODcsIDEyOSwgMC42KTtcclxuICAgIH1cclxuXHJcbiAgICAuY3VzdG9tLWNhcmQge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xyXG4gICAgfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_image_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-image-gallery */ "./node_modules/ngx-image-gallery/__ivy_ngcc__/fesm2015/ngx-image-gallery.js");
/* harmony import */ var _doctor_portal_component_doctor_portal_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doctor-portal-component/doctor-portal-component.component */ "./src/app/doctor-portal-component/doctor-portal-component.component.ts");
/* harmony import */ var _patient_portal_component_patient_portal_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patient-portal-component/patient-portal-component.component */ "./src/app/patient-portal-component/patient-portal-component.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            ngx_image_gallery__WEBPACK_IMPORTED_MODULE_5__["NgxImageGalleryModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _doctor_portal_component_doctor_portal_component_component__WEBPACK_IMPORTED_MODULE_6__["DoctorPortalComponentComponent"],
        _patient_portal_component_patient_portal_component_component__WEBPACK_IMPORTED_MODULE_7__["PatientPortalComponentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        ngx_image_gallery__WEBPACK_IMPORTED_MODULE_5__["NgxImageGalleryModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _doctor_portal_component_doctor_portal_component_component__WEBPACK_IMPORTED_MODULE_6__["DoctorPortalComponentComponent"],
                    _patient_portal_component_patient_portal_component_component__WEBPACK_IMPORTED_MODULE_7__["PatientPortalComponentComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    ngx_image_gallery__WEBPACK_IMPORTED_MODULE_5__["NgxImageGalleryModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/doctor-portal-component/doctor-portal-component.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/doctor-portal-component/doctor-portal-component.component.ts ***!
  \******************************************************************************/
/*! exports provided: DoctorPortalComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorPortalComponentComponent", function() { return DoctorPortalComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_doctor_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/doctor-service.service */ "./src/app/service/doctor-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function DoctorPortalComponentComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Doctors Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DoctorPortalComponentComponent_div_22_div_1_h4_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No patient allocated");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DoctorPortalComponentComponent_div_22_div_1_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const patient_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Name : ", patient_r7.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Disease : ", patient_r7.disease, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("History : ", patient_r7.history, "");
} }
function DoctorPortalComponentComponent_div_22_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DoctorPortalComponentComponent_div_22_div_1_div_20_div_1_Template, 8, 3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const doctor_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", doctor_r3.patientDetail);
} }
function DoctorPortalComponentComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DoctorPortalComponentComponent_div_22_div_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const doctor_r3 = ctx.$implicit; return doctor_r3.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DoctorPortalComponentComponent_div_22_div_1_Template_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const doctor_r3 = ctx.$implicit; return doctor_r3.availability = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Not Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DoctorPortalComponentComponent_div_22_div_1_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const doctor_r3 = ctx.$implicit; return doctor_r3.specialist = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorPortalComponentComponent_div_22_div_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const doctor_r3 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.updateDoctor(doctor_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorPortalComponentComponent_div_22_div_1_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const doctor_r3 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.deleteDoctor(doctor_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DoctorPortalComponentComponent_div_22_div_1_h4_19_Template, 2, 0, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DoctorPortalComponentComponent_div_22_div_1_div_20_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const doctor_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", doctor_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", doctor_r3.availability);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", doctor_r3.specialist);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !doctor_r3.patientDetail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", doctor_r3.patientDetail);
} }
function DoctorPortalComponentComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DoctorPortalComponentComponent_div_22_div_1_Template, 21, 7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.doctorList);
} }
class DoctorPortalComponentComponent {
    constructor(_doctorServiceService) {
        this._doctorServiceService = _doctorServiceService;
        this.doctorNoData = false;
        this.doctorName = "";
        this.availability = false;
        this.specialist = "";
        this.doctorList = [];
    }
    ngOnInit() {
        this._doctorServiceService.getDoctorList().subscribe(res => {
            let response = res;
            this.doctorList = response;
            console.log("res", res);
        }, error => {
            this.doctorNoData = true;
            console.log("err", error.error.errorMessage);
        });
    }
    doctorBack() {
        window.location.reload();
    }
    addDoctor() {
        let doctorObj = {
            "name": this.doctorName,
            "specialist": this.specialist,
            "availability": this.availability
        };
        this._doctorServiceService.addDoctor(doctorObj).subscribe(res => {
            let response = res;
            this.doctorList = response;
            this.doctorNoData = false;
            console.log("res", this.doctorList);
        });
    }
    updateDoctor(doctor) {
        console.log("doctor", doctor);
        let data = {
            "id": doctor.id,
            "name": doctor.name,
            "specialist": doctor.specialist,
            "availability": doctor.availability
        };
        this._doctorServiceService.updateDoctor(data).subscribe(res => {
            let response = res;
            this.doctorList = response;
            alert("Doctor details successfully updated");
            console.log("res", this.doctorList);
        });
    }
    deleteDoctor(doctor) {
        console.log("doctor", doctor);
        confirm("Do you want to delete this record");
        this._doctorServiceService.deleteDoctor(doctor.id).subscribe(res => {
            let response = res;
            this.doctorList = response;
            alert("Doctor details successfully deleted");
            console.log("res", this.doctorList);
        });
    }
}
DoctorPortalComponentComponent.ɵfac = function DoctorPortalComponentComponent_Factory(t) { return new (t || DoctorPortalComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_doctor_service_service__WEBPACK_IMPORTED_MODULE_1__["DoctorServiceService"])); };
DoctorPortalComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DoctorPortalComponentComponent, selectors: [["app-doctor-portal-component"]], decls: 23, vars: 7, consts: [[1, "custom-card", "back", 3, "click"], [1, "doctor-wrapper", "center-align"], [1, "patient-detail"], ["id", "add-doctor"], [1, "form-group"], ["type", "text", "placeholder", "Name", "name", "doctorName", "id", "doctorName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "availability", 3, "ngModel", "ngModelChange"], [3, "ngValue"], ["type", "text", "placeholder", "Specialist", "name", "specialist", "title", "eg: TB , Asthma", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", "value", "Submit", 1, "btn", "btn-primary", 3, "click"], ["id", "doctorList", 1, "doctor-list", "custom-card"], [4, "ngIf"], ["id", "frame", 4, "ngFor", "ngForOf"], ["id", "frame"], [1, "row"], [1, "form-group", "col-xs-3", "col-sm-3", "col-md-3", "col-lg-3", "col-null"], ["type", "text", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "dropdown", "col-xs-3", "col-sm-3", "col-md-3", "col-lg-3", "col-null"], ["name", "availability", "name", "availability", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "specialist", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-xs-3", "col-sm-3", "col-md-3", "col-lg-3"], ["type", "button", "value", "Submit", 1, "btn", "btn-warning", 3, "click"], ["type", "button", "value", "Submit", 1, "btn", "btn-danger", 3, "click"], [1, "patient-list"], ["class", "row row-null", 4, "ngIf"], [1, "row", "row-null"], ["class", "patient-list-txt custom-card col-xs-3 col-sm-3 col-md-3 col-lg-3 col-null", 4, "ngFor", "ngForOf"], [1, "patient-list-txt", "custom-card", "col-xs-3", "col-sm-3", "col-md-3", "col-lg-3", "col-null"]], template: function DoctorPortalComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorPortalComponentComponent_Template_div_click_0_listener() { return ctx.doctorBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ADD DOCTOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DoctorPortalComponentComponent_Template_input_ngModelChange_8_listener($event) { return ctx.doctorName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DoctorPortalComponentComponent_Template_select_ngModelChange_9_listener($event) { return ctx.availability = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Not Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DoctorPortalComponentComponent_Template_input_ngModelChange_15_listener($event) { return ctx.specialist = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorPortalComponentComponent_Template_button_click_16_listener() { return ctx.addDoctor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Doctor List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DoctorPortalComponentComponent_div_21_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DoctorPortalComponentComponent_div_22_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.doctorName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.availability);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.specialist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.doctorNoData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.doctorNoData);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".patient-detail[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n\n.doctor-list[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100% !important;\n  margin: auto !important;\n}\n\n.back[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 70px;\n  height: 30px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  margin-top: 10px;\n  margin-left: 10px;\n  background-color: darkgrey;\n  color: white;\n}\n\n.patient-detail[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: block;\n  margin: 15px;\n}\n\n.patient-detail[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-top: 50px !important;\n  margin: auto;\n  text-align: center;\n  width: 200px;\n  justify-content: center;\n  align-items: center;\n}\n\n.doctor-wrapper[_ngcontent-%COMP%] {\n  display: none;\n  background-color: \"white\";\n  width: 100%;\n  height: 100%;\n}\n\n.doctor[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n  height: 100%;\n}\n\n.center-align[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.row-null[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n.col-null[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n.patient-list-txt[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.patient-list-txt[_ngcontent-%COMP%] {\n  justify-content: center;\n  background-color: lightgrey;\n  align-items: center;\n  display: flex;\n}\n\n.custom-card[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdG9yLXBvcnRhbC1jb21wb25lbnQvZG9jdG9yLXBvcnRhbC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBQ047O0FBQ0U7RUFDRSxzQkFBQTtFQUNFLHVCQUFBO0FBRU47O0FBQUU7RUFDSSxlQUFBO0VBQ0YsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUFHSjs7QUFETTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FBSVY7O0FBRk07RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBS1Y7O0FBRk07RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUtSOztBQUhNO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBTVI7O0FBSk07RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQU9SOztBQUpNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFPUjs7QUFKTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBT1I7O0FBTE07RUFDRSxlQUFBO0FBUVI7O0FBTk07RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBU047O0FBTk07RUFDRSx3RUFBQTtFQUNBLHFEQUFBO0FBU1IiLCJmaWxlIjoic3JjL2FwcC9kb2N0b3ItcG9ydGFsLWNvbXBvbmVudC9kb2N0b3ItcG9ydGFsLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXRpZW50LWRldGFpbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgfVxyXG4gIC5kb2N0b3ItbGlzdCBmb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYmFja3tcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gICAgICAucGF0aWVudC1kZXRhaWwgZm9ybSBpbnB1dCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIG1hcmdpbjogMTVweDtcclxuICAgICAgfVxyXG4gICAgICAucGF0aWVudC1kZXRhaWwgZm9ybXtcclxuICAgICAgbWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmRvY3Rvci13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IFwid2hpdGVcIjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLmRvY3RvciB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLmNlbnRlci1hbGlnbiB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5yb3ctbnVsbCB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5jb2wtbnVsbCB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5wYXRpZW50LWxpc3QtdHh0IGg0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgfVxyXG4gICAgICAucGF0aWVudC1saXN0LXR4dCB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIFxyXG4gICAgICAuY3VzdG9tLWNhcmQge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcclxuICAgICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorPortalComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-doctor-portal-component',
                templateUrl: './doctor-portal-component.component.html',
                styleUrls: ['./doctor-portal-component.component.scss']
            }]
    }], function () { return [{ type: _service_doctor_service_service__WEBPACK_IMPORTED_MODULE_1__["DoctorServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/patient-portal-component/patient-portal-component.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/patient-portal-component/patient-portal-component.component.ts ***!
  \********************************************************************************/
/*! exports provided: PatientPortalComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientPortalComponentComponent", function() { return PatientPortalComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_patient_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/patient-service.service */ "./src/app/service/patient-service.service.ts");
/* harmony import */ var _service_doctor_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/doctor-service.service */ "./src/app/service/doctor-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function PatientPortalComponentComponent_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const doctor_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", doctor_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](doctor_r3.specialist);
} }
function PatientPortalComponentComponent_h4_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No patient allocated");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientPortalComponentComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientPortalComponentComponent_div_23_div_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const patient_r5 = ctx.$implicit; return patient_r5.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientPortalComponentComponent_div_23_div_1_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const patient_r5 = ctx.$implicit; return patient_r5.disease = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientPortalComponentComponent_div_23_div_1_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const patient_r5 = ctx.$implicit; return patient_r5.history = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientPortalComponentComponent_div_23_div_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const patient_r5 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.updatePatient(patient_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientPortalComponentComponent_div_23_div_1_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const patient_r5 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.deletePatient(patient_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const patient_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", patient_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", patient_r5.disease);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", patient_r5.history);
} }
function PatientPortalComponentComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PatientPortalComponentComponent_div_23_div_1_Template, 14, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.patientList);
} }
class PatientPortalComponentComponent {
    constructor(_patientServiceService, _doctorServiceService) {
        this._patientServiceService = _patientServiceService;
        this._doctorServiceService = _doctorServiceService;
        this.disease = "";
        this.doctorID = "";
        this.dataChange = false;
        this.name = "";
        this.history = "";
        this.patientNoData = false;
    }
    ngOnInit() {
        this._patientServiceService.getPatientList().subscribe(res => {
            let response = res;
            this.patientList = response;
            console.log("res", res);
        }, error => {
            this.patientNoData = true;
            console.log("err", error.error.errorMessage);
        });
        this._doctorServiceService.getDoctorList().subscribe(res => {
            let response = res;
            this.doctorList = response;
            console.log("res", res);
        }, error => {
            alert("Please add a doctor before adding patient");
            console.log("err", error.error.errorMessage);
        });
    }
    addPatient() {
        let patientObj = {
            "name": this.name,
            "doctorID": this.doctorID,
            "disease": this.disease,
            "history": this.history
        };
        this._patientServiceService.addPatient(patientObj).subscribe(res => {
            let response = res;
            this.patientList = response;
            this.patientNoData = false;
            console.log("patientList", this.patientList);
            alert("Patient details added successfully");
        });
    }
    updatePatient(patient) {
        let data = {
            "id": patient.id,
            "name": patient.name,
            "disease": patient.disease,
            "history": patient.history
        };
        this._patientServiceService.updatePatient(data).subscribe(res => {
            let response = res;
            this.patientList = response;
            alert("Patient details successfully updated");
        });
    }
    doctorBack() {
        window.location.reload();
    }
    deletePatient(patient) {
        confirm("Do you want to delete this record");
        this._patientServiceService.deletePatient(patient.id).subscribe(res => {
            let response = res;
            this.patientList = response;
            alert("Patient details successfully deleted");
            if (this.patientList.length == 0) {
                this.patientNoData = true;
            }
        });
    }
}
PatientPortalComponentComponent.ɵfac = function PatientPortalComponentComponent_Factory(t) { return new (t || PatientPortalComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_patient_service_service__WEBPACK_IMPORTED_MODULE_1__["PatientServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_doctor_service_service__WEBPACK_IMPORTED_MODULE_2__["DoctorServiceService"])); };
PatientPortalComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PatientPortalComponentComponent, selectors: [["app-patient-portal-component"]], decls: 24, vars: 7, consts: [[1, "custom-card", "back", 3, "click"], [1, "doctor-wrapper", "center-align"], [1, "patient-detail"], ["id", "add-doctor"], [1, "form-group"], ["type", "text", "placeholder", "Name", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Disease", "name", "disease", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "History", "name", "history", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "availability", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "button", "value", "Submit", 1, "btn", "btn-primary", 3, "click"], ["id", "doctorList", 1, "doctor-list", "custom-card"], [4, "ngIf"], [3, "ngValue"], ["id", "frame", 4, "ngFor", "ngForOf"], ["id", "frame"], [1, "row"], [1, "form-group", "col-xs-3", "col-sm-3", "col-md-3", "col-lg-3", "col-null"], ["type", "text", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "disease", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "history", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-xs-3", "col-sm-3", "col-md-3", "col-lg-3"], ["type", "button", "value", "Submit", 1, "btn", "btn-warning", 3, "click"], ["type", "button", "value", "Submit", 1, "btn", "btn-danger", 3, "click"]], template: function PatientPortalComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientPortalComponentComponent_Template_div_click_0_listener() { return ctx.doctorBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ADD Patient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientPortalComponentComponent_Template_input_ngModelChange_8_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientPortalComponentComponent_Template_input_ngModelChange_10_listener($event) { return ctx.disease = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientPortalComponentComponent_Template_input_ngModelChange_12_listener($event) { return ctx.history = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientPortalComponentComponent_Template_select_ngModelChange_13_listener($event) { return ctx.doctorID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PatientPortalComponentComponent_option_14_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientPortalComponentComponent_Template_button_click_17_listener() { return ctx.addPatient(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Patient List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PatientPortalComponentComponent_h4_22_Template, 2, 0, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PatientPortalComponentComponent_div_23_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.disease);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.history);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.doctorID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.doctorList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.patientNoData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.patientNoData);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], styles: [".patient-detail[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n\n.doctor-list[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 80% !important;\n  margin: auto !important;\n}\n\n.patient-detail[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: block;\n  margin: 15px;\n}\n\n.patient-detail[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-top: 50px !important;\n  margin: auto;\n  text-align: center;\n  width: 200px;\n  justify-content: center;\n  align-items: center;\n}\n\n.doctor-wrapper[_ngcontent-%COMP%] {\n  display: none;\n  background-color: \"white\";\n  width: 100%;\n  height: 100%;\n}\n\n.doctor[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n  height: 100%;\n}\n\n.center-align[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.row-null[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n.col-null[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n.patient-list-txt[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.patient-list-txt[_ngcontent-%COMP%] {\n  justify-content: center;\n  background-color: lightgrey;\n  align-items: center;\n  display: flex;\n}\n\n.back[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 70px;\n  height: 30px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  margin-top: 10px;\n  margin-left: 10px;\n  background-color: darkgrey;\n  color: white;\n}\n\n.custom-card[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC1wb3J0YWwtY29tcG9uZW50L3BhdGllbnQtcG9ydGFsLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFDTjs7QUFDRTtFQUNFLHFCQUFBO0VBQ0UsdUJBQUE7QUFFTjs7QUFBTTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FBR1Y7O0FBRE07RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSVY7O0FBRE07RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUlSOztBQUZNO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBS1I7O0FBSE07RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQU1SOztBQUhNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFNUjs7QUFITTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBTVI7O0FBSk07RUFDRSxlQUFBO0FBT1I7O0FBTE07RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBUU47O0FBTEU7RUFDRSxlQUFBO0VBQ0YsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUFRRjs7QUFOTTtFQUNFLHdFQUFBO0VBQ0EscURBQUE7QUFTUiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtcG9ydGFsLWNvbXBvbmVudC9wYXRpZW50LXBvcnRhbC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGF0aWVudC1kZXRhaWx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIH1cclxuICAuZG9jdG9yLWxpc3QgZm9ybSB7XHJcbiAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAgICAgLnBhdGllbnQtZGV0YWlsIGZvcm0gaW5wdXQge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnBhdGllbnQtZGV0YWlsIGZvcm17XHJcbiAgICAgIG1hcmdpbi10b3A6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5kb2N0b3Itd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIndoaXRlXCI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5kb2N0b3Ige1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5jZW50ZXItYWxpZ24ge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAucm93LW51bGwge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuY29sLW51bGwge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgfVxyXG4gICAgICAucGF0aWVudC1saXN0LXR4dCBoNHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnBhdGllbnQtbGlzdC10eHQge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICBcclxuICAuYmFja3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogNzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiAgICAgIC5jdXN0b20tY2FyZCB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xyXG4gICAgICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientPortalComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-patient-portal-component',
                templateUrl: './patient-portal-component.component.html',
                styleUrls: ['./patient-portal-component.component.scss']
            }]
    }], function () { return [{ type: _service_patient_service_service__WEBPACK_IMPORTED_MODULE_1__["PatientServiceService"] }, { type: _service_doctor_service_service__WEBPACK_IMPORTED_MODULE_2__["DoctorServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/doctor-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/doctor-service.service.ts ***!
  \***************************************************/
/*! exports provided: DoctorServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorServiceService", function() { return DoctorServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class DoctorServiceService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "http://localhost:8080/doctor/";
    }
    getDoctorList() {
        return this.http.get(`${this.baseUrl}details`);
    }
    addDoctor(data) {
        return this.http.post(`${this.baseUrl}add`, data);
    }
    updateDoctor(data) {
        return this.http.post(`${this.baseUrl}update`, data);
    }
    deleteDoctor(id) {
        return this.http.get(`${this.baseUrl}delete?id=${id}`);
    }
}
DoctorServiceService.ɵfac = function DoctorServiceService_Factory(t) { return new (t || DoctorServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DoctorServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DoctorServiceService, factory: DoctorServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/patient-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/patient-service.service.ts ***!
  \****************************************************/
/*! exports provided: PatientServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientServiceService", function() { return PatientServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class PatientServiceService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "http://localhost:8080/patient/";
    }
    getPatientList() {
        return this.http.get(`${this.baseUrl}details`);
    }
    addPatient(data) {
        return this.http.post(`${this.baseUrl}add`, data);
    }
    updatePatient(data) {
        return this.http.post(`${this.baseUrl}update`, data);
    }
    deletePatient(id) {
        return this.http.get(`${this.baseUrl}delete?id=${id}`);
    }
}
PatientServiceService.ɵfac = function PatientServiceService_Factory(t) { return new (t || PatientServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PatientServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PatientServiceService, factory: PatientServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\hospital-management\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map