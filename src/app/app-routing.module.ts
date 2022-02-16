import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TaskComponent } from './components/task/task.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { SalaryTaskComponent } from './components/salary-task/salary-task.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  { path: 'AddData', component: AddDataComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Task', component: TaskComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Main', component: MainComponent },
  { path: 'salary', component: SalaryTaskComponent },
  { path: 'Map', component: MapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
