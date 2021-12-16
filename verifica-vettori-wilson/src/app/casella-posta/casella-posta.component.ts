import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-casella-posta',
  templateUrl: './casella-posta.component.html',
  styleUrls: ['./casella-posta.component.css']
})
export class CasellaPostaComponent implements OnInit {
@Input() name : string = "";
lettere : string[];

  constructor(){
    this.lettere = ["lettera1", "lettera2", "lettera3", "lettera4"]
}

  ngOnInit(): void {
  }

}
