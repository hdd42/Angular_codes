import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit {
  @Input('cardTitle') cardTitle = ''
  @Input('cardText') cardText = ''
  @Input('cardLink') cardLink=''
  @Input('cardLinkText') cardLinkText=''

  constructor() { }

  ngOnInit(): void {
  }

}
