import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// @ts-ignore
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
// @ts-ignore
import { ContentFilterPipe } from './content-list/content-filter.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { MessagesComponent } from './messages/messages.component';
import { CreateContentComponent } from './createcontent/createcontent.component';
import { CkplayerserviceService } from './ckplayerservice.service';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    ContentFilterPipe,
    HoverAffectDirective,
    MessagesComponent,
    CreateContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CkplayerserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
