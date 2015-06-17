'use strict';
import {angular} from '../angular2';
const {Component, View, NgFor} = angular;
import {Row, Col} from '../utils/directives/bootstrap-grid';

@Component({
  selector: 'organizer',
  properties: {
    _organizer: 'organizer',
    _allPosts: 'posts'
  }
})
@View({
  directives: [Row, Col, NgFor],
  templateUrl: './app/components/organizer.html'
})
export class OrganizerComponent {
  posts: any[];
  organizer: string;
  twitterName: string;

  constructor() {
    console.log('OrganizerComponent constructor', this);
  }

  set _organizer(v: string) {
    console.log(v);
    this.organizer = v;
  }

  set _allPosts(allPosts: any) {
    allPosts.then((res: any[][]) => {
      res.forEach(posts => {
        if (!posts) { return; }
        if (posts[0].user.id !== this.organizer) { return; }

        this.posts = posts;
        this.twitterName = posts[0].user.twitter_screen_name
      });
    });
  }
}
