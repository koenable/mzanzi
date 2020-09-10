// dependencies for animations
import {
    trigger,
    state,
    style,
    animate,
    transition,
  } from '@angular/animations';


   export let slideDownAfter =  trigger('slideDownAfter', [
    transition('void => *', [
      style({ opacity: 0, transform: 'translateY(-10%)' }),
      animate('0.6s 5000ms ease-in-out')
    ]),
    transition('* => void', [
      animate('10ms ease-in-out', style({ transform: 'translateY(100%)' }))
    ])
  ])

  export let slideDownFirst =  trigger('slideDownFirst', [
    transition('void => *', [
      style({ opacity: 0,   transform: 'translateY(-10%)' }),
      animate('0.6s 1000ms ease-in-out')
    ]),
    transition('* => void', [
      animate('10ms ease-in-out', style({ transform: 'translateY(100%)' }))
    ])
  ])


export let slideUp = trigger('slideUp', [
  transition('void => *', [
      style({opacity:0, transform: 'translateY(10%)'}),
      animate('0.6s 3000ms ease-in-out')
  ]),
  transition('* => void', [
      animate('10ms ease-in-out', style({transform: 'translateY(-120%)'}))    
  ])
]);


export let slideInRight = trigger('slideInRight', [
  transition('void => *', [
      style({opacity:0, transform: 'translateX(-50%)'}),
      animate('0.9s 900ms ease-in-out')
  ]),
  transition('* => void', [
      animate('10ms ease-in-out', style({transform: 'translateY(100%)'}))    
  ])
]);