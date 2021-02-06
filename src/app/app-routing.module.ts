import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'login',
  loadChildren: () => import('./no-auth/no-auth.module').then(mod => mod.NoAuthModule),
},
 { path: '',
  loadChildren: () => import('./authModule/auth.module').then(mod => mod.AuthModule),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
