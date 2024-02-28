// SwipeContent.ts

interface SwipeEventDetail {
    x: number;
    y: number;
  }
  
  class SwipeContent {
    element: HTMLElement;
    delta: [number | false, number | false];
    dragging: boolean;
    intervalId: number | false;
  
    constructor(element: HTMLElement) {
      this.element = element;
      this.delta = [false, false];
      this.dragging = false;
      this.intervalId = false;
      this.initSwipeContent();
    }
  
    private initSwipeContent(): void {
      this.element.addEventListener('mousedown', this.handleEvent.bind(this));
      this.element.addEventListener('touchstart', this.handleEvent.bind(this));
    }
  
    private initDragging(): void {
      this.element.addEventListener('mousemove', this.handleEvent.bind(this));
      this.element.addEventListener('touchmove', this.handleEvent.bind(this));
      this.element.addEventListener('mouseup', this.handleEvent.bind(this));
      this.element.addEventListener('mouseleave', this.handleEvent.bind(this));
      this.element.addEventListener('touchend', this.handleEvent.bind(this));
    }
  
    private cancelDragging(): void {
      if (this.intervalId) {
        (!window.requestAnimationFrame) ? clearInterval(this.intervalId) : window.cancelAnimationFrame(this.intervalId);
        this.intervalId = false;
      }
      this.element.removeEventListener('mousemove', this.handleEvent.bind(this));
      this.element.removeEventListener('touchmove', this.handleEvent.bind(this));
      this.element.removeEventListener('mouseup', this.handleEvent.bind(this));
      this.element.removeEventListener('mouseleave', this.handleEvent.bind(this));
      this.element.removeEventListener('touchend', this.handleEvent.bind(this));
    }
  
    private handleEvent(event: MouseEvent | TouchEvent): void {
      switch (event.type) {
        case 'mousedown':
        case 'touchstart':
          this.startDrag(event);
          break;
        case 'mousemove':
        case 'touchmove':
          this.drag(event);
          break;
        case 'mouseup':
        case 'mouseleave':
        case 'touchend':
          this.endDrag(event);
          break;
      }
    }
  
    private startDrag(event: MouseEvent | TouchEvent): void {
        this.dragging = true;
        this.initDragging();
    
        const clientX = Number(this.unify(event).clientX);
        const clientY = Number(this.unify(event).clientY);
    
        // Check if clientX and clientY are not NaN, then assign them to delta
        this.delta = [!isNaN(clientX) ? clientX : 0, !isNaN(clientY) ? clientY : 0];
    
        this.emitSwipeEvents('dragStart', this.delta as [number, number]);
    }
    
    
    
  
    private endDrag(event: MouseEvent | TouchEvent): void {
        this.cancelDragging();
        const dx = parseInt(String(this.unify(event).clientX));
        const dy = parseInt(String(this.unify(event).clientY));
        
    
        if (this.delta && (this.delta[0] || this.delta[0] === 0)) {
            const s = Math.sign(dx - this.delta[0]);
            if (Math.abs(dx - this.delta[0]) > 30) {
                (s < 0) ? this.emitSwipeEvents('swipeLeft', [dx, dy]) : this.emitSwipeEvents('swipeRight', [dx, dy]);
            }
            this.delta[0] = false;
        }
    
        if (this.delta && (this.delta[1] || this.delta[1] === 0)) {
            const y = Math.sign(dy - this.delta[1]);
            if (Math.abs(dy - this.delta[1]) > 30) {
                (y < 0) ? this.emitSwipeEvents('swipeUp', [dx, dy]) : this.emitSwipeEvents('swipeDown', [dx, dy]);
            }
            this.delta[1] = false;
        }
        this.emitSwipeEvents('dragEnd', [dx, dy]); // Pass numbers directly
        this.dragging = false;
    }
    
  
    private drag(event: MouseEvent | TouchEvent): void {
      if (!this.dragging) return;
      (!window.requestAnimationFrame) ?
        this.intervalId = setTimeout(() => this.emitDrag(event), 250) :
        this.intervalId = window.requestAnimationFrame(() => this.emitDrag(event));
    }
  
    private emitDrag(event: MouseEvent | TouchEvent): void {
      this.emitSwipeEvents('dragging', [(this.unify(event).clientX), (this.unify(event).clientY)]);
    }
  
    private unify(event: MouseEvent | TouchEvent): Touch | MouseEvent {
        if ('changedTouches' in event) {
            return event.changedTouches[0];
        } else {
            return event;
        }
    }
    
    private emitSwipeEvents(eventName: string, detail: [number, number]): void {
        const event = new CustomEvent<SwipeEventDetail>(eventName, { detail: { x: detail[0], y: detail[1] } });
        this.element.dispatchEvent(event);
    }
  }
  
  // Export SwipeContent class
  export default SwipeContent;
  
  // Initialize the SwipeContent objects
  const swipeElements = document.getElementsByClassName('js-swipe-content');
  if (swipeElements.length > 0) {
    for (let i = 0; i < swipeElements.length; i++) {
      new SwipeContent(swipeElements[i] as HTMLElement);
    }
  }
  