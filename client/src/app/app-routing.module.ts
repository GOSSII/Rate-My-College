// Wep App - Black dot
// Description - BlackDot is to create surveys for the college and ask user to respond on in.

// Dipeshpuri Goswami - 300984229
// Sanket Vagadiya - 300991500
// Ishrat Vahora - 30098257
// Manthan Shah - 300990910



// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactDeleteComponent } from './contacts/contact-delete/contact-delete.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { Survey1Component } from './survey1/survey1.component';
import { TestComponent } from './test/test.component';
import { TakeSurveyComponent } from './take-survey/take-survey.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ReportComponent } from './report/report.component'

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'takesurvey', component: TakeSurveyComponent, data: {title: 'Take Survey'}},
  {path: 'takesurvey/:id', component: TakeSurveyComponent, data: {title: 'Take Survey'}},
  {path: 'thankyou', component: ThankyouComponent, data: {title: 'Thank you'}},


  {path: 'admin', component: AdminDashboardComponent, data: {title: 'admin'} ,canActivate: [AuthGuard]},
  {path: 'UserProfile', component: UserProfileComponent, data: {title: 'UserProfile'} ,canActivate: [AuthGuard]},
  {path: 'Survey1', component: Survey1Component, data: {title: 'Survey1'} ,canActivate: [AuthGuard]},
  {path: 'test', component: TestComponent, data: {title: 'Survey1'} ,canActivate: [AuthGuard]},
  {path: 'report/:id', component: ReportComponent, data: {title: 'Survey Report'} ,canActivate: [AuthGuard]},

  {path: 'about', component: AboutComponent, data: {title: 'About'}},
  {path: 'products', component: ProductsComponent, data: {title: 'Products'}},
  {path: 'services', component: ServicesComponent, data: {title: 'Services'}},
  {path: 'contact', component: ContactComponent, data: {title: 'Contact'}},
  {path: 'contact/contact-list', component: ContactListComponent, data: {title: 'Contact List'}, canActivate: [AuthGuard]},

  {path: 'contact/contact-list/add', component: ContactDetailsComponent, data: {title: 'Add Survey'}, canActivate: [AuthGuard]},
  {path: 'contact/contact-list/edit/:id', component: ContactDetailsComponent, data: {title: 'Edit Survey'}, canActivate: [AuthGuard]},
  {path: 'contact/contact-list/delete/:id', component: ContactDeleteComponent, data: {title: 'Add Survey'}, canActivate: [AuthGuard]},
 
  {path: 'register', component: RegisterComponent, data: {title: 'Register'}},
  {path: 'login', component: LoginComponent, data: {title: 'Register'}},
  {path: 'logout', redirectTo: '/login', pathMatch: 'full'},

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
