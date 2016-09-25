import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdIconModule } from '@angular2-material/icon/icon';
import { MdButtonModule } from '@angular2-material/button/button';
import { MdSidenavModule } from '@angular2-material/sidenav/sidenav';
import { MdListModule } from '@angular2-material/list/list';
import { MdCardModule } from '@angular2-material/card/card';

import { MdIconRegistry } from '@angular2-material/icon/icon';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MdToolbarModule,
        MdIconModule,
        MdButtonModule,
        MdSidenavModule,
        MdListModule,
        MdCardModule
    ],
    providers: [ MdIconRegistry ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
