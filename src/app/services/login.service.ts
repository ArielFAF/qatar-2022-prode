import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  personaLogueada: string = "";

  // userRecord!: AngularFireList<any>;

  logueo: boolean = false;

  user: User;

  // userList!: AngularFireList<any>;

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

  createUser(user: User) {
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
