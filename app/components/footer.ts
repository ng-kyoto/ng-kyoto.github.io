'use strict';
import {angular} from '../angular2';
const {Component, View} = angular;
import {Row, Col} from '../utils/directives/bootstrap-grid';

@Component({
  selector: 'ng-kyoto-footer'
})
@View({
  directives: [Row, Col],
  templateUrl: './app/components/footer.html'
})
export class FooterComponent {
  constructor() {
    // noop
  }
}
