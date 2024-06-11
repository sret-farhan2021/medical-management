import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuberclosisComponent } from './tuberclosis.component';

describe('TuberclosisComponent', () => {
  let component: TuberclosisComponent;
  let fixture: ComponentFixture<TuberclosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuberclosisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuberclosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
