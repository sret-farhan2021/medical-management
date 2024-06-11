import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbdetailsComponent } from './tbdetails.component';

describe('TbdetailsComponent', () => {
  let component: TbdetailsComponent;
  let fixture: ComponentFixture<TbdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TbdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TbdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
