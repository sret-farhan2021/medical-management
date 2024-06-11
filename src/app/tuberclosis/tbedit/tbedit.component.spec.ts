import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbeditComponent } from './tbedit.component';

describe('TbeditComponent', () => {
  let component: TbeditComponent;
  let fixture: ComponentFixture<TbeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TbeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TbeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
