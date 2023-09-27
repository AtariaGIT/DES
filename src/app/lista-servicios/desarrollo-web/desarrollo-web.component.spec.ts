import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloWebComponent } from './desarrollo-web.component';

describe('DesarrolloWebComponent', () => {
  let component: DesarrolloWebComponent;
  let fixture: ComponentFixture<DesarrolloWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesarrolloWebComponent]
    });
    fixture = TestBed.createComponent(DesarrolloWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
