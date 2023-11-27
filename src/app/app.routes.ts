import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListReserveComponent } from './components/reserve/list-reserve/list-reserve.component';
import { HomeComponent } from './components/home/home.component';
import { ListCheckInComponent } from './components/check-in/list-check-in/list-check-in.component';

export const routes: Routes = [{path: 'dashboard', title:'dashboard', component:DashboardComponent},
{path: 'reserve', title: 'reserve', component:ListReserveComponent},
{path: 'home', title: 'home', component:HomeComponent},
{path: 'check-in', title: 'check-in', component:ListCheckInComponent},

];
