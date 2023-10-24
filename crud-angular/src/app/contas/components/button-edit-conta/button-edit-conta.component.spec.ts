import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEditContaComponent } from './button-edit-conta.component';

describe('ButtonEditContaComponent', () => {
  let component: ButtonEditContaComponent;
  let fixture: ComponentFixture<ButtonEditContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonEditContaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonEditContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
