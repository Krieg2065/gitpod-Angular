import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cassetierea',
  templateUrl: './cassetierea.component.html',
  styleUrls: ['./cassetierea.component.css']
})
export class CassetiereaComponent implements OnInit {
names: string[]; 

  constructor() {
    this.names = ["pino", "rino", "mino", "ugo" ];
   }

  ngOnInit(): void {
  }

}
