import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswersResultComponent } from './answers-result.component';

describe('AnswersResultComponent', () => {
  let component: AnswersResultComponent;
  let fixture: ComponentFixture<AnswersResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswersResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswersResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
