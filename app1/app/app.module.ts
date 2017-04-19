import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './app.routes';
import { FirstComponent } from './First_Component/first.component';
import { SecondComponent } from './Second_Component/second.component';
import { ThirdComponent } from './Third_Component/third.component';
import { FourthComponent } from './Fourth_Component/fourth.component';
import { ProductDetails } from './productDetails/productDetails';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes, { useHash: true })],
    declarations: [AppComponent, FirstComponent, SecondComponent, ThirdComponent, FourthComponent, ProductDetails],
    bootstrap: [AppComponent]
})
export class AppModule { }