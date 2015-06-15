interface ViewContainerRef {}

import {angular} from '../../angular2';
const {Directive, ViewContainerRef} = angular;

const rowTag = 'row';
const colTag = 'bcol'; // <col> overlap with the existing elements

document.addEventListener('DOMContentLoaded', (event) => {
  const style = document.createElement('style');
  const text = `${rowTag}, ${colTag} { display: block; }`;

  if (style.innerText === void 0) {
    style.textContent = text;
  } else {
    style.innerText = text;
  }

  document.head.appendChild(style);
});

@Directive({
  selector: rowTag
})
export class Row {
  constructor(viewContainer: ViewContainerRef) {
    const elm = (<any>viewContainer).element.domElement;
    elm.classList.add('row');
  }
}

@Directive({
  selector: colTag,
  properties: {
    'xs':        'xs',
    'sm':        'sm',
    'md':        'md',
    'lg':        'lg',
    'xsOffset':  'xsOffset',
    'smOffset':  'smOffset',
    'mdOffset':  'mdOffset',
    'lgOffset':  'lgOffset',
    'xsPush':    'xsPush',
    'smPush':    'smPush',
    'mdPush':    'mdPush',
    'lgPush':    'lgPush',
    'xsPull':    'xsPull',
    'smPull':    'smPull',
    'mdPull':    'mdPull',
    'lgPull':    'lgPull',
    'all':       'all',
    'allOffset': 'allOffset',
    'allPush':   'allPush',
    'allPull':   'allPull'
  }
})
export class Col {
  constructor(public viewContainer: ViewContainerRef) {
    //
  }

  addClass(cls: string) {
    (<any>this.viewContainer).element.domElement.classList.add(cls);
  }

  set xs(n) { if (+n === 0) { return; } this.addClass(`col-xs-${n}`); }
  set sm(n) { if (+n === 0) { return; } this.addClass(`col-sm-${n}`); }
  set md(n) { if (+n === 0) { return; } this.addClass(`col-md-${n}`); }
  set lg(n) { if (+n === 0) { return; } this.addClass(`col-lg-${n}`); }

  set xsOffset(n) { if (+n === 0) { return; } this.addClass(`col-xs-offset-${n}`); }
  set smOffset(n) { if (+n === 0) { return; } this.addClass(`col-sm-offset-${n}`); }
  set mdOffset(n) { if (+n === 0) { return; } this.addClass(`col-md-offset-${n}`); }
  set lgOffset(n) { if (+n === 0) { return; } this.addClass(`col-lg-offset-${n}`); }

  set xsPush(n) { if (+n === 0) { return; } this.addClass(`col-xs-push-${n}`); }
  set smPush(n) { if (+n === 0) { return; } this.addClass(`col-sm-push-${n}`); }
  set mdPush(n) { if (+n === 0) { return; } this.addClass(`col-md-push-${n}`); }
  set lgPush(n) { if (+n === 0) { return; } this.addClass(`col-lg-push-${n}`); }

  set xsPull(n) { if (+n === 0) { return; } this.addClass(`col-xs-pull-${n}`); }
  set smPull(n) { if (+n === 0) { return; } this.addClass(`col-sm-pull-${n}`); }
  set mdPull(n) { if (+n === 0) { return; } this.addClass(`col-md-pull-${n}`); }
  set lgPull(n) { if (+n === 0) { return; } this.addClass(`col-lg-pull-${n}`); }

  set all(allval: string) {
    const vals = allval.split(' ');
    this.xs = vals[0];
    this.sm = vals[1];
    this.md = vals[2];
    this.lg = vals[3];
  }

  set allOffset(allval: string) {
    const vals = allval.split(' ');
    this.xsOffset = vals[0];
    this.smOffset = vals[1];
    this.mdOffset = vals[2];
    this.lgOffset = vals[3];
  }

  set allPush(allval: string) {
    const vals = allval.split(' ');
    this.xsPush = vals[0];
    this.smPush = vals[1];
    this.mdPush = vals[2];
    this.lgPush = vals[3];
  }

  set allPull(allval: string) {
    const vals = allval.split(' ');
    this.xsPull = vals[0];
    this.smPull = vals[1];
    this.mdPull = vals[2];
    this.lgPull = vals[3];
  }
}
