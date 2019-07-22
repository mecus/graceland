import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { db } from '../firebase-config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseEmail = "emeka@miscotech.co.uk";
const url = "https://miscotech-mail-app.herokuapp.com/mail";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  headTitle = ("Expert Lawyers");
  internal;
  formModel: FormGroup;
  selectedIndex = 0;
  initIndex = -1;
  headTextInterval;
  counter = 0;
  constructor(private _router: Router, private _fb: FormBuilder,
    private http: HttpClient) { 
    this.formModel = _fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required, Validators.email],
      message: [""]
    });
  }
  more: boolean = false;
  getMoreServices(){
    let moreS: any = document.querySelector(".lower-practice");
    if(this.more){
      moreS.style.display = 'none';
      this.more = false;
    }else{
      moreS.style.display = 'flex';
      this.more = true;
    }
    
  }
  socialMediaLinks(social: String){
    alert(social);
  }
  sendContact(msg){
    console.log(this.formModel.valid);
    console.log(msg);

    this.sendMail(msg).then(res => {
      db.collection('/contacts').add(msg)
      .then(ref => console.log({emailres: res, dbres: ref}))
      .catch(err => console.log(err));
    }).catch(err => console.log(err));

  }
  getIntouch(){
    window.location.replace('#get-in-touch');
    setTimeout(() => {
      this.selectedIndex = 2;
    }, 2000);
  }
  readMore(){
    //this._router.navigate(["/#culture"]);
    window.location.replace('#our-culture');
  }
  pointerDown(){
    window.location.replace('#about');
  }
  clearInt(){
    clearInterval(this.internal);
  }
  ngOnInit() {
    this.scrollEvent();
    this.headSlideInit();
    let pointer: any = document.querySelector("#pointer");
    this.internal = setInterval(() => {
      pointer.style.marginTop = "20px";
      pointer.style.transition = "1.2s";
    }, 500);
    this.internal = setInterval(() => {
      pointer.style.marginTop = "0px";
      pointer.style.transition = "1.2s";
    }, 1000);

    // this.headSlideInit();
  }
  ngOnDestroy(){
    clearInterval(this.internal);
  }

  scrollEvent(){
    let headAtt: any = document.querySelector(".headImage");
    window.addEventListener('scroll', (e) => {
      let yPos = window.scrollY;
      if (yPos > 10){
        headAtt.style.marginTop = `-${yPos - 5}px`;
      }
      if (yPos > 450){
        headAtt.style.marginTop = `-${yPos = 0}px`;
        //console.log('Scrolling page'+ yPos);
      }
    });
  }
  //let url = "https://miscotech-mail-app.herokuapp.com/mail";

  sendMail(msg){
    let body = {
      to: baseEmail,
      subject: "New Contact Submited",
      html: `
      <strong>You just got a new contact from your website</strong>..\n
      <p><strong>Name:</strong> ${msg.name} </p>\n
      <p><strong>Email:</strong> ${msg.email} </p>\n
      <p><strong>Message:</strong> ${msg.message} </p>\n
      `
    }
    let headers = new HttpHeaders().append('content-type', 'Application/json');
    return this.http.post(url, body, {headers: headers}).toPromise();
  }

  headSlideInit(){
    let state = false;
    let textAry:any = document.querySelectorAll(".main-text")[0];

 
    setInterval(() => {
      if (!state){
        textAry.style.marginTop = "-200px";
        state = true;
      }else{
        textAry.style.marginTop = "0px";
        state = false;
      }
    }, 20000);
  }

}
