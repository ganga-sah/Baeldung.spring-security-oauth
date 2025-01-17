import { Component } from '@angular/core';
import {AppService, Foo} from './app.service'

@Component({
  selector: 'foo-details',
  providers: [AppService],
  template: `<div class="container">
    <h1 class="col-sm-12">Foo Details</h1>
    <div class="col-sm-12">
        <label class="col-sm-3">ID</label> <span>{{foo.id}}</span>
    </div>
    <div class="col-sm-12">
        <label class="col-sm-3">Name</label> <span>{{foo.name}}</span>
    </div>
    <div class="col-sm-12">
        <button class="btn btn-primary" (click)="getFoo()" type="submit">New Foo</button>
    </div>
</div>`
})

export class FooComponent {
    public foo = new Foo(1,'sample foo');
    //private foosUrl = 'http://localhost:8081/resource-server/api/foos/';
    private foosUrl = 'https://8000-0-9f18ccda.labs.konghq.com/keycloak-httpbin';
    constructor(private _service:AppService) {}

    getFoo(){
        //this._service.getResource(this.foosUrl+this.foo.id)
        this._service.getResource(this.foosUrl)
         .subscribe(
                     data => this.foo = data,
                     error =>  this.foo.name = 'Error');
    }
}
