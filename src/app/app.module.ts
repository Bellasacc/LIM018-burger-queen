import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { RequestNameClientComponent } from './components/request-name-client/request-name-client.component';
import { NavBarHeaderComponent } from './components/nav-bar-header/nav-bar-header.component';
import { RouterModule, Routes } from '@angular/router';
import { RequestOrderComponent } from './components/request-order/request-order.component';
import { environment } from '../environments/environment';
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';
import { ModalBurgerComponent } from './components/modals/modal-burger/modal-burger.component';
import { ModalMessageComponent } from './components/modals/modal-message/modal-message.component';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';
import { KitchenOrdersComponent } from './components/kitchen-orders/kitchen-orders.component';

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
  {
    path: 'ver-pedidos',
    component: ViewOrdersComponent
  },
  {
    path: 'cocina',
    component: KitchenOrdersComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    RequestNameClientComponent,
    NavBarHeaderComponent,
    RequestOrderComponent,
    ModalBurgerComponent,
    ModalMessageComponent,
    ViewOrdersComponent,
    KitchenOrdersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    /* provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()), */
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
