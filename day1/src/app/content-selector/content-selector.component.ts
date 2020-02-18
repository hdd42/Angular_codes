import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-content-selector',
  templateUrl: './content-selector.component.html',
  styleUrls: ['./content-selector.component.css']
})
export class ContentSelectorComponent implements OnInit {


  topic = ''
  bgColor;
  textColor
  constructor(private route: ActivatedRoute, private docTitle: Title) {
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(query => {
      console.log("query : ", query)
    })
    this.route.paramMap.subscribe(params => {
      console.log("params : ", params)
      this.topic = params.get('topic') || 'No topic selected'
      if (this.topic ==='directives' || this.topic ==='events'){
        this.bgColor ="blue"
        this.textColor = "white"
      }else{
        this.bgColor ="yellow"
        this.textColor="red"
      }
    })
  }

 /* getStyle() {
    return {
      backgroundColor:'yell'
    }
  }*/
}
