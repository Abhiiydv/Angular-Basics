import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { UserformComponent } from './Component/userform/userform.component';
import {HttpClientModule} from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { EllipsisPipe } from './ellipsis.pipe'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserformComponent,
    AboutUsComponent,
    PipedemoComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
