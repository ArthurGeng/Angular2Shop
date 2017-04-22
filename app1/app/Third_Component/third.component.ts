import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ProductService } from '../services/product.service';

@Component({
    templateUrl: './app/Third_Component/third.component.html'
})

export class ThirdComponent implements OnInit {
    updateForm: FormGroup;
    constructor(private _fb: FormBuilder, private _http: Http, private _productService: ProductService) { }
    ngOnInit() {
        this.updateForm = this._fb.group({
            ProductName: ['', Validators.required],
            Price: ['', Validators.required],
            InStock: ['', Validators.required],
            ProductCompany: ['', Validators.required]
        });
    }

    updateProduct() {
        if (this.updateForm.valid) {
            this._productService.update(this.updateForm.value)
                .subscribe(
                data => console.log(data),
                err => console.log(err),
                () => console.log('yay put')
                );
        }
    }
}