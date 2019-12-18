import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofRegisterComponent } from './proof-register.component';

describe('ProofRegisterComponent', () => {
  let component: ProofRegisterComponent;
  let fixture: ComponentFixture<ProofRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProofRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProofRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
