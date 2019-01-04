import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPresent, PresentsService } from '../services/presents.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-letter-list',
  templateUrl: './letter-list.component.html',
  styleUrls: ['./letter-list.component.css']
})
export class LetterListComponent implements OnInit {

  presents: Observable<IPresent[]>;
  user;

  constructor (private presentService: PresentsService, private aFAuth: AuthService) {
    this.presents = this.presentService.presents;
    this.user = this.aFAuth.user;
  }

  ngOnInit() {
  }

  logout () {
    this.aFAuth.logOut();
  }

}
