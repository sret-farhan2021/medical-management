import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryeditComponent } from './historyedit.component';

describe('HistoryeditComponent', () => {
  let component: HistoryeditComponent;
  let fixture: ComponentFixture<HistoryeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
