import { Component, Input, OnInit } from '@angular/core';
import { NavRoute } from '../../../../nav-routing';
import { NavigationService } from '../../../services/navigation/navigation.service';

@Component({
    selector: 'app-nav-menu-item',
    templateUrl: './nav-menu-item.component.html',
    styleUrls: ['./nav-menu-item.component.scss'],
})
export class NavMenuItemComponent implements OnInit {
    //description: Receive navigation item as input from the nab.html aomponent
    @Input() navigationItem: NavRoute = {} as NavRoute;

    constructor(private navigationService: NavigationService) {}

    ngOnInit() {}

    //@description Fetch and Validate the selected nav routing option/tab/buttom
    public isSelected(navItem: NavRoute) {
        return this.navigationService.getSelectedNavigationItem() === navItem;
    }

    //@description - If to see if a sidenav menu option exists and if its selected.
    // If not, return and display a list of all sidenav child route with not special css
    public shouldOpenGroup(groupedNavItems: NavRoute[]) {

        return groupedNavItems.reduce((shouldOpen, navItem) => {
            return shouldOpen || this.isSelected(navItem);
        }, false);
    }
}
