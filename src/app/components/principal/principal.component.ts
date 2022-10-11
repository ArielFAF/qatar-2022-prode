import { Component, OnInit } from '@angular/core';
import { MysqlService } from 'src/app/services/mysql.service';

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

  datos: any;

  constructor(private mysqlService: MysqlService) { }

  ngOnInit(): void {
    this.mysqlService.fixture().subscribe( resp => {
      console.log(resp);
      this.datos = resp;
    }); 
    // console.log(this.datos);
  }

}
