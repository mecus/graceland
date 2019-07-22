import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'graceland';

  goToto(){
    let scrollbehavior = 'scrollBehavior' in document.documentElement.style;
    let option = {
      "behavior": "smooth",
      "left": 0,
      "top": 0
    };
    if(scrollbehavior){
      window.scrollTo(option.left, option.top);
    }else{
      window.scrollTo(option.left, option.top);
    }

  }
  ngOnInit(){
    console.log(window.screen.width);
    window.addEventListener('scroll', (e)=>{
      let yPos = window.pageYOffset;
      let stickmenu: any = document.querySelector(".menu-container");
      // let header: any = document.querySelector(".home-container");
      let scrolT: any = document.querySelector(".scroll-up");
      let device = window.screen.width;
      if(yPos > 600){
       scrolT.style.opacity = "1";
      }else{
        scrolT.style.opacity = "0";
      }
      if(yPos > 400){
        stickmenu.style.backgroundColor = "#012334";
      }else{
        stickmenu.style.backgroundColor = "transparent";
      }
    })
  }
}
