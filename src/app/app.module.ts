import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LastEventComponent } from './components/home/last-event/last-event.component';
import { LastNewComponent } from './components/home/last-new/last-new.component';
import { UserComponent } from './components/user/user.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { AddEventComponent } from './components/user/add-event/add-event.component';
import { MyEventComponent } from './components/user/my-event/my-event.component';
import { HistoryComponent } from './components/user/history/history.component';
import { ParticipationComponent } from './components/user/participation/participation.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { EventComponent } from './components/event/event.component';
import { EventDetailsComponent } from './components/event/event-details/event-details.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './components/auth/forget-password/forget-password.component';
import { NotificationComponent } from './components/user/notification/notification.component';
import { HeaderComponent } from './components/header/header.component'
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LastEventComponent,
    LastNewComponent,
    UserComponent,
    ProfileComponent,
    AddEventComponent,
    MyEventComponent,
    HistoryComponent,
    ParticipationComponent,
    FooterComponent,
    ContactComponent,
    EventComponent,
    EventDetailsComponent,
    SignInComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    NotificationComponent,
    HeaderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule ,
    AppRoutingModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
