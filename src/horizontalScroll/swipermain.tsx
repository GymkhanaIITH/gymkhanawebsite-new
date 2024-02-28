// HorizontalTimeline.ts
import { Util } from './util'; // Adjust the path according to your file structure
import SwipeContent from './swipecontent';

// Your HorizontalTimeline class and other code here

interface HorizontalTimelineElement extends HTMLElement {
    getElementsByClassName(classNames: string): HTMLCollectionOf<HTMLElement>;
  }
  
  interface HorizontalTimelineEvent extends Event {
    target: HTMLElement;
  }
  
  class HorizontalTimeline {
    element: HorizontalTimelineElement;
    datesContainer: HTMLElement;
    line: HTMLElement;
    fillingLine: HTMLElement;
    date: HTMLCollectionOf<HTMLElement>;
    selectedDate: HTMLElement;
    dateValues: Date[];
    minLapse: number;
    navigation: HTMLCollectionOf<HTMLElement>;
    contentWrapper: HTMLElement;
    content: HTMLCollectionOf<HTMLElement>;
    eventsMinDistance: number;
    eventsMaxDistance: number;
    translate: number;
    lineLength: number;
    oldDateIndex: number;
    newDateIndex: number;
  
    constructor(element: HorizontalTimelineElement) {
      this.element = element;
      this.datesContainer = this.element.getElementsByClassName('cd-h-timeline__dates')[0];
      this.line = this.datesContainer.querySelector('.cd-h-timeline__line') as HTMLElement;
      this.fillingLine = this.datesContainer.querySelector('.cd-h-timeline__filling-line') as HTMLElement;
      
      this.date = this.line.getElementsByClassName('cd-h-timeline__date') as HTMLCollectionOf<HTMLElement>;
      this.selectedDate = this.line.getElementsByClassName('cd-h-timeline__date--selected')[0] as HTMLElement;
      this.dateValues = this.parseDate();
      this.minLapse = this.calcMinLapse();
      this.navigation = this.element.getElementsByClassName('cd-h-timeline__navigation') as HTMLCollectionOf<HTMLElement>;
      this.contentWrapper = this.element.getElementsByClassName('cd-h-timeline__events')[0] as HTMLElement;
      this.content = this.contentWrapper.getElementsByClassName('cd-h-timeline__event') as HTMLCollectionOf<HTMLElement>;
      this.eventsMinDistance = 60;
      this.eventsMaxDistance = 200;
      this.translate = 0;
      this.lineLength = 0;
      this.oldDateIndex = this.getIndexInArray(this.date, this.selectedDate);
      this.newDateIndex = this.oldDateIndex;
  
      this.initTimeline();
      this.initEvents();
    }
  
    private initTimeline(): void {
      let left = 0;
      for (let i = 0; i < this.dateValues.length; i++) {
        const j = (i === 0) ? 0 : i - 1;
        let distance = this.daydiff(this.dateValues[j], this.dateValues[i]);
        let distanceNorm = (Math.round(distance / this.minLapse) + 2) * this.eventsMinDistance;
  
        if (distanceNorm < this.eventsMinDistance) {
          distanceNorm = this.eventsMinDistance;
        } else if (distanceNorm > this.eventsMaxDistance) {
          distanceNorm = this.eventsMaxDistance;
        }
        left = left + distanceNorm;
        this.date[i].setAttribute('style', 'left:' + left + 'px');
      }
  
      this.line.style.width = (left + this.eventsMinDistance) + 'px';
      this.lineLength = left + this.eventsMinDistance;
  
      Util.addClass(this.element, 'cd-h-timeline--loaded');
      this.selectNewDate(this.selectedDate);
      this.resetTimelinePosition('next');
    }
  
    private initEvents(): void {
      this.navigation[0].addEventListener('click', (event) => {
        event.preventDefault();
        this.translateTimeline('prev');
      });
  
      this.navigation[1].addEventListener('click', (event) => {
        event.preventDefault();
        this.translateTimeline('next');
      });
  
      new SwipeContent(this.datesContainer);
      this.datesContainer.addEventListener('swipeLeft', () => {
        this.translateTimeline('next');
      });
  
      this.datesContainer.addEventListener('swipeRight', () => {
        this.translateTimeline('prev');
      });
  
      for (let i = 0; i < this.date.length; i++) {
        this.date[i].addEventListener('click', (event) => {
          event.preventDefault();
          this.selectNewDate(event.target as HTMLElement);
        });
  
        this.content[i].addEventListener('animationend', (event) => {
          if (i === this.newDateIndex && this.newDateIndex !== this.oldDateIndex) this.resetAnimation();
        });
      }
    }
  
    private updateFilling(): void {
      const dateStyle = window.getComputedStyle(this.selectedDate, null);
      let left = parseFloat(dateStyle.getPropertyValue("left"));
      let width = parseFloat(dateStyle.getPropertyValue("width"));
      left = left + width / 2;
      this.fillingLine.style.transform = 'scaleX(' + (left / this.lineLength) + ')';
    }
  
    private translateTimeline(direction: string): void {
      const containerWidth = this.datesContainer.offsetWidth;
      if (direction) {
        this.translate = (direction === 'next') ? this.translate - containerWidth + this.eventsMinDistance : this.translate + containerWidth - this.eventsMinDistance;
      }
      if (0 - this.translate > this.lineLength - containerWidth) this.translate = containerWidth - this.lineLength;
      if (this.translate > 0) this.translate = 0;
  
      this.line.style.transform = 'translateX(' + this.translate + 'px)';
  
      if (this.translate === 0) {
        Util.addClass(this.navigation[0], 'cd-h-timeline__navigation--inactive');
      } else {
        Util.removeClass(this.navigation[0], 'cd-h-timeline__navigation--inactive');
      }
  
      if (this.translate === containerWidth - this.lineLength) {
        Util.addClass(this.navigation[1], 'cd-h-timeline__navigation--inactive');
      } else {
        Util.removeClass(this.navigation[1], 'cd-h-timeline__navigation--inactive');
      }
    }
  
    private selectNewDate(target: HTMLElement): void {
      this.newDateIndex = this.getIndexInArray(this.date, target);
      this.oldDateIndex = this.getIndexInArray(this.date, this.selectedDate);
      Util.removeClass(this.selectedDate, 'cd-h-timeline__date--selected');
      Util.addClass(this.date[this.newDateIndex], 'cd-h-timeline__date--selected');
      this.selectedDate = this.date[this.newDateIndex];
      this.updateOlderEvents();
      this.updateVisibleContent();
      this.updateFilling();
    }
  
    private updateOlderEvents(): void {
      for (let i = 0; i < this.date.length; i++) {
        if (i < this.newDateIndex) {
          Util.addClass(this.date[i], 'cd-h-timeline__date--older-event');
        } else {
          Util.removeClass(this.date[i], 'cd-h-timeline__date--older-event');
        }
      }
    }
  
    private updateVisibleContent(): void {
      let classEntering: string, classLeaving: string;
  
      if (this.newDateIndex > this.oldDateIndex) {
        classEntering = 'cd-h-timeline__event--selected cd-h-timeline__event--enter-right';
        classLeaving = 'cd-h-timeline__event--leave-left';
      } else if (this.newDateIndex < this.oldDateIndex) {
        classEntering = 'cd-h-timeline__event--selected cd-h-timeline__event--enter-left';
        classLeaving = 'cd-h-timeline__event--leave-right';
      } else {
        classEntering = 'cd-h-timeline__event--selected';
        classLeaving = '';
      }
  
      Util.addClass(this.content[this.newDateIndex], classEntering);
  
      if (this.newDateIndex !== this.oldDateIndex) {
        Util.removeClass(this.content[this.oldDateIndex], 'cd-h-timeline__event--selected');
        Util.addClass(this.content[this.oldDateIndex], classLeaving);
        this.contentWrapper.style.height = this.content[this.newDateIndex].offsetHeight + 'px';
      }
    }
  
    private resetAnimation(): void {
      this.contentWrapper.style.height = null;
      Util.removeClass(this.content[this.newDateIndex], 'cd-h-timeline__event--enter-right cd-h-timeline__event--enter-left');
      Util.removeClass(this.content[this.oldDateIndex], 'cd-h-timeline__event--leave-right cd-h-timeline__event--leave-left');
    }
  
    public keyNavigateTimeline(direction: string): void {
      const newIndex = (direction === 'next') ? this.newDateIndex + 1 : this.newDateIndex - 1;
      if (newIndex < 0 || newIndex >= this.date.length) return;
      this.selectNewDate(this.date[newIndex]);
      this.resetTimelinePosition(direction);
    }
  
    private resetTimelinePosition(direction: string): void {
      const eventStyle = window.getComputedStyle(this.selectedDate, null);
      const eventLeft = parseFloat(eventStyle.getPropertyValue('left').replace('px', ''));
      const timelineWidth = this.datesContainer.offsetWidth;
  
      if ((direction === 'next' && eventLeft >= timelineWidth - this.translate) || (direction === 'prev' && eventLeft <= -this.translate)) {
        this.translate = timelineWidth / 2 - eventLeft;
        this.translateTimeline('false');
      }
    }
  
    private parseDate(): Date[] {
      const dateArrays: Date[] = [];
      for (let i = 0; i < this.date.length; i++) {
        const singleDate = this.date[i].getAttribute('data-date');
        let dateComp: string[];
        let dayComp: string[];
        let timeComp: string[];
  
        if (singleDate) {
          dateComp = singleDate.split('T');
  
          if (dateComp.length > 1) {
            dayComp = dateComp[0].split('/');
            timeComp = dateComp[1].split(':');
          } else if (dateComp[0].indexOf(':') >= 0) {
            dayComp = ["2000", "0", "0"];
            timeComp = dateComp[0].split(':');
          } else {
            dayComp = dateComp[0].split('/');
            timeComp = ["0", "0"];
          }
  
          const newDate = new Date(parseInt(dayComp[2]), parseInt(dayComp[1]) - 1, parseInt(dayComp[0]), parseInt(timeComp[0]), parseInt(timeComp[1]));
          dateArrays.push(newDate);
        }
      }
      return dateArrays;
    }
  
    private calcMinLapse(): number {
      const dateDistances: number[] = [];
      for (let i = 1; i < this.dateValues.length; i++) {
        const distance = this.daydiff(this.dateValues[i - 1], this.dateValues[i]);
        if (distance > 0) dateDistances.push(distance);
      }
  
      return (dateDistances.length > 0) ? Math.min(...dateDistances) : 86400000;
    }
  
    private daydiff(first: Date, second: Date): number {
      const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
      const diffMilliseconds = Math.abs(first.getTime() - second.getTime());
      return Math.round(diffMilliseconds / oneDay);
    }
    
  
    private getIndexInArray(array: HTMLCollectionOf<HTMLElement>, element: HTMLElement): number {
      for (let i = 0; i < array.length; i++) {
        if (array[i] === element) return i;
      }
      return -1;
    }
  }
  
  (window as any).HorizontalTimeline = HorizontalTimeline;

  
  const horizontalTimelineElements = document.getElementsByClassName('js-cd-h-timeline');
  const horizontalTimelineArray: HorizontalTimeline[] = [];
  
  if (horizontalTimelineElements.length > 0) {
    for (let i = 0; i < horizontalTimelineElements.length; i++) {
      horizontalTimelineArray.push(new HorizontalTimeline(horizontalTimelineElements[i] as HorizontalTimelineElement));
    }
  
    document.addEventListener('keydown', (event) => {
      if ((event.keyCode && event.keyCode === 39) || (event.key && event.key.toLowerCase() === 'arrowright')) {
        updateHorizontalTimeline('next');
      } else if ((event.keyCode && event.keyCode === 37) || (event.key && event.key.toLowerCase() === 'arrowleft')) {
        updateHorizontalTimeline('prev');
      }
    });
  }
  
  function updateHorizontalTimeline(direction: string): void {
    for (let i = 0; i < horizontalTimelineArray.length; i++) {
      if (elementInViewport(horizontalTimelineArray[i].element)) horizontalTimelineArray[i].keyNavigateTimeline(direction);
    }
  }
  
  function elementInViewport(el: HTMLElement): boolean {
    let top = el.offsetTop;
    let left = el.offsetLeft;
    let width = el.offsetWidth;
    let height = el.offsetHeight;
  
    while (el.offsetParent) {
      el = el.offsetParent as HTMLElement;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
  }
  