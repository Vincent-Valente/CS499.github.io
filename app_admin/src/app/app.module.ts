// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-router.module';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { AddTripComponent } from './add-trip/add-trip.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { SearchComponent } from './search/search.component';
import { SearchService } from './services/search.service';

@NgModule({ declarations: [
        AppComponent,
        SearchComponent,
        TripListingComponent,
        TripCardComponent,
        AddTripComponent,
        EditTripComponent,
        NavbarComponent,
        LoginComponent,
        HomeComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        SharedModule], 
    providers: [provideHttpClient(withInterceptorsFromDi()), SearchService] })
export class AppModule { }
