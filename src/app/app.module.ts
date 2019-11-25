import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatBadgeModule, MatDialogModule } from '@angular/material';
import { HelpComponent } from './help/help.component';
import { NavbarProductsComponent } from './navbar-products/navbar-products.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AppComponent, HomeComponent, ProductsComponent, MenuComponent, HelpComponent, NavbarProductsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule,
    MatDialogModule,
    NgbPaginationModule
  ],
  entryComponents: [HelpComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
