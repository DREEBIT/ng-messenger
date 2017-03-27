import {AfterViewInit, Directive, Input, ElementRef} from "@angular/core";

@Directive({
  selector: '[ngm-holder]'
})
export class HolderDirective implements AfterViewInit {

  @Input()
  config: {
    theme?: string,
    width?: Number,
    height?: Number,
    bg?: string,
    fg?: string,
    text?: string,
    size?: string,
    font?: string,
    align?: string,
    outline?: string,
    lineWrap?: string
  } = {

  };

  constructor(private _elementRef: ElementRef) { }

  ngAfterViewInit(): void {

    if (!this.config) this.config = {};
    if (!this.config.text) {
      this.config.text = "";
      this.config.font = "FontAwesome";
    }
    //if (!this.config.theme) this.config.theme = "sky";
    if (!this.config.width) this.config.width = 50;
    if (!this.config.height) this.config.height = 50;

    if (window['Holder']){
      let Holder = window['Holder'];
      let image = this._elementRef.nativeElement;
      image['src']="holder.js/"+this.config.width+"x"+this.config.height+"?"+this.getConfigAsString();
      Holder.run({
        images: image
      });
    }

  }

  getConfigAsString() {

    let blacklist = ["width","height"];
    let result = "";

    for (let key of Object.keys(this.config)){
      if (blacklist.indexOf(key)<0 && this.config[key]){
        if (result.length === 0){
          result = "?";
        }else {
          result += "&";
        }
        result += key + "=" + this.config[key];

      }
    }

    return result;
  }

}
