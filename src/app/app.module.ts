import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'

/*Components*/
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { MainComponent } from './components/main/main.component';
import { ContentComponent } from './components/content/content.component';
/*Directives*/
import { RippleDirective } from './directives/ripple.directive';
/*Services*/
import { ContentVmService } from './components/content/content-vm.service';
/*Modules*/
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CardComponent,
    RippleDirective,
    MainComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ContentVmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
