import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /* document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init();
    }); */
    
    const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav, {});
  }

}
