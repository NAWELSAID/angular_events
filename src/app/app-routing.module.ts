import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EventComponent } from './components/event/event.component';
import { LastNewComponent } from './components/home/last-new/last-new.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';

const routes: Routes = [
    {path :"" , component : HomeComponent },
    {path :"home" , component : HomeComponent },
    {path :"contact" , component : ContactComponent },
    {path :"sign-up" , component : SignUpComponent },
    {path :"sign-in" , component : SignInComponent },
    {path :"event" , component : EventComponent },
    {path :"header" , component : HeaderComponent },
    {path :"lasrnew" , component : LastNewComponent },
    {path :"footer" , component : FooterComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
