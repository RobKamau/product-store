import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app/app-routing.module';  // Ensure your routes are set up here

platformBrowserDynamic()
  .bootstrapModule(AppComponent, {
    providers: [importProvidersFrom(BrowserModule, RouterModule, AppRoutingModule)],
  })
  .catch((err: any) => console.error(err));
