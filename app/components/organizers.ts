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
  organizers = ['armorik83', '_likr', 'shinsukeimai'];

  constructor() {
    const promises = this.organizers.map(user => this.fetchUser(user));

    this.angularPosts = new Promise(resolve => Promise.all(promises).then(res => {
      console.log(res);
      resolve(res);
    }));
  }

  /**
   * @param {string} userId
   * @returns {Promise}
   */
  fetchUser(userId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      fetch(`http://qiita.com/api/v2/users/${userId}/items?per_page=20`, {
        method: 'get' //
      })
      .then (res  => res.json())
      .then (json => resolve(this.filterPost(json)))
      .catch(err  => reject(err));
    });
  }

  /**
   * @param {Array<*>} posts
   * @returns {void}
   */
  filterPost(posts: any[]): any[] {
    const result = posts
      .map(post => {
        const isAngularPost = post.tags.some(tag => tag.name.match(/ngular/));
        return isAngularPost ? post : void 0;
      })
      .filter(post => post)
      .filter((post, idx) => idx < 5);

    return result;
  }
}
