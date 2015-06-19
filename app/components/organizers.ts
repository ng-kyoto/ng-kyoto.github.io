'use strict';
declare function fetch(...arg: any[]);
import {angular} from '../angular2';
const {Component, View, NgFor} = angular;
import {OrganizerComponent} from './organizer';
import {Row, Col} from '../utils/directives/bootstrap-grid';

@Component({
  selector: 'organizers',
})
@View({
  directives: [OrganizerComponent, Row, Col, NgFor],
  templateUrl: './app/components/organizers.html'
})
export class OrganizersComponent {
  organizers = [
    {id: 'armorik83', realName: '奥野 賢太郎', description: 'ng-kyoto代表 Angular芸人'},
    {id: '_likr', realName: '尾上 洋介', description: 'やせいのプログラマー'},
    {id: 'shinsukeimai', realName: '今井 晨介', description: '体育会系プログラマ'},
  ];
  angularPosts: any;

  constructor() {
    this.angularPosts = this.fetchUser();
  }

  /**
   * @returns {Promise}
   */
  fetchUser(): Promise<any> {
    return new Promise((resolve, reject) => {
      const url = 'http://qiita.com/api/v2/items?per_page=20&query=user:_likr%20or%20user:armorik83%20or%20user:shinsukeimai';
      const mockurl = '../../mock-request.json';

      fetch(mockurl, {method: 'get'})
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
