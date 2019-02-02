import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitComponent } from './git/git.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from 'src/app/about/aboutme/aboutme.component';
import {TestersjavaComponent} from 'src/app/java-for-testers/testersjava/testersjava.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact/contact.component';
import { BackupComponent } from './backup/backup.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'git',
    component: GitComponent
  },
  {
    path: 'backup/git',
    component: GitComponent
  },
  {
    path: 'javafortesters',
    component: TestersjavaComponent
  },
  {
    path: 'backup/javafortesters',
    component: TestersjavaComponent
  },
  
  {
    path:'aboutme',
    component: AboutmeComponent
  },
  {
    path:'backup/aboutme',
    component: AboutmeComponent
  },
  {
    path:'services',
    component: ServicesComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'backup',
    component: BackupComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
