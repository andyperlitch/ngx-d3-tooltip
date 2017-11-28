webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n  <h1>\n    ngx-d3-tooltip\n  </h1>\n  <p>\n     Add tooltips to your d3 visualizations using Angular Components.\n  </p>\n\n   <interactive-pie-chart [data]=\"pieData\"></interactive-pie-chart>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.pieData = [
            {
                id: 1,
                label: 'Foo',
                color: 'gold',
                amount: 35
            },
            {
                id: 2,
                label: 'Bar',
                color: 'steelblue',
                amount: 45
            },
            {
                id: 3,
                label: 'Baz',
                color: 'indianred',
                amount: 20
            }
        ];
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_d3_tooltip_d3_tooltip_module__ = __webpack_require__("../../../../../src/app/modules/d3-tooltip/d3-tooltip.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_interactive_pie_chart_interactive_pie_chart_component__ = __webpack_require__("../../../../../src/app/components/interactive-pie-chart/interactive-pie-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_slice_tooltip_slice_tooltip_component__ = __webpack_require__("../../../../../src/app/components/slice-tooltip/slice-tooltip.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_interactive_pie_chart_interactive_pie_chart_component__["a" /* InteractivePieChartComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_slice_tooltip_slice_tooltip_component__["a" /* SliceTooltipComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__modules_d3_tooltip_d3_tooltip_module__["a" /* D3TooltipModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_5__components_slice_tooltip_slice_tooltip_component__["a" /* SliceTooltipComponent */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/interactive-pie-chart/interactive-pie-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "interactive-pie-chart {\n  display: block;\n}\ninteractive-pie-chart path.slice {\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/interactive-pie-chart/interactive-pie-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"pie-chart-target col-sm-4\">\n    \n  </div>\n\n  <div class=\"col-sm-8\">\n    <div *ngIf=\"selected\" class=\"card\">\n      <div class=\"card-header\">\n        <pre>{{ selected | json }}</pre>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/interactive-pie-chart/interactive-pie-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractivePieChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_d3_tooltip_d3_tooltip_module__ = __webpack_require__("../../../../../src/app/modules/d3-tooltip/d3-tooltip.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slice_tooltip_slice_tooltip_component__ = __webpack_require__("../../../../../src/app/components/slice-tooltip/slice-tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3__ = __webpack_require__("../../../../d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InteractivePieChartComponent = (function () {
    function InteractivePieChartComponent(el, tipService) {
        var _this = this;
        this.el = el;
        this.data = [];
        this.radius = 130;
        this.margin = { left: 30, right: 30, top: 30, bottom: 30 };
        // Create the arc function
        this.arc = __WEBPACK_IMPORTED_MODULE_3_d3__["a" /* arc */]()
            .cornerRadius(5)
            .padAngle(0.05)
            .innerRadius(this.radius / 2)
            .outerRadius(this.radius)
            .startAngle(function (d) { return d.startAngle; })
            .endAngle(function (d) { return d.endAngle; });
        this.highlightArc = __WEBPACK_IMPORTED_MODULE_3_d3__["a" /* arc */]()
            .cornerRadius(5)
            .padAngle(0.05)
            .innerRadius(this.radius / 2 + 5)
            .outerRadius(this.radius + 20)
            .startAngle(function (d) { return d.startAngle; })
            .endAngle(function (d) { return d.endAngle; });
        this.sliceTooltip = tipService.createFromComponent(__WEBPACK_IMPORTED_MODULE_2__slice_tooltip_slice_tooltip_component__["a" /* SliceTooltipComponent */], function (slice) {
            return { slice: slice };
        }, function () {
            return { select: function (d) {
                    _this.selected = d;
                } };
        }, {
            position: 'bottomRight'
        });
    }
    // ngAfterViewInit() {
    InteractivePieChartComponent.prototype.ngOnInit = function () {
        // Set up svg root elements
        var target = this.el.nativeElement.querySelector('.pie-chart-target');
        this.svg = __WEBPACK_IMPORTED_MODULE_3_d3__["d" /* select */](this.el.nativeElement.querySelector('.pie-chart-target'))
            .append('svg');
        this.cnv = this.svg.append('g');
        // Set initial dimensions
        this.updateCanvasDimensions();
        this.render();
    };
    InteractivePieChartComponent.prototype.ngOnChanges = function () {
        this.render();
    };
    InteractivePieChartComponent.prototype.render = function () {
        if (!this.data || !this.svg || !this.cnv) {
            return;
        }
        // cache this for later
        var self = this;
        // calculate total
        var total = 0;
        this.data.forEach(function (d) { return total += d.amount; });
        var amountToRadians = function (amount) {
            return (amount * (Math.PI * 2)) / total;
        };
        // clone each point and add start and end angle info
        var lastPoint = 0;
        var data = this.data.map(function (d) {
            var clone = Object.assign({
                startAngle: amountToRadians(lastPoint),
                endAngle: amountToRadians(lastPoint + d.amount)
            }, d);
            lastPoint += d.amount;
            return clone;
        });
        // BIND/JOIN
        var slice = this.cnv.selectAll('path.slice')
            .data(data, function (d) { return d.id; });
        // EXIT
        slice.exit()
            .transition()
            .style('opacity', 0)
            .remove();
        // ENTER
        var newSlice = slice.enter()
            .append('path')
            .classed('slice', true)
            .attr('fill', function (d) { return d.color; })
            .attr('d', this.arc)
            .call(this.highlightSlice, this)
            .call(this.sliceTooltip);
        // MERGE
        slice = newSlice.merge(slice);
        // ENTER+UPDATE
    };
    InteractivePieChartComponent.prototype.highlightSlice = function (selection, self) {
        selection
            .on('mouseenter', function (d) {
            __WEBPACK_IMPORTED_MODULE_3_d3__["d" /* select */](this)
                .transition()
                .ease(__WEBPACK_IMPORTED_MODULE_3_d3__["b" /* easeBack */])
                .attr('d', self.highlightArc);
        })
            .on('mouseleave', function (d) {
            __WEBPACK_IMPORTED_MODULE_3_d3__["d" /* select */](this)
                .transition()
                .ease(__WEBPACK_IMPORTED_MODULE_3_d3__["b" /* easeBack */])
                .attr('d', self.arc);
        });
    };
    InteractivePieChartComponent.prototype.updateCanvasDimensions = function () {
        var outerWidth = this.radius * 2 + this.margin.left + this.margin.right;
        var outerHeight = this.radius * 2 + this.margin.top + this.margin.bottom;
        this.svg
            .attr('width', outerWidth)
            .attr('height', outerHeight);
        this.cnv
            .attr('transform', "translate(" + outerWidth / 2 + ", " + outerHeight / 2 + ")");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], InteractivePieChartComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], InteractivePieChartComponent.prototype, "radius", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], InteractivePieChartComponent.prototype, "margin", void 0);
    InteractivePieChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'interactive-pie-chart',
            template: __webpack_require__("../../../../../src/app/components/interactive-pie-chart/interactive-pie-chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/interactive-pie-chart/interactive-pie-chart.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__modules_d3_tooltip_d3_tooltip_module__["b" /* D3TooltipService */]])
    ], InteractivePieChartComponent);
    return InteractivePieChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/slice-tooltip/slice-tooltip.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: 300px;\n  display: block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/slice-tooltip/slice-tooltip.component.html":
/***/ (function(module, exports) {

module.exports = "<h5 [style.color]=\"slice.color\">{{ slice.label }}</h5>\n<p>\n  amount: <strong>{{ slice.amount }}</strong><br>\n  <a href=\"javascript:void(0)\" (click)=\"onSliceSelect()\">Select</a>\n</p>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/slice-tooltip/slice-tooltip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliceTooltipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliceTooltipComponent = (function () {
    function SliceTooltipComponent() {
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    SliceTooltipComponent.prototype.onSliceSelect = function () {
        this.select.emit(this.slice);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], SliceTooltipComponent.prototype, "slice", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], SliceTooltipComponent.prototype, "select", void 0);
    SliceTooltipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'slice-tooltip',
            template: __webpack_require__("../../../../../src/app/components/slice-tooltip/slice-tooltip.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/slice-tooltip/slice-tooltip.component.css")]
        })
    ], SliceTooltipComponent);
    return SliceTooltipComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/d3-tooltip/d3-tooltip-host.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3TooltipHostDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var D3TooltipHostDirective = (function () {
    function D3TooltipHostDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    D3TooltipHostDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[d3TooltipHost]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */]])
    ], D3TooltipHostDirective);
    return D3TooltipHostDirective;
}());



/***/ }),

/***/ "../../../../../src/app/modules/d3-tooltip/d3-tooltip.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "d3-tooltip {\n  position: absolute;\n  width: 0;\n  height: 0;\n  overflow: visible;\n  display: block;\n}\nd3-tooltip .ngx-d3-tooltip {\n  display: inline-block;\n  position: relative;\n  background-color: #fff;\n  border-color: #CCC;\n  border-radius: 2px;\n  box-shadow: 0 1px 10px -3px rgba(0,0,0,0.3);\n  padding: 0.5rem 1rem;\n  opacity: 0;\n  transition: opacity 0.2s ease-in;\n  border: 1px solid #00000020;\n}\nd3-tooltip .ngx-d3-tooltip.ngx-d3-tooltip_visible {\n  opacity: 1;\n}\nd3-tooltip .ngx-d3-tooltip .arrow {\n  position: absolute;\n  display: block;\n  width: .8rem;\n  height: .4rem;\n}\nd3-tooltip .ngx-d3-tooltip .arrow::before, d3-tooltip .ngx-d3-tooltip .arrow::after {\n  position: absolute;\n  display: block;\n  border-color: #0000;\n  border-style: solid;\n  content: '';\n  border-width: 10px;\n}\n/* TOP */\nd3-tooltip .ngx-d3-tooltip.top {\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  position: absolute;\n  left: 0;\n  bottom: 20px;\n}\n\nd3-tooltip .ngx-d3-tooltip.top .arrow {\n  bottom: 0;\n  left: 50%;\n}\n\nd3-tooltip .ngx-d3-tooltip.top .arrow::before {\n  bottom: -20px;\n  margin-left: -10px;\n  border-top-color: #00000040;\n}\n\nd3-tooltip .ngx-d3-tooltip.top .arrow::after {\n  bottom: -19px;\n  margin-left: -10px;\n  border-top-color: #fff;\n}\n\n/* BOTTOM */\nd3-tooltip .ngx-d3-tooltip.bottom {\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  position: absolute;\n  left: 0;\n  top: 20px;\n}\n\nd3-tooltip .ngx-d3-tooltip.bottom .arrow {\n  top: 0;\n  left: 50%;\n}\n\nd3-tooltip .ngx-d3-tooltip.bottom .arrow::before {\n  top: -20px;\n  margin-left: -10px;\n  border-bottom-color: #00000040;\n}\n\nd3-tooltip .ngx-d3-tooltip.bottom .arrow::after {\n  top: -19px;\n  margin-left: -10px;\n  border-bottom-color: #fff;\n}\n/* LEFT */\nd3-tooltip .ngx-d3-tooltip.left {\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  position: absolute;\n  right: 20px;\n  top: 0;\n}\n\nd3-tooltip .ngx-d3-tooltip.left .arrow {\n  right: 0;\n  top: 50%;\n}\n\nd3-tooltip .ngx-d3-tooltip.left .arrow::before {\n  right: -20px;\n  margin-top: -10px;\n  border-left-color: #00000040;\n}\n\nd3-tooltip .ngx-d3-tooltip.left .arrow::after {\n  right: -19px;\n  margin-top: -10px;\n  border-left-color: #fff;\n}\n\n/* RIGHT */\nd3-tooltip .ngx-d3-tooltip.right {\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  position: absolute;\n  left: 20px;\n  top: 0;\n}\n\nd3-tooltip .ngx-d3-tooltip.right .arrow {\n  left: 0;\n  top: 50%;\n}\n\nd3-tooltip .ngx-d3-tooltip.right .arrow::before {\n  left: -20px;\n  margin-top: -10px;\n  border-right-color: #00000040;\n}\n\nd3-tooltip .ngx-d3-tooltip.right .arrow::after {\n  left: -19px;\n  margin-top: -10px;\n  border-right-color: #fff;\n}\n\n/* TOPRIGHT */\nd3-tooltip .ngx-d3-tooltip.topRight {\n  position: absolute;\n  left: -15px;\n  bottom: 20px;\n}\n\nd3-tooltip .ngx-d3-tooltip.topRight .arrow {\n  bottom: 0;\n  left: 15px;\n}\n\nd3-tooltip .ngx-d3-tooltip.topRight .arrow::before {\n  bottom: -20px;\n  margin-left: -10px;\n  border-top-color: #00000040;\n}\n\nd3-tooltip .ngx-d3-tooltip.topRight .arrow::after {\n  bottom: -19px;\n  margin-left: -10px;\n  border-top-color: #fff;\n}\n\n/* TOPLEFT */\nd3-tooltip .ngx-d3-tooltip.topLeft {\n  position: absolute;\n  right: -15px;\n  bottom: 20px;\n}\n\nd3-tooltip .ngx-d3-tooltip.topLeft .arrow {\n  bottom: 0;\n  right: 15px;\n}\n\nd3-tooltip .ngx-d3-tooltip.topLeft .arrow::before {\n  bottom: -20px;\n  margin-right: -10px;\n  border-top-color: #00000040;\n}\n\nd3-tooltip .ngx-d3-tooltip.topLeft .arrow::after {\n  bottom: -19px;\n  margin-right: -10px;\n  border-top-color: #fff;\n}\n/* BOTTOMRIGHT */\nd3-tooltip .ngx-d3-tooltip.bottomRight {\n  position: absolute;\n  left: -15px;\n  top: 25px;\n}\n\nd3-tooltip .ngx-d3-tooltip.bottomRight .arrow {\n  top: 0;\n  left: 15px;\n}\n\nd3-tooltip .ngx-d3-tooltip.bottomRight .arrow::before {\n  top: -20px;\n  margin-left: -10px;\n  border-bottom-color: #00000040;\n}\n\nd3-tooltip .ngx-d3-tooltip.bottomRight .arrow::after {\n  top: -19px;\n  margin-left: -10px;\n  border-bottom-color: #fff;\n}\n\n/* BOTTOMLEFT */\nd3-tooltip .ngx-d3-tooltip.bottomLeft {\n  position: absolute;\n  right: -15px;\n  top: 25px;\n}\n\nd3-tooltip .ngx-d3-tooltip.bottomLeft .arrow {\n  top: 0;\n  right: 15px;\n}\n\nd3-tooltip .ngx-d3-tooltip.bottomLeft .arrow::before {\n  top: -20px;\n  margin-right: -10px;\n  border-bottom-color: #00000040;\n}\n\nd3-tooltip .ngx-d3-tooltip.bottomLeft .arrow::after {\n  top: -19px;\n  margin-right: -10px;\n  border-bottom-color: #fff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/d3-tooltip/d3-tooltip.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ngx-d3-tooltip {{ cssClasses }}\" [ngClass]=\"{ 'ngx-d3-tooltip_visible': isVisible }\">\n  <div class=\"arrow\"></div>\n  <ng-template d3TooltipHost></ng-template>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modules/d3-tooltip/d3-tooltip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3TooltipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3_tooltip_host_directive__ = __webpack_require__("../../../../../src/app/modules/d3-tooltip/d3-tooltip-host.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var D3TooltipComponent = (function () {
    function D3TooltipComponent(cfr) {
        this.cfr = cfr;
        /**
         * Controls a class which sets the element opacity to 1 when present.
         */
        this.isVisible = false;
    }
    Object.defineProperty(D3TooltipComponent.prototype, "cssTop", {
        get: function () {
            return this.position.top + "px";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(D3TooltipComponent.prototype, "cssLeft", {
        get: function () {
            return this.position.left + "px";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(D3TooltipComponent.prototype, "cssClasses", {
        get: function () {
            return this.options.position + " " + this.options.cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    D3TooltipComponent.prototype.loadComponent = function () {
        var _this = this;
        var componentFactory = this.cfr.resolveComponentFactory(this.component);
        var viewContainerRef = this.componentHost.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        Object.keys(this.inputs).forEach(function (k) {
            componentRef.instance[k] = _this.inputs[k];
        });
        Object.keys(this.outputs).forEach(function (k) {
            componentRef.instance[k].subscribe(_this.outputs[k]);
        });
    };
    D3TooltipComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.isVisible = true;
        }, 1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], D3TooltipComponent.prototype, "component", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], D3TooltipComponent.prototype, "position", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], D3TooltipComponent.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], D3TooltipComponent.prototype, "inputs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], D3TooltipComponent.prototype, "outputs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__d3_tooltip_host_directive__["a" /* D3TooltipHostDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__d3_tooltip_host_directive__["a" /* D3TooltipHostDirective */])
    ], D3TooltipComponent.prototype, "componentHost", void 0);
    D3TooltipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'd3-tooltip',
            template: __webpack_require__("../../../../../src/app/modules/d3-tooltip/d3-tooltip.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/d3-tooltip/d3-tooltip.component.css")],
            host: {
                '[style.top]': 'position.top + \'px\'',
                '[style.left]': 'position.left + \'px\''
            },
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */]])
    ], D3TooltipComponent);
    return D3TooltipComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/d3-tooltip/d3-tooltip.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3TooltipModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__d3_tooltip_component__ = __webpack_require__("../../../../../src/app/modules/d3-tooltip/d3-tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__d3_tooltip_service__ = __webpack_require__("../../../../../src/app/modules/d3-tooltip/d3-tooltip.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__d3_tooltip_host_directive__ = __webpack_require__("../../../../../src/app/modules/d3-tooltip/d3-tooltip-host.directive.ts");
/* unused harmony reexport D3TooltipHostDirective */
/* unused harmony reexport D3TooltipComponent */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__d3_tooltip_service__["a"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var D3TooltipModule = (function () {
    function D3TooltipModule() {
    }
    D3TooltipModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__d3_tooltip_component__["a" /* D3TooltipComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__d3_tooltip_component__["a" /* D3TooltipComponent */], __WEBPACK_IMPORTED_MODULE_4__d3_tooltip_host_directive__["a" /* D3TooltipHostDirective */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__d3_tooltip_service__["a" /* D3TooltipService */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__d3_tooltip_component__["a" /* D3TooltipComponent */]]
        })
    ], D3TooltipModule);
    return D3TooltipModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/d3-tooltip/d3-tooltip.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3TooltipService; });
/* unused harmony export DEFAULT_OPTIONS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__("../../../../d3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__d3_tooltip_component__ = __webpack_require__("../../../../../src/app/modules/d3-tooltip/d3-tooltip.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * The injectable class with methods that allow for d3 tooltip creation. Injectable as `d3TooltipService`.
 */
var D3TooltipService = (function () {
    function D3TooltipService(cfr, appRef, injector) {
        this.cfr = cfr;
        this.appRef = appRef;
        this.injector = injector;
    }
    /**
     * This method returns a function that can be called with d3.Selection.call(). It adds
     * a tooltip/popover to the selection's elements which instantiates and inserts a component
     * specified by the first parameter.
     *
     * @param component The component class to insert into the tooltip
     * @param inputsFactory A function which returns an object for input values to the component
     * @param options Options for the returned tooltip function
     */
    D3TooltipService.prototype.createFromComponent = function (component, inputsFactory, outputsFactory, options) {
        if (inputsFactory === void 0) { inputsFactory = function (d) { return {}; }; }
        if (outputsFactory === void 0) { outputsFactory = function () { return {}; }; }
        if (options === void 0) { options = {}; }
        var d3TooltipService = this;
        options = Object.assign({}, DEFAULT_OPTIONS, options);
        return function (selection) {
            // the timer id for the timer set to open the tooltip
            var openDelayTimeout;
            var offDelayTimeout;
            // component reference to the opened tooltip if there is one
            var openTooltipRef;
            var elementThatTriggeredTooltip;
            // object which stores the coordinates to anchor the tooltip
            var position;
            // the intermittent event handler for window mousemoves,
            // added when options.location is 'mouse'
            var mousemove = function (event) {
                position.top = event.pageY;
                position.left = event.pageX;
            };
            // add the d3 handlers
            selection
                .on('mouseenter.ngx_d3_tooltip', function (d) {
                // Cache the element
                var el = this;
                // Check if this tooltip is already open.
                // If so, abort removal and leave.
                if (el === elementThatTriggeredTooltip) {
                    clearTimeout(offDelayTimeout);
                    return;
                }
                // Remove any previous mousemove listener
                window.removeEventListener('mousemove', mousemove);
                // Reset the previous position
                position = {
                    top: 0,
                    left: 0
                };
                // Get the anchor point in the document:
                // 'mouse'
                if (options.location === 'mouse') {
                    // set initial coords from mouseenter event
                    mousemove(__WEBPACK_IMPORTED_MODULE_0_d3__["c" /* event */]);
                    // update coords to open with as mouse moves within element
                    window.addEventListener('mousemove', mousemove);
                    // element
                }
                else if (options.location === 'element') {
                    // use the bounding rect of the element to set the position
                    var elDimensions = el.getBoundingClientRect();
                    position.left = elDimensions.left + elDimensions.width / 2;
                    position.top = elDimensions.top + elDimensions.height / 2;
                }
                // Clear any previous timer to open a popup and start a new one
                if (openDelayTimeout != null) {
                    clearTimeout(openDelayTimeout);
                }
                openDelayTimeout = setTimeout(function () {
                    // Remove the mousemove listener
                    window.removeEventListener('mousemove', mousemove);
                    // Remove any old tooltip hanging around
                    if (openTooltipRef) {
                        d3TooltipService.removeTooltip(openTooltipRef);
                    }
                    // Show the tooltip
                    openTooltipRef = d3TooltipService.showTooltip(position, component, inputsFactory(d), outputsFactory(), options);
                    // Store the element for comparison in mouseleave
                    elementThatTriggeredTooltip = el;
                    // Listen for mouseenter on the tooltip to prevent closing it
                    var openTooltipEl = d3TooltipService.getDomElementFromComponentRef(openTooltipRef);
                    openTooltipEl
                        .addEventListener('mouseenter', function () {
                        clearTimeout(offDelayTimeout);
                    });
                    openTooltipEl
                        .addEventListener('mouseleave', function () {
                        offDelayTimeout = setTimeout(function () {
                            d3TooltipService.removeTooltip(openTooltipRef);
                            openTooltipRef = null;
                            elementThatTriggeredTooltip = null;
                        }, options.offDelay);
                    });
                }, options.delay);
            })
                .on('mouseleave.ngx_d3_tooltip', function (d) {
                // Clear any tracking
                window.removeEventListener('mousemove', mousemove);
                clearTimeout(openDelayTimeout);
                // If this is the element which is being left, initiate
                // removal. This may be cancelled by mouse entering tooltip
                if (openTooltipRef && elementThatTriggeredTooltip === this) {
                    offDelayTimeout = setTimeout(function () {
                        d3TooltipService.removeTooltip(openTooltipRef);
                        openTooltipRef = null;
                        elementThatTriggeredTooltip = null;
                    }, options.offDelay);
                }
            });
        };
    };
    /**
     * Displays the given component in a tooltip anchored
     * @param position The absolute coordinates of where the anchor for this tooltip is
     * @param component The component to instantiate
     * @param inputs The inputs to pass to the instantiated component
     * @param outputs The output subscribe handlers to attach to outputs
     * @param options Tooltip options object for further customization
     */
    D3TooltipService.prototype.showTooltip = function (position, component, inputs, outputs, options) {
        // credit: https://medium.com/@caroso1222/angular-pro-tip-how-to-dynamically-create-components-in-body-ba200cc289e6
        // 1. Create a component reference from the component 
        var componentRef = this.cfr
            .resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__d3_tooltip_component__["a" /* D3TooltipComponent */])
            .create(this.injector);
        // 2. Add any inputs and outputs
        var instance = componentRef.instance;
        instance.position = position;
        instance.options = options;
        instance.component = component;
        instance.inputs = inputs;
        instance.outputs = outputs;
        instance.loadComponent();
        // 3. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(componentRef.hostView);
        // 4. Get DOM element from component
        var domElem = this.getDomElementFromComponentRef(componentRef);
        // 5. Append DOM element to the body
        document.body.appendChild(domElem);
        return componentRef;
    };
    /**
     * Removes the given tooltip component reference.
     * @param tooltipRef The component reference of the open tooltip to remove
     */
    D3TooltipService.prototype.removeTooltip = function (tooltipRef) {
        var _this = this;
        tooltipRef.instance.isVisible = false;
        setTimeout(function () {
            _this.appRef.detachView(tooltipRef.hostView);
            tooltipRef.destroy();
        }, 1000);
    };
    // createFromTemplate(templateString: string) {
    // }
    /**
     * Given a component reference, returns the host DOM element.
     * @param componentRef The component reference whose DOM element will be returned
     */
    D3TooltipService.prototype.getDomElementFromComponentRef = function (componentRef) {
        return componentRef.hostView
            .rootNodes[0];
    };
    D3TooltipService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["f" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* Injector */]])
    ], D3TooltipService);
    return D3TooltipService;
}());

;
/**
 * The default tooltip options when not overridden.
 */
var DEFAULT_OPTIONS = {
    delay: 1000,
    offDelay: 1000,
    location: 'mouse',
    position: 'bottom',
    cssClasses: ''
};


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map