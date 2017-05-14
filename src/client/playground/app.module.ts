import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Location } from '@angular/common';
import { HeroFormComponent } from './hero-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    Location
  ],
  declarations: [
    AppComponent,
    HeroFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
