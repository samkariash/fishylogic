import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';

import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import {CustomerService} from './shared/customer.service';


import {environment} from '../environments/environment';

import { HomeComponent } from './home/home.component';
import { GitComponent } from './git/git.component';
import { RegistrationComponent } from './registration/registration/registration.component';
import { AboutmeComponent } from './about/aboutme/aboutme.component';
import { TestersjavaComponent } from './java-for-testers/testersjava/testersjava.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact/contact.component';
import { BackupComponent } from './backup/backup.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerListComponent,
    HomeComponent,
    GitComponent,
    RegistrationComponent,
    AboutmeComponent,
    TestersjavaComponent,
    ServicesComponent,
    ContactComponent,
    BackupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [CustomerService],
 bootstrap: [AppComponent]
 //bootstrap:[HomeComponent]
})
export class AppModule { }
