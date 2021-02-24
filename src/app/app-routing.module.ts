import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/auth/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { addTask } from './component/dashboard/addTask/addTask.component';
import { TaskListComponent } from './component/dashboard/task-list/task-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'task-list',
        component: TaskListComponent
      },
      {
        path: 'addTask',
        component: addTask
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
