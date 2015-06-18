'use strict';
declare var WeakMap: any;
import {angular} from '../angular2';
const {Component, View, NgFor} = angular;
import {Row, Col} from '../utils/directives/bootstrap-grid';

@Component({
  selector: 'organizer',
  properties: {
    organizer: 'organizer',
    allPosts: 'posts'
  }
})
@View({
  directives: [Row, Col, NgFor],
  templateUrl: './app/components/organizer.html'
})
export class OrganizerComponent {
  posts: any[];
  console: any;
  twitterName: string;
  privateMap: typeof WeakMap;

  constructor() {
    this.console = console;
    this.privateMap = new WeakMap();
    this.privateMap.set(this, {});
  }

  get organizer(): string {
    return this.privateMap.organizer;
  }
  set organizer(v: string) {
    this.privateMap.organizer = v;
  }

  get organizerAvatar(): string {
    return `./app/images/avatar-${this.organizer}.png`;
  }

  set allPosts(allPosts: any) {
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
