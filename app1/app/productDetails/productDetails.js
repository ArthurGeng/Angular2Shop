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
var http_1 = require("@angular/http");
var ProductDetails = (function () {
    function ProductDetails(route, http) {
        this.route = route;
        this.http = http;
        this.isDataAvailable = false;
    }
    ProductDetails.prototype.ngOnInit = function () {
        var _this = this;
        //+ Cast to number.We use this.event for linq server side query.
        this.event = +this.route.snapshot.params['id'];
        this.http.get('api/ProductDetails/' + this.event).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.productDetails = data;
            _this.isDataAvailable = true;
        }, function (err) { return console.log(err); }, function () { return console.log('yay'); });
    };
    ProductDetails.prototype.showData = function () {
        console.log(this.productDetails);
    };
    return ProductDetails;
}());
ProductDetails = __decorate([
    core_1.Component({
        selector: 'product-details',
        templateUrl: '/app/productDetails/productDetails.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, http_1.Http])
], ProductDetails);
exports.ProductDetails = ProductDetails;
//# sourceMappingURL=productDetails.js.map