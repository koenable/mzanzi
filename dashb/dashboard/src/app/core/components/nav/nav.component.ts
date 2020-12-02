import { Component, OnInit } from '@angular/core';
import {
    NavigationService,
    Page,
} from '../../services/navigation/navigation.service';
import { NavRoute } from '../../../nav-routing';
import { AuthService } from '../../../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
    mobileQuery: MediaQueryList;

    constructor(
        private navigationService: NavigationService,
        private authService: AuthService,
        private router: Router,
        private changeDetectorRef: ChangeDetectorRef,
        private media: MediaMatcher

    ) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }


    // Detected and Store boolean when DOM changes to mobile view and back. 
    private _mobileQueryListener: () => void;




    ngOnInit() { }


    public getNavigationItems(): NavRoute[] {
        return this.navigationService.getNavigationItems();
    }

    public getActivePage(): Page {
        return this.navigationService.getActivePage();
    }

    public logout() {
        this.authService.logout();
        this.router.navigate(['login'], { replaceUrl: true });
    }

    public getPreviousUrl(): string[] {
        return this.navigationService.getPreviousUrl();
    }





    // Detach mobile view change detection event Listerner  
    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
