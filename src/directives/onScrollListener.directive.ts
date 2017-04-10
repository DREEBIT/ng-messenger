import {AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output} from "@angular/core";

@Directive({
  selector: '[ngm-on-scroll-listener]'
})
export class OnScrollListenerDirective implements AfterViewInit {

  @Output()
  onScrollTop: EventEmitter<any> = new EventEmitter();

  constructor(private _elementRef: ElementRef) { }

  ngAfterViewInit(): void {

    let me = this;
    this._elementRef.nativeElement.addEventListener("scroll", ()=>{
      if (this._elementRef.nativeElement.scrollTop === 0){
        me.onScrollTop.emit();
      }

    });

  }


}
