import { Component } from '@angular/core';

@Component({
  selector: 'app-it',
  templateUrl: './it.component.html',
  styleUrls: ['./it.component.css']
})
export class ItComponent {

  ngOnInit(){
    window.history.pushState( {} , '#', '/IT' );
    
    // document.getElementsByClassName("itdata")[0]
    
  }
}
