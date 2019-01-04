import { Injectable } from '@angular/core';
import { Timestamp, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

export interface IPresent {
  present: string;
  fromFamilyMember: string;
  toFamilyMember: string;
  image: string;
  rating: number;
  letterSent: boolean;
  userID: string;
  id?: string
}

// export interface IPresentID extends IPresent {
//   id: string;
// }

export interface IPresentUpload extends IPresent {
  dateOpened: Date;
}

export interface IPresentDownload extends IPresent {
  dateOpened: {
      nanoseconds: number;
      seconds: number;
      toDate();
  };
}

@Injectable({
  providedIn: 'root'
})

export class PresentsService {

  presents: Observable<IPresent[]>;
  presentCollection: AngularFirestoreCollection<IPresent>;

  constructor (private presentsDB: AngularFirestore, private aFAuth: AuthService) {
    this.presentCollection = this.presentsDB.collection<IPresent>('presents', (reference) => {
      return reference
      .where('userID', '==', this.aFAuth.user.uid);

  });

    this.presents = this.presentCollection.snapshotChanges().pipe(map(this.includeCollectionID));
  }

  includeCollectionID(docChangeAction) {
    return docChangeAction.map((a) => {
      const data = a.payload.doc.data();
      const id = a.payload.doc.id;
      return {id, ...data };
    });
  }

  addPresent(presentLog) {
    const present: IPresentUpload = {
      present: presentLog.newPresent,
      fromFamilyMember: presentLog.presentFrom,
      toFamilyMember: presentLog.presentTo,
      image: presentLog.presentImage,
      rating: presentLog.presentRating,
      letterSent: false,
      userID: this.aFAuth.user.uid,
      dateOpened: new Date()
    };
    this.presentCollection.add(present);
  }

  getPresent(id: string) {
    return this.presentCollection.doc(id).get()
     .pipe(map(
      (payload) => {
         return payload.data() as IPresentDownload;
       }
     ));
  }

  deletePresent(presentLog: IPresentDownload) {
    this.presentCollection.doc(presentLog.id).delete();
  }

  checked(presentLog: IPresentDownload) {
    const payload = {
        letterSent: presentLog.letterSent,
    };
    this.presentCollection.doc(presentLog.id).update(payload)
    .then(() => {

        console.log('updated presents ' + presentLog.present);
    })
    .catch((error) => {
        console.log(error);
        throw new Error('Unable to update user');
    });
}
}
