import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SobreAtariaComponent } from './sobre-ataria/sobre-ataria.component';
import { SliderMarcasComponent } from './slider-marcas/slider-marcas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';

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
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
