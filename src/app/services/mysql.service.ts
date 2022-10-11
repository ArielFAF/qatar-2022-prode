import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mysql } from '../models/mysql';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MysqlService {
  API: string = environment.apiURL;
  // API: string ='https://valvar-services.000webhostapp.com/index.php'
  constructor(private clientService: HttpClient) { 
    // console.log(this.API);
  }

  recuperar() {
    return this.clientService.get(this.API);
  }

  equipos() {
    return this.clientService.get(this.API+'teamslocal.php');
  }

  fixture() {
    return this.clientService.get(this.API+'fixture.php');
  }

}
