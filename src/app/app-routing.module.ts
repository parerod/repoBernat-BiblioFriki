import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'catalogo-page',
    loadChildren: () => import('./pages/catalogo-page/catalogo-page.module').then( m => m.CatalogoPagePageModule)
  },
  {
    path: 'mis-prestamos-page',
    loadChildren: () => import('./pages/mis-prestamos-page/mis-prestamos-page.module').then( m => m.MisPrestamosPagePageModule)
  },
  {
    path: 'libro-page/:id',
    loadChildren: () => import('./pages/libro-page/libro-page.module').then( m => m.LibroPagePageModule)
  },
  {
    path: 'borrado/:id',
    loadChildren: () => import('./pages/borrado/borrado.module').then( m => m.BorradoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
