import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'logintype',
    pathMatch: 'full'
  },
  {
    path: 'login/:id',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'register/:id',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'logintype',
    loadChildren: () => import('./logintype/logintype.module').then( m => m.LogintypePageModule)
  },
  {
    path: 'myrequests',
    loadChildren: () => import('./staff/myrequests/myrequests.module').then( m => m.MyrequestsPageModule)
  },
  {
    path: 'requests',
    loadChildren: () => import('./staff/requests/requests.module').then( m => m.RequestsPageModule)
  },
  {
    path: 'foodrequest/:id/:view/:request',
    loadChildren: () => import('./staff/foodrequest/foodrequest.module').then( m => m.FoodrequestPageModule)
  },
  {
    path: 'essentialsrequest/:id/:view/:request',
    loadChildren: () => import('./staff/essentialsrequest/essentialsrequest.module').then( m => m.EssentialsrequestPageModule)
  },
  {
    path: 'childcarerequest/:id/:view/:request',
    loadChildren: () => import('./staff/childcarerequest/childcarerequest.module').then( m => m.ChildcarerequestPageModule)
  },
  {
    path: 'helperlogin',
    loadChildren: () => import('./helperlogin/helperlogin.module').then( m => m.HelperloginPageModule)
  },
  {
    path: 'searchhospitals',
    loadChildren: () => import('./helper/searchhospitals/searchhospitals.module').then( m => m.SearchhospitalsPageModule)
  },
  {
    path: 'viewrequests/:id/:name',
    loadChildren: () => import('./helper/viewrequests/viewrequests.module').then( m => m.ViewrequestsPageModule)
  },
  {
    path: 'foodrequestdetails/:id/:view',
    loadChildren: () => import('./helper/foodrequestdetails/foodrequestdetails.module').then( m => m.FoodrequestdetailsPageModule)
  },
  {
    path: 'essentialsrequestdetails/:id/:view',
    loadChildren: () => import('./helper/essentialsrequestdetails/essentialsrequestdetails.module').then( m => m.EssentialsrequestdetailsPageModule)
  },
  {
    path: 'childcarerequestdetails/:id/:view',
    loadChildren: () => import('./helper/childcarerequestdetails/childcarerequestdetails.module').then( m => m.ChildcarerequestdetailsPageModule)
  },
  {
    path: 'myhelplist',
    loadChildren: () => import('./helper/myhelplist/myhelplist.module').then( m => m.MyhelplistPageModule)
  },
  {
    path: 'forgotpwd',
    loadChildren: () => import('./forgotpwd/forgotpwd.module').then( m => m.ForgotpwdPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'termcondition',
    loadChildren: () => import('./termcondition/termcondition.module').then( m => m.TermconditionPageModule)
  },
  {
    path: 'donate',
    loadChildren: () => import('./donate/donate.module').then( m => m.DonatePageModule)
  },
  {
    path: 'givefeedback',
    loadChildren: () => import('./givefeedback/givefeedback.module').then( m => m.GivefeedbackPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'policy',
    loadChildren: () => import('./policy/policy.module').then( m => m.PolicyPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
