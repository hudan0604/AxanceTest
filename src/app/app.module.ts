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

@NgModule({
  declarations: [AppComponent, HomeComponent, ProductsComponent, MenuComponent, HelpComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule,
    MatDialogModule
  ],
  entryComponents: [HelpComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
