import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HomePageComponent } from './home-page/home-page.component';
import { CommunitiesComponent } from './communities/communities.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    CommunitiesComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AlertModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
