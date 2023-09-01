import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private listmenu:HeaderComponent,
    private serv:ProductService,
    ){};

  ngOnInit(){
    this.serv.getFlageData().subscribe((res:any)=>{
      this.removetoggle();
    })
  }


  toggleSideBar(){
    document.getElementsByClassName("tooglesideBarMenu")[0].classList.add("toggle");
    document.getElementsByClassName("headerToggle")[0].classList.add("headertoggle");
    this.listmenu.listToggle();
  }

  removetoggle(){
    document.getElementsByClassName("tooglesideBarMenu")[0].classList.remove("toggle");
    document.getElementsByClassName("headerToggle")[0].classList.remove("headertoggle");
  }
}
