'use strict';
import {defaultPipes} from 'angular2/change_detection';
import {Pipe} from 'angular2/angular2';

class Spacing extends Pipe {
 supports(obj) {
   return typeof obj === 'string';
 }

 transform(value) {
   return `${value}`;
 }

  create() {
    return this;
  }
}

export var pipes = (<any>Object).assign({}, defaultPipes, {
  'spacing': [new Spacing()]
});
