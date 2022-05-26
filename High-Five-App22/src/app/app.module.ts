import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProdutoComponent } from './components/produto/produto.component';
import { AvaliacaoComponent } from './components/avaliacao/avaliacao.component';
import { HomeComponent } from './components/home/home.component';
import { RequestComponent } from './components/request/request.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductReviewComponent } from './components/product-review/product-review.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSlider, MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    AvaliacaoComponent,
    HomeComponent,
    RequestComponent,
    ProductDetailsComponent,
    ProductReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatSlider,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
