import { Component, OnInit } from '@angular/core';
// dependencies for animations
import { slideDownFirst, slideUp,slideInRight } from "./../../shared/animations";
// import slider 
// import Glide from '@glidejs/glide'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ slideDownFirst, slideUp,slideInRight]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // new Glide('.glide', {
    //   type: 'carousel',
    //   autoplay: 2000,
    //   gap:1,
    //   animationDuration: 1000,
    //   animationTimingFunc: 'linear',
    //   perView: 3,
    //   peek: 300,
    //   breakpoints: {
    //     879: {perView:2},
    //     630:{perView:1}
    //   }
    // }).mount()
    
  }

 

}
