
import { Http, Response } from '@angular/http';
import { IProduct } from './product';
import { Component, Injectable, OnInit } from '@angular/core';


@Component({
    selector: 'second-app',
    templateUrl: './app/Second_Component/products.component.html'
    
})

@Injectable()
export class SecondComponent implements OnInit {

    products: any;

    constructor(private http: Http) {

    }


    ngOnInit() {
        this.http.get('api/Products').map((res: Response) => res.json())
            .subscribe(
            data => { console.log(data); this.products = data; },
            err => console.log(err),
            () => console.log('yay')
            );
    }


    //getProducts() {
    //    this.http.get('api/Products').map((res: Response) => res.json())
    //        .subscribe(
    //        data => console.log(data),
    //        err => console.log(err),
    //        () => console.log('yay')
    //        );
    //}

    getProducts() {
        console.log(this.products);
    }
}