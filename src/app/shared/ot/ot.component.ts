import { Component } from '@angular/core';

@Component({
  selector: 'app-ot',
  templateUrl: './ot.component.html',
  styleUrls: ['./ot.component.css']
})
export class OtComponent {
  ngOnInit(){
    window.history.pushState( {} , '#', '/OT' );
  }
}
