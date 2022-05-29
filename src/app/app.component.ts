import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Qatar 2022 Prode';

  constructor(public loginService: LoginService, private router: Router) { }

  salir() {
    localStorage.removeItem('personaLogueada');
    this.loginService.personaLogueada = "";
    this.router.navigateByUrl('/login');
  }
}
