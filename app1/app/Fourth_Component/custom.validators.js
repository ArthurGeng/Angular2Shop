"use strict";
var CustomValidators = (function () {
    function CustomValidators() {
    }
    CustomValidators.inStock = function (control) {
        console.log("2");
        return (control.value == "true" || control.value == "false") ? null : { valid: false };
    };
    return CustomValidators;
}());
exports.CustomValidators = CustomValidators;
//# sourceMappingURL=custom.validators.js.map