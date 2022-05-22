import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  personas: any[] = [{ text: 'Elena', valor: 'Elena' }, { text: 'Gerardo', valor: 'Gerardo' }];

  parametros: any = {
    persona: ''
  };

  logueado: boolean = false;

  // form: FormGroup;
    // loading = false;
    // submitted = false;

  constructor(
    private router: Router, 
    public loginService: LoginService

    // private formBuilder: FormBuilder,
    //     private route: ActivatedRoute,
        // private accountService: AccountService,
        // private alertService: AlertService
    )     { }

  ngOnInit() {
    this.parametros.persona = localStorage.getItem('personaLogueada');

    if(this.parametros.persona) {
      this.loginService.personaLogueada = this.parametros.persona;
      this.logueado = true;
      this.ir(this.parametros.persona);
    }
  }

  ingresar() {
    localStorage.setItem('personaLogueada', this.parametros.persona);
    this.loginService.personaLogueada = this.parametros.persona;
    this.ir(this.parametros.persona);
  }

  ir(persona: any) {
    switch(persona){
      case 'Elena':
        this.router.navigateByUrl('/resumen');
        break;
      case 'Gerardo':
        this.router.navigateByUrl('/calculadora');
        break;
      default:
        break;
    }
  }


//   ngOnInit() {
//     this.form = this.formBuilder.group({
//         username: ['', Validators.required],
//         password: ['', Validators.required]
//     });
// }

// // convenience getter for easy access to form fields
// get f() { return this.form.controls; }

// onSubmit() {
//     this.submitted = true;

//     // reset alerts on submit
//     this.alertService.clear();

//     // stop here if form is invalid
//     if (this.form.invalid) {
//         return;
//     }

//     this.loading = true;
//     this.accountService.login(this.f.username.value, this.f.password.value)
//         .pipe(first())
//         .subscribe({
//             next: () => {
//                 // get return url from query parameters or default to home page
//                 const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
//                 this.router.navigateByUrl(returnUrl);
//             },
//             error: error => {
//                 this.alertService.error(error);
//                 this.loading = false;
//             }
//         });
// }

}
