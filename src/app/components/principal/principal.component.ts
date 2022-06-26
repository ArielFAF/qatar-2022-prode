import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  source = {
    "sourceType": "list",
    "ownerScreenName": "ArielFAF",
    "slug": "SicSic"
  };

  options = {
    "height": "500",
    "width": "100%",
    "chrome": ["noheader", "nofooter", "noborders"]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
