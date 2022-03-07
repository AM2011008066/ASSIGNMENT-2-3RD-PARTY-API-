import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { NewsapiService } from './newsapi.service';
import { WallstreetComponent } from './wallstreet/wallstreet.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopheadingComponent,
    WallstreetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule { }

