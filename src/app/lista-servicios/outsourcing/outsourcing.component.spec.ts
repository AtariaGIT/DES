import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsourcingComponent } from './outsourcing.component';

describe('OutsourcingComponent', () => {
  let component: OutsourcingComponent;
  let fixture: ComponentFixture<OutsourcingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutsourcingComponent]
    });
    fixture = TestBed.createComponent(OutsourcingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
