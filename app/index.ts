/// <reference path="../typings/angular2/angular2.d.ts"/>
/// <reference path="../typings/es6-promise/es6-promise.d.ts"/>

declare var require: any;
require('whatwg-fetch');
import './utils/innertext-polyfill';
import {angular} from './angular2';
const {bootstrap} = angular;
import {App} from './components/app';

bootstrap(App);
