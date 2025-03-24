import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Import your routing module
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule], // Include BrowserModule and AppRoutingModule here
  providers: [],
  bootstrap: [AppComponent],  // Bootstrap AppComponent
})
export class AppModule {}