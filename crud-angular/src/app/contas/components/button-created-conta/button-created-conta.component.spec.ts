import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCreatedContaComponent } from './button-created-conta.component';

describe('ButtonCreatedContaComponent', () => {
  let component: ButtonCreatedContaComponent;
  let fixture: ComponentFixture<ButtonCreatedContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCreatedContaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonCreatedContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
