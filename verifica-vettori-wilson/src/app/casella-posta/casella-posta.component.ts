import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-casella-posta',
  templateUrl: './casella-posta.component.html',
  styleUrls: ['./casella-posta.component.css']
})
export class CasellaPostaComponent implements OnInit {
@Input() name : string = "";

  constructor() {}

  ngOnInit(): void {
  }

}
