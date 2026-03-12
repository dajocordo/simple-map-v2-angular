import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MapComponent } from './views/map/map.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'map', component: MapComponent },
];

