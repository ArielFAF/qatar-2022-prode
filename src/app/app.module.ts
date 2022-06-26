import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';

import { NgxTwitterWidgetsModule } from "ngx-twitter-widgets";

// Componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AlertComponent } from './components/alert/alert.component';

// Servicios
import { LoginService } from './services/login.service';
import { CustomapiService } from './services/customapi.service';
import { AlertService } from './services/alert.service';
import { PrincipalComponent } from './components/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NgxTwitterWidgetsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireMessagingModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    CustomapiService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
