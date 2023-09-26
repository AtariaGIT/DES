import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';

import { register } from 'swiper/element/bundle';
import { ServicioComponent } from './servicios/servicio.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
register();

const appRoutes:Routes=[
  {path:'', component:HomeComponent },
  {path:'servicios', component:ServicioComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'contacto', component:ContactoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NosotrosComponent,
    ContactoComponent,
    FooterComponent,
    ServicioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
