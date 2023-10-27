import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDeleteContaComponent } from './button-delete-conta.component';

describe('ButtonDeleteContaComponent', () => {
  let component: ButtonDeleteContaComponent;
  let fixture: ComponentFixture<ButtonDeleteContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDeleteContaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDeleteContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
