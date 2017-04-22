import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Product } from '../Fourth_Component/product.interface';

@Injectable()
export class ProductService {

    constructor(private _http: Http) {}

    create(formData: any): Observable<Product>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post('api/Combiners', JSON.stringify(formData), options)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    update(formData: any): Observable<Product> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.put('api/Products', JSON.stringify(formData), options)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    getProducts(): Observable<Product[]> {
        return this._http.get('api/Products')
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }


    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    }
}