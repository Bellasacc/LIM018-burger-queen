import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RequestNameClientComponent } from './request-name-client/request-name-client.component';
import { NavBarHeaderComponent } from './nav-bar-header/nav-bar-header.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path: 'hacer-pedido', 
    component: RequestNameClientComponent
  },
  {
    path: '', 
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    RequestNameClientComponent,
    NavBarHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
