import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { mergeMapTo } from 'rxjs/operators';

import { LoginService } from './services/login.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Qatar 2022 Prode';

  constructor(
    public loginService: LoginService, 
    private router: Router,
    private angularFireMessaging: AngularFireMessaging) {
      this.getToken();
      this.listen();
     }

  salir() {
    localStorage.removeItem('personaLogueada');
    this.loginService.personaLogueada = "";
    this.router.navigateByUrl('/login');
  }

  // requestPermission() {
  //   this.angularFireMessaging.requestPermission
  //     .subscribe(
  //       () => { console.log('Permission granted!'); },
  //       (error) => { console.error(error); },  
  //     );
  // }

  requestPermission() {
    this.angularFireMessaging.requestPermission
      .pipe(mergeMapTo(this.angularFireMessaging.tokenChanges))
      .subscribe(
        (token) => { console.log('Permission granted! Save to the server! \n', token); },
        (error) => { console.error(error); },  
      );
  }

  getToken() {
    this.angularFireMessaging.getToken.subscribe( res => {
      console.log("Token: ", res);
      alert(res);

      let user = new User();
      user.admin = true;
      user.id = 'JGOZHRqfCYGWvANwOPz4';
      user.name = 'Ariel';
      user.pass = '123';
      user.token = res;

      this.loginService.updateUser(user, user.id);
    });
  }

  listen() {
    this.angularFireMessaging.messages
      .subscribe((message) => { 
        console.log(message); 
        alert(message.notification.title + ": " + message.notification.body);
      });
  }

}
