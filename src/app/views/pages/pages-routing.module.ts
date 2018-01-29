import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: 'not-found',
        component: P404Component,
        data: {
          title: 'Page 404'
        }
      },
      {
        path: 'error',
        component: P500Component,
        data: {
          title: 'Page 500'
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: 'Register Page'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
