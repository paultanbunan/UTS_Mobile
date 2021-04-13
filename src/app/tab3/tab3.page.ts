import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  judul;
  isi;
  score;
  date;
  picture;
  constructor(private route:ActivatedRoute) {
    const parameter = this.route.snapshot.paramMap;
    this.judul = parameter.get('judul');
    this.isi = parameter.get("isi");
    this.date = parameter.get("date");
    this.score = parameter.get("score");
    this.picture = parameter.get("picture");
   }

}
