import {AfterViewInit, Directive, ElementRef} from "@angular/core";

@Directive({
  selector: '[ngm-tooltip]'
})
export class TooltipDirective implements AfterViewInit {

  constructor(private _elementRef: ElementRef) { }

  ngAfterViewInit(): void {

    let jQuery = window['jQuery'];
    if (jQuery && jQuery(this._elementRef.nativeElement).tooltip){
      jQuery(this._elementRef.nativeElement).tooltip()
    }

  }

}
