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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
var custom_validators_1 = require("./custom.validators");
var product_service_1 = require("../services/product.service");
var FourthComponent = (function () {
    function FourthComponent(router, _fb, _productService) {
        this.router = router;
        this._fb = _fb;
        this._productService = _productService;
    }
    FourthComponent.prototype.ngOnInit = function () {
        console.log("1");
        this.profileForm = this._fb.group({
            ProductName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            Price: ['', forms_1.Validators.required],
            InStock: ['', [forms_1.Validators.required, custom_validators_1.CustomValidators.inStock]],
            ProductCompany: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]]
        });
    };
    FourthComponent.prototype.addProduct = function () {
        if (this.profileForm.valid) {
            this._productService.create(this.profileForm.value)
                .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('yay post'); });
        }
        else {
            console.log("User input was invalid!");
        }
    };
    FourthComponent.prototype.cancel = function () {
        this.router.navigate(['Products']);
    };
    return FourthComponent;
}());
FourthComponent = __decorate([
    core_1.Component({
        selector: 'fourth-app',
        templateUrl: './app/Fourth_Component/fourthcomponent.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, forms_1.FormBuilder, product_service_1.ProductService])
], FourthComponent);
exports.FourthComponent = FourthComponent;
//# sourceMappingURL=fourth.component.js.map