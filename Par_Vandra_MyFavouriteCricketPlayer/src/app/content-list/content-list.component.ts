
import {Component, OnInit} from '@angular/core';
import {Content} from '../helper-files/content-interface';


// @ts-ignore
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  public isAvailable = false;
  public searchTerm = '';
  contentList: Content[] = [
    {
      id: 1,
      title: 'Cricketer 1',
      // imageURL: '',
      description: 'Description of cricketer 1',
      cricketername: 'Hardik Pandya',
      type: 'Type 1',
      tags: ['Tag 1', 'Tag 2']
    },
    {
      id: 2,
      title: 'Cricketer 2',
      //imageURL: 'https://angular.io/assets/images/logos/angular/angular.png',
      description: 'Description of cricketer 2',
      cricketername: 'Virat Kholi',
      type: 'Type 2',
      tags: ['Tag 2', 'Tag 3']
    },
    {
      id: 3,
      title: 'Cricketer 3',

      description: 'Description of cricketer 3',
      cricketername: 'Shubhman Gill',
      type: 'Type 3',
      tags: ['Tag 3', 'Tag 4']
    },
    {
      id: 4,
      title: 'Cricketer 4',
      // imageURL: 'https://angular.io/assets/images/logos/angular/angular.png',
      description: 'Description of cricketer 4',
      cricketername: 'Rohit Sharma',
      type: 'Type 4',
      tags: ['Tag 4', 'Tag 5']
    },
    {
      id: 5,
      title: 'Cricketer 5',
      // imageURL: 'https://angular.io/assets/images/logos/angular/angular.png',
      description: 'Description of cricketer 5',
      cricketername: 'Sachin Tendulkar',
      type: 'Type 5',
      tags: ['Tag 5', 'Tag 6']
    },
    {
      id: 6,
      title: 'Cricketer 6',
      //  imageURL: 'https://angular.io/assets/images/logos/angular/angular.png',
      description: 'Description of crocketer 6',
      cricketername: 'Krunal Pandya',
      type: 'Type 6',
      tags: ['Tag 6', 'Tag 7']
    },
    {
      id: 7,
      title: 'Cricketer 7',
      //  imageURL: 'https://angular.io/assets/images/logos/angular/angular.png',
      description: 'Description of crocketer 7',
      cricketername: 'Ishan kisan',
      type: 'Type 6',
      tags: ['Tag 6', 'Tag 7']
    }];

  ngOnInit() {
  }

  constructor() {
    this.isAvailable = false;
    this.searchTerm = '';
  }

  handleInput(event: any) {
    this.searchTerm = event.target.value;
  }

  searchContent() {
    console.log(this.searchTerm);

    this.contentList.forEach((content) => {
      if (content.title.includes(this.searchTerm)) {
        this.isAvailable = true;
      } else if (this.searchTerm === '') {
        this.isAvailable = false;
      } else {
        this.isAvailable = false;
      }
    });
  }
}
