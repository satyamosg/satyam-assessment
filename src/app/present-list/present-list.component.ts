import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { PresentsService, IPresent } from "../services/presents.service";

@Component({
  selector: 'app-present-list',
  templateUrl: './present-list.component.html',
  styleUrls: ['./present-list.component.css']
})
export class PresentListComponent implements OnInit {

  presents: Observable<IPresent[]>
  
  constructor (private presentService: PresentsService) {
    this.presents = this.presentService.presents;
  }

  ngOnInit() {
  }

}
