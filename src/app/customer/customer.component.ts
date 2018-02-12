import { Component, OnInit } from '@angular/core';
import { MyServices } from '../services/myservices';

@Component({
  	selector: 'app-customer',
  	templateUrl: './customer.component.html',
  	styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
   
  	users:any = [];
  		constructor(private myservices:MyServices) { 
    	this.myservices.getUsers().subscribe(response => this.users = response);
  	}

  ngOnInit() {
  }

}
