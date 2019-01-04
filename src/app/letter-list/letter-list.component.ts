import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPresent, PresentsService } from '../services/presents.service';

@Component({
  selector: 'app-letter-list',
  templateUrl: './letter-list.component.html',
  styleUrls: ['./letter-list.component.css']
})
export class LetterListComponent implements OnInit {

  presents: Observable<IPresent[]>;

  constructor (private presentService: PresentsService) {
    this.presents = this.presentService.presents;
  }

  ngOnInit() {
  }

}
