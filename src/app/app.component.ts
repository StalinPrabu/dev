import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customer:{id:number, name:string, age:any}

  constructor(){
    this.customer =  {
      id: 1,
      name:'stalin',
      age:20
    }
  }
}
