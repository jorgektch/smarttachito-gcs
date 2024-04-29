import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../home/landing/landing.component';
import { LoginComponent } from '../customer/login/login.component';
import { CatalogoComponent } from '../customer/vista-catalogo/catalogo/catalogo.component';
import { ListaComprasComponent } from '../user-profile/lista-compras/lista-compras.component';
import { ProductoComponent } from '../customer/vista-catalogo/producto/producto.component';
import { RegistroComponent } from '../customer/registro/registro.component';
import { UsuarioComponent } from '../user-profile/usuario/usuario.component';
import { AuthGuard } from '../auth.guard';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path:'',
        component: LandingComponent,
        title: 'Smart Tachito',
    },
    {
        path:'login',
        component: LoginComponent,
        title: 'login'
    },
    {
        path:'catalogo',
        component: CatalogoComponent,
        title: 'catalogo'
    },
    {
        path:'producto',
        component: ProductoComponent,
        title: 'producto'
    },
    {
        path:'registro',
        component: RegistroComponent,
        title: 'registro'
    },
    {
        path:'usuario',
        component: UsuarioComponent,
        title: 'usuario',
        canActivate: [AuthGuard],
    },
    {
        path: 'lista-compras',
        component: ListaComprasComponent,
        title: 'Lista de Compras',
        canActivate: [AuthGuard],
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
