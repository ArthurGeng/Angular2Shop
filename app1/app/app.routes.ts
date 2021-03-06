﻿import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstComponent } from './First_Component/first.component';
import { SecondComponent } from './Second_Component/second.component';
import { ThirdComponent } from './Third_Component/third.component';
import { FourthComponent } from './Fourth_Component/fourth.component';
import { ProductDetails } from './productDetails/productDetails';

export const routes: Routes = [

    { path: 'First', component: FirstComponent },
    { path: 'Products', component: SecondComponent },
    { path: 'UpdateProduct', component: ThirdComponent },
    { path: 'AddProduct', component: FourthComponent },
    { path: 'ProductDetails/:id', component: ProductDetails }

];