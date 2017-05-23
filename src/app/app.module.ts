import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { PostsComponent } from './posts/posts.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Routing } from './routing';
import { UserRouting } from './user/user.routing';
import { HomeComponent } from './home/home.component';
import { UserService } from './user/user.service';
import { PreventUnsavedChangesGuardService } from './user/new-user/prevent-unsaved-changes-guard.service';
import { NewUserComponent } from './user/new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    PostsComponent,
    NotfoundComponent,
    HomeComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    Routing,
    UserRouting
  ],
  providers: [UserService,PreventUnsavedChangesGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
