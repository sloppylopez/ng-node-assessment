import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';

import {AutocompleteComponent} from './app/autocomplete-component';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [AutocompleteComponent],
  declarations: [AutocompleteComponent],
  bootstrap: [AutocompleteComponent],
  providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
