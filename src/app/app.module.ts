import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './module/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './shared/home/home.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainComponent } from './module/dashboard-content/main/main.component';
import { XYChart } from "@amcharts/amcharts4/charts";
import { HttpClientModule } from '@angular/common/http';

import { NgChartsModule } from 'ng2-charts';
import { ItComponent } from './shared/it/it.component';
import { OtComponent } from './shared/ot/ot.component';
import { SettingsComponent } from './shared/settings/settings.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    MainComponent,
    ItComponent,
    OtComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [XYChart,HeaderComponent,HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
