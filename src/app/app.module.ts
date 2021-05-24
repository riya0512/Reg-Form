import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ErrorDirective } from './error.directive';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { CustomdatePipe } from './customdate.pipe';
import { FullnameComponent } from './fullname/fullname.component';
import { DatePipe } from './date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ErrorDirective,
    CustomdatePipe,
    FullnameComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2TelInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
