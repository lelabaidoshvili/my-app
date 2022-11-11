import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { ErrorComponent } from './error/error.component';
import { ButtonsComponent } from './buttons/buttons.component';




@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    SuccessComponent,
    ErrorComponent,
    ButtonsComponent,
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
