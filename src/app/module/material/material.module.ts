import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MaterialRoutingModule } from './material-routing.module';
const AngularMaterials:any =[
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule,
  MatSnackBarModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    AngularMaterials,
    CanvasJSAngularChartsModule
  ],
  exports:[AngularMaterials]
})
export class MaterialModule { }
