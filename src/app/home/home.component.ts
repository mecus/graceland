import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  internal;
  constructor(private _router: Router) { }

  readMore(){
    //this._router.navigate(["/#culture"]);
    window.location.replace('#culture');
  }
  pointerDown(){
    window.location.replace('#about');
  }
  clearInt(){
    clearInterval(this.internal);
  }
  ngOnInit() {
    let pointer: any = document.querySelector("#pointer");
    this.internal = setInterval(() => {
      pointer.style.marginTop = "20px";
      pointer.style.transition = "1.2s";
    }, 500);
    this.internal = setInterval(() => {
      pointer.style.marginTop = "0px";
      pointer.style.transition = "1.2s";
    }, 1000);
  }
  ngOnDestroy(){
    clearInterval(this.internal);
  }
}
