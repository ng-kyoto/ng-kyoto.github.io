'use strict';
import {Component, View} from 'angular2/angular2';
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
