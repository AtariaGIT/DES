import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoberturaComponent } from './cobertura.component';

describe('CoberturaComponent', () => {
  let component: CoberturaComponent;
  let fixture: ComponentFixture<CoberturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoberturaComponent]
    });
    fixture = TestBed.createComponent(CoberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
