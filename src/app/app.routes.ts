import { Routes } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CareerComponent } from './career/career.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: '/loading', pathMatch: 'full'},
    {path: 'loading', component: LoadingComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'career', component: CareerComponent},
    {path: 'about', component: AboutComponent},
    {path: 'services', component: ServicesComponent},
    {path: '**', component: NotFoundComponent}
];
