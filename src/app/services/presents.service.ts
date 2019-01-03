import { Injectable } from '@angular/core';
import { Timestamp, Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

export interface IPresent {
  present: string;
  fromFamilyMember: string;
  toFamilyMember: string;
  image: string;
  rating: number;
  dateOpened: string;
  letterSent: boolean;
}

export interface IPresentID extends IPresent {
  id?: string;
}

@Injectable({
  providedIn: 'root'
})

export class PresentsService {

  private presents: Observable<IPresent[]>
  private presentCollection: AngularFirestoreCollection<IPresent>

  constructor (private presentsDB: AngularFirestore) {
    this.presentCollection = this.presentsDB.collection<IPresent>('presents');
  
    this.presents = this.presentCollection.snapshotChanges().pipe(map(this.includeCollectionID));
  }

  includeCollectionID(docChangeAction) {
    return docChangeAction.map((a) => {
      const data = a.payload.doc.data();
      const id = a.payload.doc.id;
      return {id, ...data };
    })
  };

  addPresent (presentLog) {
    const present: IPresent = {
      present: presentLog.newPresent,
      fromFamilyMember: presentLog.presentFrom,
      toFamilyMember: presentLog.presentTo,
      image: presentLog.presentImage,
      rating: presentLog.presentRating,
      dateOpened: presentLog.presentDateOpened,
      letterSent: presentLog.presentLetterSent
    };
    this.presentCollection.add(present)
  }
}
