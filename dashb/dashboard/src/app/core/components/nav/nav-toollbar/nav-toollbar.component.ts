import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Page } from '../../../services/navigation/navigation.service';

@Component({
    selector: 'app-nav-toollbar',
    templateUrl: './nav-toollbar.component.html',
    styleUrls: ['./nav-toollbar.component.scss'],
})
export class NavToollbarComponent implements OnInit {
    @Input() activePage: Page;
    @Input() previousUrl: string[];
    @Output() toggleSideNav = new EventEmitter();
    @Output() logout = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    public onToggleSideNav() {
        this.toggleSideNav.emit();
    }

    public onLogout() {
        this.logout.emit();
    }
}
