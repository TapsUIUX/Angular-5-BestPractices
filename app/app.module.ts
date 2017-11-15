import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { GetDataService } from './services/get-data.service';
import { ErrorHandlerService} from './services/error-handler.service';
import { StorageProviderService } from './services/storage-provider.service';
import { MainComponent } from './main/main.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SanitizePipe } from './pipes/sanitize.pipe';
import { HomepageComponent } from './homepage/homepage.component';
import { ErrorHandler } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';
import { ErrorlogComponent } from './errorlog/errorlog.component';

const routes : Routes =[
  {path: '' , component : HomepageComponent},
  {path: 'home' , component : HomepageComponent},
  {path: 'content' , component : MainComponent},
  //Lazy loading the form module for better performance
  {path: 'lazy' , loadChildren:'./lazyform.module#LazyformModule'}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    MainComponent,
    PaginationComponent,
    SanitizePipe,
    HomepageComponent,
    ErrorlogComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [GetDataService,StorageProviderService,ErrorHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
