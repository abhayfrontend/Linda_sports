import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import {HomeComponent} from './pages/home/home.component';
import {ServicesfootballComponent} from './pages/servicesfootball/servicesfootball.component';
import {RosterComponent} from './pages/roster/roster.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "services", component: ServicesfootballComponent },
  { path: "roster", component: RosterComponent },
  { path: "aboutus", component: AboutUsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
