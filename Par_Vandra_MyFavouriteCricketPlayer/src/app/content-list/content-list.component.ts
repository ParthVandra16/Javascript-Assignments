import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CkplayerserviceService } from '../ckplayerservice.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css'],
})
export class ContentListComponent implements OnInit {
  cricketplayer: Content[] = [];
  featuredplayer: Content = {} as Content;
  public isAvailable = false;
  public searchTerm = '';
  contentList: any;

  constructor(private CkplayerserviceService: CkplayerserviceService) {
    this.isAvailable = false;
    this.searchTerm = '';
  }

  ngOnInit(): void {
    this.CkplayerserviceService['getcricketplayer']().subscribe((cricketplayer: Content[]) => {
      this.cricketplayer = cricketplayer;
    });
  }

  handleInput(event: any) {
    this.searchTerm = event.target.value;
  }

  onContentAdded(newContent: Content) {

    this.cricketplayer.push(newContent);

    console.log(`Added ${newContent.title} successfully`);

    console.log(this.cricketplayer);
  }

  searchContent() {
    console.log(this.searchTerm);

    this.contentList.forEach((cricketplayer: { title: string | string[]; }) => {
      if (cricketplayer.title.includes(this.searchTerm)) {
        this.isAvailable = true;
      } else if (this.searchTerm === '') {
        this.isAvailable = false;
      } else {
        this.isAvailable = false;
      }
    });
  }
}
