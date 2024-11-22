import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { GoogleAuthProvider } from '@angular/fire/auth';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSub= new Subject()

  constructor(private afAuth:AngularFireAuth) {
    this.afAuth.authState.subscribe(
      (user)=>{
        if (user){
          this.userSub.next(user)
        }
        else this.userSub.next(null)
      }
    )
   }

   getLoggedUser(){
    return this.userSub
   }

  googleAuth(){
    return this.afAuth.signInWithPopup(new GoogleAuthProvider())
  }
  signOut(){
    return this.afAuth.signOut()
  }

}
