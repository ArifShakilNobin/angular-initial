import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BoardAdminComponent } from './modules/authentication/components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './modules/authentication/components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './modules/authentication/components/board-user/board-user.component';
import { HomeComponent } from './modules/authentication/components/home/home.component';
import { LoginComponent } from './modules/authentication/components/login/login.component';
import { ProfileComponent } from './modules/authentication/components/profile/profile.component';
import { RegisterComponent } from './modules/authentication/components/register/register.component';
import { httpInterceptorProviders } from './shared/http-interceptors';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
