import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
interface data {
  judul : string,
  isi : string,   
  date : string,
  score : string,
  picture : string[]
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  isiData: Observable<data[]>;
  isiDatacoll : AngularFirestoreCollection<data>;

  constructor(
    afs : AngularFirestore
  ) {
    this.isiDatacoll = afs.collection('dataCoba');
    this.isiData = this.isiDatacoll.valueChanges();
  }

  
}
