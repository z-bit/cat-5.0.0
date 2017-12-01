import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app-routing';
import { AppMaterialModule } from './app-material';


import { AppComponent } from './items/app.component';
import { HomeContainer } from './_modules/home/items/cn_home.container';


@NgModule({
  declarations: [
    AppComponent,
    HomeContainer,

  ],
  imports: [
    BrowserModule,
    AppRouting,
    AppMaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
