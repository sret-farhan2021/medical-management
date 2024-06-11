import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoraddComponent } from './doctoradd.component';

describe('DoctoraddComponent', () => {
  let component: DoctoraddComponent;
  let fixture: ComponentFixture<DoctoraddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctoraddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctoraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
