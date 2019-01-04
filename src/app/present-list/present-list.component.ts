import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { PresentsService, IPresent, IPresentDownload } from '../services/presents.service';

@Component({
  selector: 'app-present-list',
  templateUrl: './present-list.component.html',
  styleUrls: ['./present-list.component.css']
})
export class PresentListComponent implements OnInit {

  presents: Observable<IPresent[]>;

  constructor (private presentService: PresentsService) {
    this.presents = this.presentService.presents;
  }

  ngOnInit() {
  }

  onDelete(present: IPresentDownload) {
    this.presentService.deletePresent(present);
  }

  checked(present: IPresentDownload) {
    this.presentService.checked(present);
  }

}
