import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPetComponent } from './report-pet.component';

describe('ReportPetComponent', () => {
  let component: ReportPetComponent;
  let fixture: ComponentFixture<ReportPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
