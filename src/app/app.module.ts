import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DragonModule } from './components/dragon/dragon.module';
import { SharedModule } from './components/shared/shared.module';
import { HomeModule } from './views/home/home.module';
import { LoginModule } from './views/login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,
    LoginModule,
    SharedModule,
    DragonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
