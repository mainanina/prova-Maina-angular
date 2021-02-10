import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlocksComponent } from './pages/blocks/blocks.component';
import { CardsComponent } from './pages/cards/cards.component';
import { FormsComponent } from './pages/forms/forms.component';
import { IndexComponent } from './pages/index/index.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BlocksComponent,
    CardsComponent,
    FormsComponent,
    IndexComponent,
    PricingComponent,
    HeaderComponent,
    FooterComponent,
    SidebarMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
