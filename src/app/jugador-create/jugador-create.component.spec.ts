import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorCreateComponent } from './jugador-create.component';

describe('JugadorCreateComponent', () => {
  let component: JugadorCreateComponent;
  let fixture: ComponentFixture<JugadorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
