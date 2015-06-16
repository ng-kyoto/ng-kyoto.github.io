'use strict';
declare function fetch(...arg: any[]);
import {angular} from '../angular2';
const {Component, View, NgFor} = angular;
import {Row, Col} from '../utils/directives/bootstrap-grid';

@Component({
  selector: 'organizers',
})
@View({
  directives: [Row, Col, NgFor],
  templateUrl: './app/components/organizers.html'
})
export class OrganizersComponent {
  angularPosts: any;

  constructor() {
    this.angularPosts = this.fetchUser();
    this.angularPosts.then(res => console.log(res));
  }

  /**
   * @returns {Promise}
   */
  fetchUser(): Promise<any> {
    return new Promise((resolve, reject) => {
      fetch(`http://qiita.com/api/v2/items?per_page=20&query=user:_likr%20or%20user:armorik83%20or%20user:shinsukeimai`, {
        method: 'get'
      })
      .then (res  => res.json())
      .then (json => resolve(this.filterPost(json)))
      .catch(err  => reject(err));
    });
  }

  /**
   * returns exp.
   * [[imai, imai, imai], [armorik83, armorik83, armorik83], [_likr]]
   *
   * @param {Array<*>} posts
   * @returns {Array<*>}
   */
  filterPost(posts: any[]): any[] {
    const organizersPosts = {};
    posts.map(post => {
        const isAngularPost = post.tags.some(tag => tag.name.match(/ngular/));
        return isAngularPost ? post : void 0;
      })
      .filter(post => post)
      .filter((post, idx) => idx < 20)
      .forEach(post => {
        organizersPosts[post.user.id] = organizersPosts[post.user.id] || [];
        if (5 <= organizersPosts[post.user.id].length) { return; }
        organizersPosts[post.user.id].push(post);
      });

    const result = [];
    Object.keys(organizersPosts).forEach(organizer => result.push(organizersPosts[organizer]));

    // The return type must be an Array<Array<QiitaPost>>
    return result;
  }
}
