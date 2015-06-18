'use strict';
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
  _organizer: any;
  posts: any[];
  twitterName: string;

  constructor() {
    // noop
  }

  get organizer(): any {
    return this._organizer
  }
  set organizer(v: any) {
    this._organizer = v;
  }

  get organizerHead(): string {
    const org = this.organizer
    return (org.realName) ? `${org.realName} (${org.id})` : org.id;
  }

  get organizerAvatar(): string {
    return `./app/images/avatar-${this.organizer.id}.png`;
  }

  set allPosts(allPosts: any) {
    allPosts.then((res: any[][]) => {
      res.forEach(posts => {
        if (!posts) { return; }
        if (posts[0].user.id !== this.organizer.id) { return; }

        this.posts = posts;
        this.twitterName = posts[0].user.twitter_screen_name
      });
    });
  }
}
