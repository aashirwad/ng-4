import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]', //adds a attribute to html element
  //selector: '.app-servers', //adds a class to html element
  //templateUrl: './servers.component.html',
  template: `<app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']

})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
