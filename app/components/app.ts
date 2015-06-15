'use strict';
import {angular} from '../angular2';
const {Component, View} = angular;
import {HeaderComponent} from './header';
import {AboutComponent} from './about';
import {OrganizersComponent} from './organizers';
import {FooterComponent} from './footer';

@Component({
  selector: 'ng-kyoto-app'
})
@View({
  templateUrl: './app/components/app.html',
  directives: [
    HeaderComponent,
    AboutComponent,
    OrganizersComponent,
    FooterComponent
  ]
})
export class App {
  constructor() {
    // noop
  }
}
