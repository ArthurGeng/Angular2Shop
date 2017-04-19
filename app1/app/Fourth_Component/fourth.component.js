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
var Observable_1 = require("rxjs/Observable");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
var FourthComponent = (function () {
    function FourthComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    FourthComponent.prototype.addProduct = function (formValues) {
        ////formValues.date = new Date();
        console.log(formValues);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.post('api/Combiners', JSON.stringify(formValues), options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('yay'); });
        //this.http.get('api/Products').map((res: Response) => <IProduct[]>res.json())
        //    .subscribe(
        //        data => console.log(data),
        //        err => console.log(err),
        //        () => console.log('yay')
        //    );
    };
    FourthComponent.prototype.cancel = function () {
        this.router.navigate(['Products']);
    };
    FourthComponent.prototype.handleError = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return FourthComponent;
}());
FourthComponent = __decorate([
    core_1.Component({
        selector: 'fourth-app',
        templateUrl: './app/Fourth_Component/fourthcomponent.html',
        styles: ['h2 {color:green; }']
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], FourthComponent);
exports.FourthComponent = FourthComponent;
//# sourceMappingURL=fourth.component.js.map