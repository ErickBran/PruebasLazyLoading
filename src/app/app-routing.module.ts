import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
    children: [
     {
       path: 'home',
       loadChildren: './components/home/home.module#HomeModule'
     },
     {
       path: 'prueba',
       loadChildren: './modules/prueba/prueba.module#PruebaModule'
     }
    ]
  },
  {  path: '**', redirectTo: 'home' }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
