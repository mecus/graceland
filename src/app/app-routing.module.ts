import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "terms_of_business", component: TermsConditionComponent },
  { path: "privacy", component: PrivacyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
