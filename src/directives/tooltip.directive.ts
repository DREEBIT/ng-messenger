import {AfterViewInit, Directive, ElementRef, Input} from "@angular/core";

@Directive({
  selector: '[ngm-tooltip]'
})
export class TooltipDirective implements AfterViewInit {

  @Input()
  enableTooltip: boolean = true;

  constructor(private _elementRef: ElementRef) { }

  ngAfterViewInit(): void {

    let jQuery = window['jQuery'];
    if (this.enableTooltip && jQuery && jQuery(this._elementRef.nativeElement).tooltip){
      jQuery(this._elementRef.nativeElement).tooltip()
    }

  }

}
