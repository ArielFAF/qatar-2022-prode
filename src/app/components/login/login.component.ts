import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/models/user';

import { LoginService } from 'src/app/services/login.service';
import { AlertService } from 'src/app/services/alert.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Users: User[];
  personas: any[] = [{ text: 'Elena', valor: 'Elena' }, { text: 'Gerardo', valor: 'Gerardo' }];

  parametros: any = {
    persona: ''
  };

  logueado: boolean = false;

  form!: FormGroup;
  loading = false;
  submitted = false;

  // source = {
  //   "sourceType": "list",
  //   "ownerScreenName": "ArielFAF",
  //   "slug": "SicSic"
  // };

  // options = {
  //   "height": "350",
  //   "width": "100%",
  //   "chrome": ["noheader", "nofooter", "noborders"]
  //   // "tweetLimit": 1
  //   // borderColor: "blue"
  //   // "theme": "light",
  //   // "ariaPolite": "rude"
  //   // "dnt": false
  // };

  public userForm: FormGroup;

  constructor(
    private router: Router,
    public loginService: LoginService,
    public formBuilder: FormBuilder,
    private alertService: AlertService
    // private formBuilder: FormBuilder,
    //     private route: ActivatedRoute,
    // private accountService: AccountService,
    // private alertService: AlertService
  ) {
    this.userForm = this.formBuilder.group(
      {
        name: [''],
        pass: ['']
      }
    );
  }

  ngOnInit(): void {
    this.parametros.persona = localStorage.getItem('personaLogueada');

    if (this.parametros.persona) {
      this.loginService.personaLogueada = this.parametros.persona;
      this.logueado = true;
      // this.ir(this.parametros.persona);
      this.router.navigateByUrl('/principal');
    }

    // this.loginService.getUsers().subscribe((res) => {
    //   this.Users = res.map((e) => {
    //     return {
    //       id: e.payload.doc.id,
    //       ...(e.payload.doc.data() as User)
    //     }
    //   }
    //   )
    // });
  }

  ingresar() {
    localStorage.setItem('personaLogueada', this.parametros.persona);
    this.loginService.personaLogueada = this.parametros.persona;
    this.ir(this.parametros.persona);
  }

  ir(persona: any) {
    switch (persona) {
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

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }

    this.loading = true;

    // this.loginService.login(this.userForm.value.name, this.userForm.value.pass)
    //     .subscribe(
    //         (user): void => {
    //         console.log(user);
    //       },
    //         (error) => {
    //           console.log(error);
    //         }
    //     );

    this.loginService.login(this.userForm.value.name, this.userForm.value.pass)
      .pipe(first())
      .subscribe(
        (user: User[]): void => {
          console.log(user);

          if (user.length == 1) {
            // this.alertService.success('Usuario encontrado!', { keepAfterRouteChange: true });
            localStorage.setItem('personaLogueada', this.userForm.value.name);
            this.loginService.personaLogueada = this.userForm.value.name;
            this.router.navigateByUrl('/principal');
          } else {
            this.alertService.warn('Usuario NO encontrado!', { keepAfterRouteChange: true });
          }

          this.loading = false;
        },
        (error) => {
          this.alertService.error(error, { keepAfterRouteChange: true });
          console.log(error);
          this.loading = false;
        }
      );

    // this.accountService.register(this.form.value)
    //     .pipe(first())
    //     .subscribe({
    //         next: () => {
    //             this.alertService.success('Registration successful', { keepAfterRouteChange: true });
    //             this.router.navigate(['../login'], { relativeTo: this.route });
    //         },
    //         error: error => {
    //             this.alertService.error(error);
    //             this.loading = false;
    //         }
    //     });
  }

  mostrarAlerta() {
    this.alertService.info('generado con el boton', { keepAfterRouteChange: true });
  }

}
