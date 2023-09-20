import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreAtariaComponent } from './sobre-ataria.component';

describe('SobreAtariaComponent', () => {
  let component: SobreAtariaComponent;
  let fixture: ComponentFixture<SobreAtariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SobreAtariaComponent]
    });
    fixture = TestBed.createComponent(SobreAtariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
