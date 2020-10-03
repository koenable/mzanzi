import { Route, Router } from '@angular/router';
import { Injectable } from '@angular/core';

export interface NavRoute extends Route {
    path?: string;
    icon?: string;
    group?: string;
    groupedNavRoutes?: NavRoute[];
}

export const sideNavPath = 'nav';

export const navRoutes: NavRoute[] = [
    {
        data: { title: 'Home' },
        icon: 'home',
        path: 'home',
        loadChildren: () =>
            import('./pages/home-page/home-page.module').then(
                m => m.HomePageModule,
            ),
    },
    {
        data: { title: 'Tournaments' },
        icon: 'home',
        path: 'tournaments',
        loadChildren: () =>
            import('./pages/tournaments-page/tournaments-page.module').then(
                m => m.TournamentsPageModule,
            ),
    }
    ,
    {
        data: { title: 'Teams' },
        icon: 'teams',
        path: 'teams',
        loadChildren: () =>
            import('./pages/teams-page/teams-page.module').then(
                m => m.TeamsPageModuleModule,
            ),
    }
    ,
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];

@Injectable({
    providedIn: 'root',
})
export class NavRouteService {
    navRoute: Route;
    navRoutes: NavRoute[];

    constructor(router: Router) {
        //@description - Return the the selected route groups from/to the sidenav when home page
        this.navRoute = router.config.find(route => route.path === sideNavPath);
        this.navRoutes = this.navRoute.children
            .filter(route => route.data && route.data.title)
            .reduce((groupedList: NavRoute[], route: NavRoute) => {
                if (route.group) {
                    const group: NavRoute = groupedList.find(navRoute => {
                        return (
                            navRoute.group === route.group &&
                            navRoute.groupedNavRoutes !== undefined
                        );
                    });
                    if (group) {
                        group.groupedNavRoutes.push(route);
                    } else {
                        groupedList.push({
                            group: route.group,
                            groupedNavRoutes: [route],
                        });
                    }
                } else {
                    groupedList.push(route);
                }
                return groupedList;
            }, []);
    }

    public getNavRoutes(): NavRoute[] {
        return this.navRoutes;
    }
}
