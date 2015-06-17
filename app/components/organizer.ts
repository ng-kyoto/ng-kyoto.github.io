'use strict';
declare var WeakMap: any;
import {angular} from '../angular2';
const {Component, View, NgFor} = angular;
import {Row, Col} from '../utils/directives/bootstrap-grid';

const privateMap = new WeakMap();

@Component({
  selector: 'organizer',
  properties: {
    organizer: 'organizer',
    _allPosts: 'posts'
  }
})
@View({
  directives: [Row, Col, NgFor],
  templateUrl: './app/components/organizer.html'
})
export class OrganizerComponent {
  posts: any[];
  twitterName: string;

  constructor() {
    privateMap.set(this, {});
    console.log('OrganizerComponent constructor', this);
  }

  get organizer(): string {
    return privateMap.organizer;
  }
  set organizer(v: string) {
    privateMap.organizer = v;
    console.log(this);
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
