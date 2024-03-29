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
  MatNativeDateModule,
  MatCardModule,
  MatFormFieldModule,
  MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { JugadorComponent } from './jugador/jugador.component';
import { JugadorCreateComponent } from './jugador-create/jugador-create.component';
import { JugadorEditComponent } from './jugador-edit/jugador-edit.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { IncidenciaComponent } from './incidencia/incidencia.component';
import { IncidenciaCreateComponent } from './incidencia-create/incidencia-create.component';
import { IncidenciaEditComponent } from './incidencia-edit/incidencia-edit.component';
import { PartidosComponent } from './partidos/partidos.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'menu',
    component: MenuComponent,
    data: { title: 'Menú' }
  },
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
  },{
    path: 'incidencias',
    component: IncidenciaComponent,
    data: { title: 'incidencias' }
  },{
    path: 'incidencia-create',
    component: IncidenciaCreateComponent,
    data: { title: 'incidencia-create' }
  },
  {
    path: 'incidencia-edit/:id',
    component: IncidenciaEditComponent,
    data: { title: 'incidencias-edit' }
  },
  {
    path: 'partidos',
    component: PartidosComponent,
    data: { title: 'partidos' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    JugadorComponent,
    JugadorCreateComponent,
    JugadorEditComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    IncidenciaComponent,
    IncidenciaCreateComponent,
    IncidenciaEditComponent,
    PartidosComponent
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
    MatNativeDateModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule
  ],
  providers: [
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
