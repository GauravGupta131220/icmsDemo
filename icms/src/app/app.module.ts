import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { PrjectMasterComponent } from './prject-master/prject-master.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MasterDetailsComponent } from './master-details/master-details.component';


const appRoutes: Routes = [
  { path: 'projectMaster', component: PrjectMasterComponent },
  { path: 'masterDetails', component: MasterDetailsComponent },
  
  { path: '',
    redirectTo: '/masterDetails',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PrjectMasterComponent,
    PageNotFoundComponent,
    MasterDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
