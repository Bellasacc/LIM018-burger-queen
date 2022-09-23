import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { RequestNameClientComponent } from './components/request-name-client/request-name-client.component';
import { NavBarHeaderComponent } from './components/nav-bar-header/nav-bar-header.component';
import { RouterModule, Routes } from '@angular/router';
import { RequestOrderComponent } from './components/request-order/request-order.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { ModalBurgerComponent } from './components/modals/modal-burger/modal-burger.component';

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
    RequestOrderComponent,
    ModalBurgerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
