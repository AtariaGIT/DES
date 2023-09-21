import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMarcasComponent } from './slider-marcas.component';

describe('SliderMarcasComponent', () => {
  let component: SliderMarcasComponent;
  let fixture: ComponentFixture<SliderMarcasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderMarcasComponent]
    });
    fixture = TestBed.createComponent(SliderMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
