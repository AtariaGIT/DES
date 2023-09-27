import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesElectricasComponent } from './redes-electricas.component';

describe('RedesElectricasComponent', () => {
  let component: RedesElectricasComponent;
  let fixture: ComponentFixture<RedesElectricasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedesElectricasComponent]
    });
    fixture = TestBed.createComponent(RedesElectricasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
