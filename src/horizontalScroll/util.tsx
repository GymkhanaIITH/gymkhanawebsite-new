 {};
 export class Util {
    static hasClass(el: Element, className: string): boolean {
        if (el.classList) return el.classList.contains(className);
        else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }

    static addClass(el: Element, className: string): void {
        const classList = className.split(' ');
        if (el.classList) el.classList.add(classList[0]);
        else if (!Util.hasClass(el, classList[0])) el.className += " " + classList[0];
        if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
    }

    static removeClass(el: Element, className: string): void {
        const classList = className.split(' ');
        if (el.classList) el.classList.remove(classList[0]);
        else if (Util.hasClass(el, classList[0])) {
            const reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
        if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(' '));
    }

    static toggleClass(el: Element, className: string, bool: boolean): void {
        if (bool) Util.addClass(el, className);
        else Util.removeClass(el, className);
    }

    static setAttributes(el: Element, attrs: { [key: string]: string }): void {
        for (const key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    }

    static getChildrenByClassName(el: Element, className: string): HTMLElement[] {
        const children = el.children;
        const childrenByClass: HTMLElement[] = [];
        for (let i = 0; i < el.children.length; i++) {
            if (Util.hasClass(el.children[i], className)) childrenByClass.push(el.children[i] as HTMLElement);
        }
        return childrenByClass;
    }

    static setHeight(start: number, to: number, element: HTMLElement, duration: number, cb: () => void): void {
        const change = to - start;
        let currentTime: number | null = null;

        const animateHeight = (timestamp: number): void => {
            if (!currentTime) currentTime = timestamp;
            const progress = timestamp - currentTime;
            const val = Math.floor((progress / duration) * change + start);
            element.setAttribute("style", "height:" + val.toString() + "px;");
            if (progress < duration) {
                window.requestAnimationFrame(animateHeight);
            } else {
                cb();
            }
        };

        element.setAttribute("style", "height:" + start + "px;");
        window.requestAnimationFrame(animateHeight);
    }

    static scrollTo(final: number, duration: number, cb?: () => void): void {
        const start = window.scrollY || document.documentElement.scrollTop;
        let currentTime: number | null = null;

        const animateScroll = (timestamp: number): void => {
            if (!currentTime) currentTime = timestamp;
            let progress = timestamp - currentTime;
            if (progress > duration) progress = duration;
            const val = Util.easeInOutQuad(progress, start, final - start, duration); // Change this line
            window.scrollTo(0, val);
            if (progress < duration) {
                window.requestAnimationFrame(animateScroll);
            } else {
                cb && cb();
            }
        };
        

        window.requestAnimationFrame(animateScroll);
    }

    static moveFocus(element?: HTMLElement): void {
        if (!element) element = document.getElementsByTagName("body")[0];
        element.focus();
        if (document.activeElement !== element) {
            element.setAttribute('tabindex', '-1');
            element.focus();
        }
    }

    static getIndexInArray<T>(array: T[], el: T): number {
        return Array.prototype.indexOf.call(array, el);
    }

    static cssSupports(property: string, value: string): boolean {
        if ('CSS' in window) {
            return (window as any).CSS.supports(property, value);
        } else {
            const jsProperty = property.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
            return jsProperty in document.body.style;
        }
    }

    static easeInOutQuad(t: number, b: number, c: number, d: number): number {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
}
