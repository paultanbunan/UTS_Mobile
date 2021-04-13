import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { FotoService } from '../../services/foto.service';
interface data {
  judul : string,
  isi : string,   
  date : string,
  score : string,
  picture : string[]
}
export interface fileFoto {
  name: string; //filepath
  path: string; //webviewPath
}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  urlImageStorage: string[] = [];
  isiData: Observable<data[]>;
  isiDatacoll : AngularFirestoreCollection<data>;
  Judul : string;
  Isi : string;
  Date : string;
  Score : string;
  Picture : string;

  constructor(
    afs : AngularFirestore,
    private afStorage: AngularFireStorage,
    public fotoService: FotoService
  ) {
    this.isiDatacoll = afs.collection('dataCoba');
    this.isiData = this.isiDatacoll.valueChanges();
  }
  simpan() {
    for (var index in this.fotoService.dataFoto) {
      const imgFilePath = `imgStorage/${this.fotoService.dataFoto[index].filePath}`;
      this.afStorage.upload(imgFilePath, this.fotoService.dataFoto[index].dataImage)
        .then(() => {
          this.afStorage.storage
            .ref()
            .child(imgFilePath)
            .getDownloadURL()
            .then((url) => {
              this.urlImageStorage = url;
              this.isiDatacoll.doc(this.Judul).set({
                judul : this.Judul,
                isi : this.Isi,
                date : this.Date,
                score : this.Score,
                picture : this.urlImageStorage,
              });
            });
        });
      }
    
  }
  tambahFoto(){
    this.fotoService.tambahFoto();
  }
}
