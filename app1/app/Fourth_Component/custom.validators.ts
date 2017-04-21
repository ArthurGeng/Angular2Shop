import { FormControl } from '@angular/forms';

export class CustomValidators {

    static inStock(control: FormControl) {
        console.log("2");
        return control.value == "true" ? null : { valid: false };
    }
}