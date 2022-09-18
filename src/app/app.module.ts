import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RequestNameClientComponent } from './request-name-client/request-name-client.component';
import { NavBarHeaderComponent } from './nav-bar-header/nav-bar-header.component';
import { RouterModule, Routes } from '@angular/router';
import { RequestOrderComponent } from './request-order/request-order.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

const routes:Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'ingresar-nombre', 
    component: RequestNameClientComponent
  },
  {
    path: 'hacer-pedido', 
    component: RequestOrderComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    RequestNameClientComponent,
    NavBarHeaderComponent,
    RequestOrderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
