'use strict';
import {Component, View} from 'angular2/angular2';
import {HeaderComponent} from './header';
import {AboutComponent} from './about';
import {FooterComponent} from './footer';

@Component({
  selector: 'ng-kyoto-app'
})
@View({
  templateUrl: './app/components/app.html',
  directives: [
    HeaderComponent,
    AboutComponent,
    FooterComponent
  ]
})
export class App {
  constructor() {
    // noop
  }
}
