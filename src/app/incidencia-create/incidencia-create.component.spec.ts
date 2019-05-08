import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaCreateComponent } from './incidencia-create.component';

describe('IncidenciaCreateComponent', () => {
  let component: IncidenciaCreateComponent;
  let fixture: ComponentFixture<IncidenciaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidenciaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
