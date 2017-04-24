import {AfterViewInit, Directive, ElementRef} from "@angular/core";

@Directive({
  selector: '[ngm-autosize-textarea]'
})
export class AutosizeTextareaDirective implements AfterViewInit {

  initHeight = 0;

  constructor(private _elementRef: ElementRef) { }

  ngAfterViewInit(): void {

    let el = this._elementRef.nativeElement;

    let autosize = window['autosize'];
    let jQuery = window['autosize'];
    if (autosize){
      autosize(el);
    }
    this.initHeight = el.style.height;

  }


  reset(){
    let el = this._elementRef.nativeElement;
    el.style.height = this.initHeight;

  }


}
