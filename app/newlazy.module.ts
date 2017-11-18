import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutguardComponent } from './routguard/routguard.component';
import { GoodboyComponent } from './goodboy/goodboy.component';
import { Routes, RouterModule } from '@angular/router';
import { BadboyComponent } from './badboy/badboy.component';
import { RouteguardService } from './services/routeguard.service';

// const routes : Routes =[
// {path: 'routeguard' , component : RoutguardComponent,
// child:[{path:'goodboy', component: GoodboyComponent},
//        {path:'badboy', component: BadboyComponent}
//      ]}
//    ];

//above dose not throw error but view cant load ,patth becomes wronf


//Bad Idea of using for Root
// const routes4child : Routes =[
//     {path:'goodboy', component: GoodboyComponent},
//     {path:'badboy', component: BadboyComponent}
//       ];

//GOOD ROUTE THAT WORKS
// const routes: Routes = [
//   {
//     path:'' ,component:RoutguardComponent, 
//     children: [
//       {path:'goodboy', component: GoodboyComponent  },
//       {path:'badboy', component: BadboyComponent },
//       { path: '**', redirectTo: '' }
//     ]
//   }
//
// ];



// WORKED NICELY HURRAY
const routes: Routes = [
  {
    path:'' ,component:RoutguardComponent
   ,
    children: [
      {path:'goodboy', component: GoodboyComponent, canActivate : [RouteguardService] },
      {path:'badboy', component: BadboyComponent, canActivate : [RouteguardService]},
      { path: '**', redirectTo: '' }
    ]
  }

];






@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    //RouterModule.forRoot(routes4child)// Throws error cannt use 2 forRoot
  ],
  providers : [RouteguardService],
  declarations: [RoutguardComponent,GoodboyComponent, BadboyComponent]
})
export class NewlazyModule { }
