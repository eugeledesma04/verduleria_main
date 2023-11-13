import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { FrutasComponent } from './frutas/frutas.component';
import { VerdurasComponent } from './verduras/verduras.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'frutas', component: FrutasComponent},
  { path: 'verduras', component: VerdurasComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'carrito', component: CarritoComponent},
  { path: 'ingreso', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'registro', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
