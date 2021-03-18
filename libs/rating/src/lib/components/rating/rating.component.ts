/* eslint-disable max-len */
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngnz-rating',
  template: `
    <ul>
      <li *ngFor="let s of [].constructor(maxRate); let i = index"  [ngSwitch]="true">

          <svg 
              *ngSwitchCase="currentRate >= i && currentRate >= i + 1"
              xmlns='http://www.w3.org/2000/svg' 
              viewBox='0 0 512 512'
              [attr.class]="hoverEffect"
              [attr.fill]="color"
              [style.color]="color"
              [style.width]="maxPxSize + 'px'"
              [style.height]="maxPxSize + 'px'"
              (click)="rate(i)">
            <!-- <title>Star</title> -->
            <path d='M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z'/>
          </svg>
          <svg 
              *ngSwitchCase="currentRate <= i"
              xmlns='http://www.w3.org/2000/svg' 
              viewBox='0 0 512 512'
              [attr.class]="hoverEffect"
              [style.color]="color"
              [style.width]="maxPxSize + 'px'"
              [style.height]="maxPxSize + 'px'"
              (click)="rate(i)">
            <!-- <title>Star-outline</title> -->
            <path 
                d='M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z' 
                fill='none' 
                stroke='currentColor' 
                stroke-linejoin='round' 
                stroke-width='32'/>
          </svg>
          <svg 
              *ngSwitchCase="currentRate > i && currentRate < i + 1"
              xmlns='http://www.w3.org/2000/svg' 
              viewBox='0 0 512 512'
              [attr.class]="hoverEffect"
              [style.color]="color"
              [attr.fill]="color"
              [style.width]="maxPxSize + 'px'"
              [style.height]="maxPxSize + 'px'"
              (click)="rate(i)">
            <!-- <title>Star Half</title> -->
            <path 
                d='M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z' 
                fill='none' 
                stroke='currentColor' 
                stroke-linejoin='round' 
                stroke-width='32'/>
              <path d='M256 48v316L118 464l54-160-140-96h172l52-160z'/>
          </svg>

      </li>
    </ul>
  `,
  styles: [`
    :host {
      display: block;
      position: relative;
    }
    :host ul {
      display: block;
      margin: 0;
      padding:0;
    }
    :host li {
      margin: 0;
      padding: 0.1rem;
      display: inline-block;
      cursor: pointer;
    }
    :host svg {
      transition: 125ms  all ease-in-out;
    }
    :host svg.opacity:hover {
      opacity: 0.5;
    }
    :host svg.scale:hover {
      transform: scale(1.3);
    }
  `]
})
export class RatingComponent {

  @Input() currentRate = 2.5;
  @Input() maxRate = 5;
  @Input() maxPxSize = 32;
  @Input() color = 'gold';
  @Input() hoverEffect: 'scale' | 'opacity' = 'scale';
  @Output() eventActions: EventEmitter<{type: string, payload: number}> = new EventEmitter(null);

  rate(value:number) {
    this.eventActions.emit({
      type: 'onRating',
      payload: ++value
    })
  }

}
