
import { Observable } from 'rxjs/Observable';
import { Component, Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators ,FormBuilder} from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { CustomValidators } from './custom.validators';


@Component({
    selector: 'fourth-app',
    templateUrl: './app/Fourth_Component/fourthcomponent.html'
})

@Injectable()
export class FourthComponent implements OnInit {

   
    profileForm: FormGroup;

    //private ProductName: FormControl;
    //private Price: FormControl;
    //private InStock: FormControl;
    //private ProductCompany: FormControl;

    constructor(private http: Http, private router: Router, private _fb: FormBuilder) { }

    ngOnInit() {
        console.log("1");
        //this.ProductName = new FormControl('', [Validators.required, Validators.minLength(2)]);
        //this.Price = new FormControl('',Validators.required);
        //this.InStock = new FormControl('', [Validators.required, CustomValidators.inStock]);
        //this.ProductCompany = new FormControl('', [Validators.required, Validators.minLength(5)]);

        //this.profileForm = new FormGroup({
        //    ProductName: this.ProductName,
        //    Price: this.Price,
        //    InStock: this.InStock,
        //    ProductCompany: this.ProductCompany
        //});

        this.profileForm = this._fb.group({
            ProductName: ['', [Validators.required, Validators.minLength(2)]],
            Price: ['', Validators.required],
            InStock: ['', [Validators.required, CustomValidators.inStock]],
            ProductCompany: ['', [Validators.required, Validators.minLength(5)]]
        }); 
    }

    addProduct(): void {
        ////formValues.date = new Date();
        //console.log(formValues);
        console.log(this.profileForm.value);

        if (this.profileForm.valid) {
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });

            this.http.post('api/Combiners', JSON.stringify(this.profileForm.value), options)
                .map((res: Response) => res.json())
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