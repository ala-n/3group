import {  RouterConfig } from '@angular/router';
import {TestComponent} from "../runTest/test.component";

export const HomepageRoutes: RouterConfig = [
    {
        path: 'runTest',
        component: TestComponent
    }
];
