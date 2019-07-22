import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.scss']
})
export class TermsConditionComponent implements OnInit {

  constructor() { }

  linkNav(link){
    window.location.replace(link);
  }
  ngOnInit() {
    window.scrollTo(0,0);
  }

}
