"use strict";
var first_component_1 = require("./First_Component/first.component");
var second_component_1 = require("./Second_Component/second.component");
var third_component_1 = require("./Third_Component/third.component");
var fourth_component_1 = require("./Fourth_Component/fourth.component");
var productDetails_1 = require("./productDetails/productDetails");
exports.routes = [
    { path: 'First', component: first_component_1.FirstComponent },
    { path: 'Products', component: second_component_1.SecondComponent },
    { path: 'Third', component: third_component_1.ThirdComponent },
    { path: 'AddProduct', component: fourth_component_1.FourthComponent },
    { path: 'ProductDetails/:id', component: productDetails_1.ProductDetails }
];
//# sourceMappingURL=app.routes.js.map