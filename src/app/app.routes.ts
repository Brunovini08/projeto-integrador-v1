import { Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { LoginComponent } from './core/pages/login/login.component';
import { RegisterComponent } from './core/pages/register/register.component';
import { ConfirmPasswordComponent } from './core/pages/confirm-password/confirm-password.component';
import { ReportComponent } from './core/pages/report/report.component';
import { HotMapComponent } from './core/pages/hot-map/hot-map.component';
import { AboutComponent } from './core/pages/about/about.component';
import { CampaignsComponent } from './core/pages/campaigns/campaigns.component';
import { NavbarAdmComponent } from './core/Adm/navbar-adm/navbar-adm.component';
import { ForgetPasswordComponent } from './core/pages/forget-password/forget-password.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'confirm-password',
        component: ConfirmPasswordComponent
    },
    {
        path: 'complaints',
        component: ReportComponent
    },
    {
        path: 'map',
        component: HotMapComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'campaigns',
        component: CampaignsComponent
    },
    {
        path: 'navbar-adm',
        component: NavbarAdmComponent
    },
    {
        path: 'forget-password',
        component: ForgetPasswordComponent
    }
];
