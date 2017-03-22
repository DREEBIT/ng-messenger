import {AfterViewInit, Directive, ElementRef, Input} from "@angular/core";

@Directive({
  selector: '[ngm-scroll-down]'
})
export class ScrollDownDirective implements AfterViewInit {

  @Input()
  scrollDownClass: string;

  constructor(private _elementRef: ElementRef) { }

  ngAfterViewInit(): void {

    let element;
    if (this.scrollDownClass){
      element = this.getChildElement(this.scrollDownClass);
    }

    if (!element){
      element = this._elementRef.nativeElement;
    }

    setTimeout(()=>{
      element.scrollTop = element.scrollHeight;
    },0);

  }

  getChildElement(classname){
    let doc =  this._elementRef.nativeElement;
    let el = null;
    for (let i = 0; i < doc.childNodes.length; i++) {
      if (doc.childNodes[i].className == classname) {
        el = doc.childNodes[i];
        break;
      }
    }
    return el;
  }

}
