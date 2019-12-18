import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofPerformComponent } from './proof-perform.component';

describe('ProofPerformComponent', () => {
  let component: ProofPerformComponent;
  let fixture: ComponentFixture<ProofPerformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProofPerformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProofPerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
