import { Component ,OnInit,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http,Response } from '@angular/http';

@Component({
    selector: 'product-details',
    templateUrl: '/app/productDetails/productDetails.html'
})


export class ProductDetails implements OnInit {

    event: any;
    productDetails: any;
    isDataAvailable: boolean = false;

    constructor(private route: ActivatedRoute,private http:Http) { }

    ngOnInit() {
        //+ Cast to number.We use this.event for linq server side query.
        this.event = +this.route.snapshot.params['id'];
        
        this.http.get('api/ProductDetails/' + this.event).map((res: Response) => res.json())
            .subscribe(
            data => {
                this.productDetails = data;
                this.isDataAvailable = true;
            },
            err => console.log(err),
            () => console.log('yay')
            );
    }

    showData() {
        console.log(this.productDetails);
    }

   
}