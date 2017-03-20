import {AfterViewInit, Directive, ElementRef, Output, EventEmitter, Input} from "@angular/core";
let scrollMonitor = require("scrollMonitor");

@Directive({
  selector: '[ngm-scrolled-top]'
})
export class ScrolledTopDirective implements AfterViewInit {

  @Output()
  onScrolledTop: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _elementRef: ElementRef) { }

  ngAfterViewInit(): void {

    let element = this._elementRef.nativeElement;
    element.addEventListener("scroll", ()=>{
      if (element.scrollTop === 0){
        this.onScrolledTop.emit();
      }
    });

  }

}
