import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const ac = document.querySelector('.autocomplete');
    M.Autocomplete.init(ac, {
        data: {
          "Aruba": null,
          "Cancun Mexico": null,
          "Hawaii": null,
          "Florida": null,
          "California": null,
          "Jamaica": null,
          "Europe": null,
          "The Bahamas": null,
        }
      });
  }

}
