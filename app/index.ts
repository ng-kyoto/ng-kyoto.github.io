/// <reference path="../typings/angular2/angular2.d.ts"/>
'use strict';

declare var require: any;
const reflect = require('reflect-metadata');
import {bind, PipeRegistry, Component, View, bootstrap} from 'angular2/angular2';
import {App} from './components/app';
import {pipes} from './utils/pipes/pipes';

bootstrap(App, [
  bind(PipeRegistry).toValue(new PipeRegistry(pipes))
]);
