import { Component } from '@angular/core';
import { CkplayerserviceService } from './ckplayerservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Par_Vandra_MyFavouriteCricketPlayer';

  featuredckplayer: any;

  constructor(private CkplayerserviceService: CkplayerserviceService) {}

  ngOnInit() {
    this.CkplayerserviceService['getckplayerById'](1).subscribe((cricketplayer: any ) => {
      this.featuredckplayer = cricketplayer ;
    });

}
}
