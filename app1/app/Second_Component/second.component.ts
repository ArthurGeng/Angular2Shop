import { Component, Injectable, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';


@Component({
    selector: 'second-app',
    templateUrl: './app/Second_Component/products.component.html'

})

@Injectable()
export class SecondComponent implements OnInit {

    products: any;

    constructor(private _productService: ProductService) { }

    ngOnInit() {
        this._productService.getProducts()
            .subscribe(
            data => { console.log(data); this.products = data; },
            err => console.log(err),
            () => console.log('yay')
            );
    }

    getProducts() {
        console.log(this.products);
    }
}