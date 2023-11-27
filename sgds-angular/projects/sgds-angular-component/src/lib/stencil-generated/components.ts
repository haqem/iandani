/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import type { Components } from '@govtechsg/sgds-masthead/components';

import { defineCustomElement as defineSgdsMasthead } from '@govtechsg/sgds-masthead/components/sgds-masthead.js';


export declare interface SgdsMasthead extends Components.SgdsMasthead {}

@ProxyCmp({
  defineCustomElementFn: defineSgdsMasthead,
  inputs: ['fluid', 'sgCrest']
})
@Component({
  selector: 'sgds-masthead',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['fluid', 'sgCrest']
})
export class SgdsMasthead {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
