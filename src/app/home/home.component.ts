import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { db } from '../../firebase-config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { trigger, transition, style, state, animate, stagger } from '@angular/animations';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';

const baseEmail = "emeka@miscotech.co.uk";
const url = "https://miscotech-mail-app.herokuapp.com/mail";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('transformImage', [
      state('in', style({
        transform: 'scale(1.0)',
        marginTop: '-60px'
      })),
      state('out', style({
        transform: 'scale(1.1)',
        marginTop: '0px'
      })),
      transition('in <=> out', [
        animate('200ms ease-out')
      ]),
 
    ]),
    trigger("ContainerRaduis", [
      state('in', style({
        borderRadius: '0 10% 0 10%'
      })),
      state('out', style({
        borderRadius: '0% 0 0 0'
      })),
      // transition('in <=> out', [
      //   animate('.5s')
      // ]),
      // transition('out => in', [
      //   animate('.5s')
      // ])
    ]),
    trigger("bgColor", [
      state('in', style({
        backgroundColor: '#c2185b' //'#c34a50'
      })),
      state('out', style({
        backgroundColor: '#02527C'
      }))
    ])
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  imgState: boolean = false;
  headTitle = ("Expert Lawyers");
  internal;
  formModel: FormGroup;
  selectedIndex = 0;
  initIndex = -1;
  headTextInterval;
  counter = 0;
  constructor(private _router: Router, private _fb: FormBuilder,
    private http: HttpClient, private _snackBar: MatSnackBar) { 
    this.formModel = _fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required, Validators.email],
      message: [""]
    });
  }

  @HostListener('mousemove', ['event'])
  mouseMovement(e: any){
    let ypos = e.movementY;
    let xpos = e.movementX;
    let el: any = document.querySelector(".team");
    if(xpos > 0){
      el.style.transform = "rotate(2deg)";
    }else if(xpos < 0){
      el.style.transform = "rotate(-2deg)";
    }else if(!xpos){
      el.style.transform = "rotate(0deg)";
    }
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
    //  alert(social);
  }
  sendContact(msg){
    // console.log(this.formModel.valid);
    // console.log(msg);
    if(msg.name && msg.email){
      db.collection('/contacts').add(msg)
      .then(ref => {
        this.formModel.reset();
        
        this._snackBar.open("Your message was successfully sent", "Sent", {
          duration: 10000,
        });
        this.selectedIndex = 0;
      })
      .catch(err => console.log(err));
    }

    // this.sendMail(msg).then(res => {
    //   db.collection('/contacts').add(msg)
    //   .then(ref => console.log({emailres: res, dbres: ref}))
    //   .catch(err => console.log(err));
    // }).catch(err => console.log(err));

  }
  getIntouch(){
    window.location.replace('#get-in-touch');
    setTimeout(() => {
      this.selectedIndex = 2;
    }, 2000);
  }
  seeMore(action){
    //this._router.navigate(["/#culture"]);
    if(action === "culture"){
      window.location.replace('#our-culture');
    }else if(action === "team"){
      window.location.replace('#our_team');
    }else{
      return null;
    }
    
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
    let devise = window.screen.width;
    if(devise > 1 && devise < 768){
      // this.transformAboutImage(300);
      return null;
    }else if(devise > 768 && devise < 1300){
      this.transformAboutImage(450);
    }else if(devise > 1280 && devise < 2000){
      this.transformAboutImage(600);
    }else{
      return null;
    }
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

  transformAboutImage(bound){
    window.addEventListener('scroll', e => {
      let yPos = window.scrollY;
      if(yPos > bound){
        this.imgState = true;
      }else{
        this.imgState = false;
      }
    });
  }

}
