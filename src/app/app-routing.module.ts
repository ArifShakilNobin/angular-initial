import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminComponent } from './modules/authentication/components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './modules/authentication/components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './modules/authentication/components/board-user/board-user.component';
import { HomeComponent } from './modules/authentication/components/home/home.component';
import { LoginComponent } from './modules/authentication/components/login/login.component';
import { ProfileComponent } from './modules/authentication/components/profile/profile.component';
import { RegisterComponent } from './modules/authentication/components/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
