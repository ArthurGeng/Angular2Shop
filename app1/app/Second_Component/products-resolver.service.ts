import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Injectable()
export class ProductsResolver implements Resolve<any> {

    constructor(private productsService: ProductsService) { }

    //Observable
    resolve() {
        return this.productsService.getProducts();
    }
}