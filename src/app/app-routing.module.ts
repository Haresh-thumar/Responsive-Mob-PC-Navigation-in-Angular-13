
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { HeaderNavComponent } from './navigation/header-nav/header-nav.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'header', component: HeaderNavComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: '', component: HomeComponent },
  { path: 'ourApp', component: ToDoListComponent },
  { path: 'services', component: ServicesComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
