import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// third-party library
import { MaterialModule } from './material.module';

// Components s
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
     // import HttpClientModule after BrowserModule.
    HttpClientModule, 
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
