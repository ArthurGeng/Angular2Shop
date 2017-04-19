
import { Observable } from 'rxjs/Observable';
import { Component, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Component({
    selector: 'fourth-app',
    templateUrl: './app/Fourth_Component/fourthcomponent.html',
    styles: ['h2 {color:green; }']
})

@Injectable()
export class FourthComponent {

    constructor(private http:Http,private router:Router){}

    addProduct(formValues: any):void {

       
        ////formValues.date = new Date();
        console.log(formValues);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.post('api/Combiners', JSON.stringify(formValues), options)
            .map((res: Response) => res.json())
            .subscribe(
            data => console.log(data),
            err => console.log(err),
            () => console.log('yay')
        );
       
        //this.http.get('api/Products').map((res: Response) => <IProduct[]>res.json())
        //    .subscribe(
        //        data => console.log(data),
        //        err => console.log(err),
        //        () => console.log('yay')
        //    );
     
        
    }

    cancel() {
        this.router.navigate(['Products']);
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}