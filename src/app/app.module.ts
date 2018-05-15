import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_ROUTING } from './app.routing';

import { HomeComponent } from './route/home/home.component';
import { HeaderComponent } from './route/header/header.component';
import { MainComponent } from './route/main/main.component';
import { FooterComponent } from './route/footer/footer.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        APP_ROUTING
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        MainComponent,
        FooterComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}