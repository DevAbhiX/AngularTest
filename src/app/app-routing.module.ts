import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { MainComponent } from './module/dashboard-content/main/main.component';
import { ItComponent } from './shared/it/it.component';
import { OtComponent } from './shared/ot/ot.component';
import { SettingsComponent } from './shared/settings/settings.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "IT",
    component: ItComponent
  },
  {
    path: "OT",
    component: OtComponent
  },
  {
    path: "Settings",
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
