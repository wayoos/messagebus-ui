import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { AppComponent, SettingsDialog } from './app.component';
@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    AppComponent,
    SettingsDialog
  ],
  entryComponents: [
    AppComponent,
    SettingsDialog
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
