import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtComponent } from './ot.component';

describe('OtComponent', () => {
  let component: OtComponent;
  let fixture: ComponentFixture<OtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtComponent]
    });
    fixture = TestBed.createComponent(OtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
