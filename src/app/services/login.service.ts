import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  personaLogueada: string = "";

  logueo: boolean = false;

  user: User;

  selectedUser: User = new User();

  constructor(private angularFirestore: AngularFirestore) {
    this.personaLogueada = localStorage.getItem('personaLogueada') || "";
    this.logueo = false;
  }

  getUsers() {
    return this.angularFirestore.collection('users').snapshotChanges();
  }

  getUser(id) {
    return this.angularFirestore.collection('users').doc(id).valueChanges();
  }

  login(user: string, pass: string) {
    // return this.angularFirestore.collection('users',ref => ref.where('name','==',user).where('pass','==',pass)).valueChanges();
    return this.angularFirestore.collection('users',ref => ref.where('name','==',user.toUpperCase()).where('pass','==',pass)).valueChanges();
  }

  createUser(user: User) {
    user.name = user.name.toUpperCase(); // para evitar olvidos de mayusculas o minusculas...
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore.collection('users').add(user)
        .then((response) => {
          console.log(response)
        },
          (error) => {
            reject(error)
          }
        )
    })
  }

  updateUser(user: User, id) {
    return this.angularFirestore.collection('users').doc(id)
      .update({
        id: user.id,
        name: user.name,
        pass: user.pass,
        // group: Array;
        admin: user.admin,
        token: user.token
      });
  }

  deleteUser(user: User) {
    return this.angularFirestore.collection('users').doc(user.id).delete();
  }


}
