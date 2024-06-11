import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbaddComponent } from './tbadd.component';

describe('TbaddComponent', () => {
  let component: TbaddComponent;
  let fixture: ComponentFixture<TbaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TbaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TbaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
