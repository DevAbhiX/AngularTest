import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoligonchartComponent } from './poligonchart.component';

describe('PoligonchartComponent', () => {
  let component: PoligonchartComponent;
  let fixture: ComponentFixture<PoligonchartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoligonchartComponent]
    });
    fixture = TestBed.createComponent(PoligonchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
