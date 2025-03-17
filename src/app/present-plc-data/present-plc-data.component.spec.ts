import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentPlcDataComponent } from './present-plc-data.component';

describe('PresentPlcDataComponent', () => {
  let component: PresentPlcDataComponent;
  let fixture: ComponentFixture<PresentPlcDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentPlcDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentPlcDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
