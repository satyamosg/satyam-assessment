import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-present-list',
  templateUrl: './present-list.component.html',
  styleUrls: ['./present-list.component.css']
})
export class PresentListComponent implements OnInit {

  presents: Observable<any[]>

  constructor (private angularDB: AngularFirestore) {
    this.presents = this.angularDB.collection('presents').valueChanges();
  }

  ngOnInit() {
  }

}
