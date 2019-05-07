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

const appRoutes: Routes = [
  {
    path: 'login',
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
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
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
    LoginComponent
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
