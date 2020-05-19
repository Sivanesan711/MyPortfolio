import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillComponent } from './skill/skill.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  {path: 'home' , component: HomeComponent},
  {path: 'bio' , component: BioComponent},
  {path: 'contact' , component: ContactComponent},
  {path: 'portfolio' , component: PortfolioComponent},
  {path: 'skill' , component: SkillComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
