import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUPComponent {

  constructor(private auth:AuthService, private router:Router){}

  googleAuth(){
    this.auth.googleAuth()
      .then(
        ()=>
          {
            console.log("BEléptél!")
            this.router.navigate(['spiders'])
          }
    )

      .catch(()=>console.log("Hiba a BElépésnél!"))
  }



}
