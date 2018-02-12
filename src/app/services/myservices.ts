import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable() 

export class MyServices {
    users;

    constructor(private data: Http) { }

    getUsers()  {
        console.log("saf");
        return this.data.get('/students').map(result => this.users.json().data);
    }
}