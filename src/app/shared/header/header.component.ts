import { Component, Injectable } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ProductService } from 'src/app/services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor( private serv:ProductService , private _snackBar: MatSnackBar , private Router:Router) {};
  ngOnInit(){
    console.log();
    
  }
  routingName = this.Router.url == "/" ? "Dashboard" : "Assesment";
  Assestment = "Assestment";
  subRouting = this.Router.url == "/" ? "" : this.Router.url;
  listToggle(){
    document.getElementsByClassName("listToggle")[0].classList.add("toggleblock");
  }

  toggleSideBar(){
    document.getElementsByClassName("listToggle")[0].classList.remove("toggleblock");
    // this.home.removetoggle();
    this.serv.setFunctionCall(true);
  }

  openSnackBar(){
    this._snackBar.open('Export Successfully', '', {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 500,
    });
  }
  
}
