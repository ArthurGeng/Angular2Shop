"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var product_service_1 = require("../services/product.service");
var ThirdComponent = (function () {
    function ThirdComponent(_fb, _http, _productService) {
        this._fb = _fb;
        this._http = _http;
        this._productService = _productService;
    }
    ThirdComponent.prototype.ngOnInit = function () {
        this.updateForm = this._fb.group({
            ProductName: ['', forms_1.Validators.required],
            Price: ['', forms_1.Validators.required],
            InStock: ['', forms_1.Validators.required],
            ProductCompany: ['', forms_1.Validators.required]
        });
    };
    ThirdComponent.prototype.updateProduct = function () {
        if (this.updateForm.valid) {
            this._productService.update(this.updateForm.value)
                .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('yay put'); });
        }
    };
    return ThirdComponent;
}());
ThirdComponent = __decorate([
    core_1.Component({
        templateUrl: './app/Third_Component/third.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, http_1.Http, product_service_1.ProductService])
], ThirdComponent);
exports.ThirdComponent = ThirdComponent;
//# sourceMappingURL=third.component.js.map