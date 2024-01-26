import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'todo',
    loadChildren: () => import('mfe1/TodoModule').then((m) => m.TodoModule)
  }
];