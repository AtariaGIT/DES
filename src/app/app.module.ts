import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './home/slider/slider.component';
import { ServiciosComponent } from './home/servicios/servicios.component';
import { SobreAtariaComponent } from './home/sobre-ataria/sobre-ataria.component';
import { SliderMarcasComponent } from './home/slider-marcas/slider-marcas.component';
import { ContactoComponent } from './home/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './nosotros/banner/banner.component';
import { QuienesSomosComponent } from './nosotros/quienes-somos/quienes-somos.component';
import { MisionVisionComponent } from './nosotros/mision-vision/mision-vision.component';
import { ValoresComponent } from './nosotros/valores/valores.component';
import { OpinionesComponent } from './nosotros/opiniones/opiniones.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    ServiciosComponent,
    SobreAtariaComponent,
    SliderMarcasComponent,
    ContactoComponent,
    FooterComponent,
    BannerComponent,
    QuienesSomosComponent,
    MisionVisionComponent,
    ValoresComponent,
    OpinionesComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
