import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'your christmas list';

  constructor(private aFAuth: AuthService) { }

  ngOnInit() {
  }

  logout () {
    this.aFAuth.logOut();
    console.log("Great logout success")
  }

}