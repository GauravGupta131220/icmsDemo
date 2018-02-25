import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrjectMasterComponent } from './prject-master.component';

describe('PrjectMasterComponent', () => {
  let component: PrjectMasterComponent;
  let fixture: ComponentFixture<PrjectMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrjectMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrjectMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
