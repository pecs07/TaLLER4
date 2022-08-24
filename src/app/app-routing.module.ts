import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'hogares',
    loadChildren: () => import('./hogares/hogares.module').then(m => m.HogaresModule)
  },
  {
    path: 'empresas',
    loadChildren: () => import('./empresas/empresas.module').then(m => m.EmpresasModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule)
  }
  /*de esta manera redireccionamos la raiz a hogares*/
  /*
  {
    path: '',
    redirectTo: 'hogares',
    pathMatch: 'full'
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
