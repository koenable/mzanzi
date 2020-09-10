import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideDown', [
        transition('void => *', [
            style({opacity:0, transform: 'translateY(-100%)'}),
            animate('0.6s 900ms ease-in-out')
        ]),
        transition('* => void', [
            animate('10ms ease-in-out', style({transform: 'translateY(100%)'}))    
        ])
    ])
]
})
export class AppComponent {
  title = 'mcc';
}
