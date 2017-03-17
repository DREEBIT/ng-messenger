import {AfterViewInit, Directive, ElementRef} from "@angular/core";

@Directive({
  selector: '[ngm-scroll-down]'
})
export class ScrollDownDirective implements AfterViewInit {

  constructor(private _elementRef: ElementRef) { }

  ngAfterViewInit(): void {

    let container = this._elementRef.nativeElement;
    container.scrollTop = container.scrollHeight;
    setTimeout(()=>{

    },0);

  }

}
