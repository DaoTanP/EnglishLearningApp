import { Routes } from "@angular/router";
import { ProfileComponent } from "../components/profile/profile.component";

export const mainLayoutRoute: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: ProfileComponent },
    { path: 'profile', component: ProfileComponent },
]