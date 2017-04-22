import { FormControl } from '@angular/forms';

export class CustomValidators {

    static inStock(control: FormControl) {
        console.log("2");
        return (control.value == "true" || control.value == "false") ? null : { valid: false };
    }
}