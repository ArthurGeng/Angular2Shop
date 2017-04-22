
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { CustomValidators } from './custom.validators';
import { ProductService } from '../services/product.service';


@Component({
    selector: 'fourth-app',
    templateUrl: './app/Fourth_Component/fourthcomponent.html'
})

export class FourthComponent implements OnInit {

    profileForm: FormGroup;

    constructor(private router: Router, private _fb: FormBuilder, private _productService: ProductService) { }

    ngOnInit() {
        console.log("1");
        this.profileForm = this._fb.group({
            ProductName: ['', [Validators.required, Validators.minLength(2)]],
            Price: ['', Validators.required],
            InStock: ['', [Validators.required, CustomValidators.inStock]],
            ProductCompany: ['', [Validators.required, Validators.minLength(5)]]
        });
    }

    addProduct(): void {
        if (this.profileForm.valid) {
            this._productService.create(this.profileForm.value)
                .subscribe(
                data => console.log(data),
                err => console.log(err),
                () => console.log('yay post')
                );
        }
        else {
            console.log("User input was invalid!");
        }
    }

    cancel() {
        this.router.navigate(['Products']);
    }
}