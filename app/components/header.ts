interface ViewContainerRef {};

import {angular} from '../angular2';
const {Component, View, ViewContainerRef} = angular;
import {Row, Col} from '../utils/directives/bootstrap-grid';

@Component({
  selector: 'apply-button',
  properties: [
    'href'
  ]
})
@View({
  directives: [Row, Col],
  template: `
  <row>
    <bcol all="12 8 6 4" all-offset="0 2 3 4">
      <a class="apply" href="{{href}}">{{label}}</a>
    </bcol>
  </row>`
})
class ApplyButton {
  label: string;

  constructor(viewContainer: ViewContainerRef) {
    this.label = (<any>viewContainer).element.domElement.innerText;
  }
}

@Component({
  selector: 'ng-kyoto-header'
})
@View({
  directives: [Row, Col, ApplyButton],
  templateUrl: './app/components/header.html'
})
export class HeaderComponent {
  constructor() {
    // noop
  }
}
