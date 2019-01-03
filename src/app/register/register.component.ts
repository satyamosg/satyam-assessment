import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  error: string;

  constructor(private router: Router, private auth: AuthService) { }

  register(details: {email: string, password: string}) {

    this.auth.registerUser(details.email, details.password)
    .then(()=>{
      this.router.navigate(['/']);
      console.log("Great success")
    })
    .catch((error: Error)=>{
      this.error = error.message;
    });
  }

  ngOnInit() {
  }
}
