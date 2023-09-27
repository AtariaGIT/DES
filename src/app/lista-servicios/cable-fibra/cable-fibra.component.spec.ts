import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CableFibraComponent } from './cable-fibra.component';

describe('CableFibraComponent', () => {
  let component: CableFibraComponent;
  let fixture: ComponentFixture<CableFibraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CableFibraComponent]
    });
    fixture = TestBed.createComponent(CableFibraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
