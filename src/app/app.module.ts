import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms/';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatSelectModule,
  MatDatepickerModule,
  MatCardModule,
  MatFormFieldModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { JugadorComponent } from './jugador/jugador.component';
import { JugadorCreateComponent } from './jugador-create/jugador-create.component';
import { JugadorEditComponent } from './jugador-edit/jugador-edit.component';

const appRoutes: Routes = [
  {
    path: 'jugadores',
    component: JugadorComponent,
    data: { title: 'Jugador Lista' }
  },
  {
    path: 'jugador-create',
    component: JugadorCreateComponent,
    data: { title: 'Crear Jugador' }
  },
  {
    path: 'jugador-edit/:id',
    component: JugadorEditComponent,
    data: { title: 'Editar Jugador' }
  },
  {
    path: '',
    redirectTo: '/jugadores',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    JugadorComponent,
    JugadorCreateComponent,
    JugadorEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
