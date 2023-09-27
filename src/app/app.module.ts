import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { register } from 'swiper/element/bundle';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { RouterModule, Routes } from '@angular/router';
import { ListaServiciosComponent } from './lista-servicios/lista-servicios.component';
import { CableFibraComponent } from './lista-servicios/cable-fibra/cable-fibra.component';
import { RedesElectricasComponent } from './lista-servicios/redes-electricas/redes-electricas.component';
import { WifiComponent } from './lista-servicios/wifi/wifi.component';
import { OutsourcingComponent } from './lista-servicios/outsourcing/outsourcing.component';
import { CctvComponent } from './lista-servicios/cctv/cctv.component';
import { CoberturaComponent } from './lista-servicios/cobertura/cobertura.component';
import { CertificacionesComponent } from './lista-servicios/certificaciones/certificaciones.component';
import { ControlAccesoComponent } from './lista-servicios/control-acceso/control-acceso.component';
import { DataCenterComponent } from './lista-servicios/data-center/data-center.component';
import { DesarrolloWebComponent } from './lista-servicios/desarrollo-web/desarrollo-web.component';
register();

const appRoutes:Routes=[
  {path:'', component:HomeComponent },
  {path:'servicios', component:ListaServiciosComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'servicios/cable-fibra', component:CableFibraComponent},
  {path:'servicios/cctv', component:CctvComponent},
  {path:'servicios/certificaciones', component:CertificacionesComponent},
  {path:'servicios/cobertura', component:CoberturaComponent},
  {path:'servicios/control-acceso', component:ControlAccesoComponent},
  {path:'servicios/data-center', component:DataCenterComponent},
  {path:'servicios/desarrollo-web', component:DesarrolloWebComponent},
  {path:'servicios/outsourcing', component:OutsourcingComponent},
  {path:'servicios/redes-electricas', component:RedesElectricasComponent},
  {path:'servicios/wifi', component:WifiComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NosotrosComponent,
    ContactoComponent,
    FooterComponent,
    ListaServiciosComponent,
    CableFibraComponent,
    RedesElectricasComponent,
    WifiComponent,
    OutsourcingComponent,
    CctvComponent,
    CoberturaComponent,
    CertificacionesComponent,
    ControlAccesoComponent,
    DataCenterComponent,
    DesarrolloWebComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
