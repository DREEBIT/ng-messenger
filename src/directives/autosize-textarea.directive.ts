import {AfterViewInit, Directive, Input, ElementRef} from "@angular/core";

@Directive({
  selector: '[ngm-autosize-textarea]'
})
export class AutosizeTextareaDirective implements AfterViewInit {


  constructor(private _elementRef: ElementRef) { }

  ngAfterViewInit(): void {

    let el = this._elementRef.nativeElement;
    let autosize = window['autosize'];
    if (autosize){
      autosize(el);
    }

  }



}
