import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {Message} from "../../models/message.model";
import {Author} from "../../models/author.model";
import {PagingLoader} from "../../classes/paging-loader";
import {PagingLoadPerformer} from "../../classes/paging-load-performer";
import {DomUtils} from "../../classes/dom.utils";

@Component({
  selector: 'ngm-messages-list',
  styleUrls: ['./messages-list.component.scss'],
  templateUrl : './messages-list.component.html'
})
export class MessagesListComponent implements OnInit {

  @ViewChild('scrollContainer')
  scrollContainer: ViewChild;

  @ViewChild('ghostTextContainer')
  ghostTextContainer: ElementRef;

  @ViewChild('messageListContainer')
  messageListContainer: ElementRef;

  @Input()
  loadPerformer: PagingLoadPerformer<Message>;

  @Input()
  enableTooltips: boolean = true;

  loader: PagingLoader<Message>;

  @Input()
  author: Author;

  @Input()
  hideAuthorName: boolean = false;

  @Output()
  scrolledToTop: EventEmitter<Message> = new EventEmitter<Message>();

  public messages: Message[] = [];

  private lastTopElement: any;

  constructor(private _elementRef : ElementRef) {


  }

  ngOnInit(): void {
    let me = this;
    if (this.loadPerformer){
      this.loader = new PagingLoader<Message>(this.loadPerformer);
      this.loader.onChange.subscribe((result)=>{
        let first = this.loader.wasFirst;
        if (first){
          this.messages = this.analyseItems(result.reverse());
        }else {
          this.messages = this.analyseItems(result.reverse().concat(this.messages));
        }

        if (first){
          if (this.messages.length > 0){
            this.scrollDown();
          }
        }else {
          if (result.length > 0){
            //let index = this.loader.limit+1;
            this.scrollTo(5);
          }

        }
      });
      this.loader.loadMore(true);
    }
  }


  getSize(item, index) {
    let min = 50;


    let ghostContainer = this['element'].nativeElement.parentElement.children[1].children[0];
    ghostContainer.innerHTML = item.text;

    var positionInfo = ghostContainer.getBoundingClientRect();

    return positionInfo.height > min ? positionInfo.height : min;
  }





  analyseItems(items:Message[]):Message[]{

    return items.map((item, index, array)=>{

      let message = item;
      let pre = null;
      let next = null;

      if (index > 0){
        pre = array[index-1];
      }

      if (index+1 < array.length){
        next = array[index+1];
      }

      item.hideAvatar = !this.shouldShowArrow(message, pre, next);
      item.hideName = true;

      if (!this.hideAuthorName && item.author.id !== this.author.id){
        item.hideName = item.hideAvatar;
      }

      return item;

    })

  }


  shouldShowArrow(message, pre, next){


    if (!next || next.author.id !== message.author.id){
      return true;
    }

    return false;
  }

  onScrolledToMessage(message, index, element){

    this.scrolledToTop.emit(message);
    this.loader.loadMore();

  }

  scrollTo(index, top = true) {


    let items = this.scrollContainer['nativeElement'].childNodes;
    let element:any = items[index];
    element.scrollIntoView();

  }

  scrollDown() {

    requestAnimationFrame(()=>{
      let element = this.scrollContainer['nativeElement'];
      if (this.messages.length > 0){
        setTimeout(()=>{
          DomUtils.scrollDown(element);
        },0)
      }
    });

  }

  onEnd(event){

  }

  reload(){
    this.messages = [];
    this.loader.loadMore(true);
  }

  loadMore(event){

    if (this.messages && event.start==0 && this.messages.length > 1){
      this.loader.loadMore();
    }
  }



  getHeight(){
    return 50;
  }

  addMessage(message: Message){

    let found = this.messages.find((item)=>{
      return item.id === message.id;
    });

    let array;
    if (!found){
      array = this.messages.concat([message]);
    }else {
      let index = this.messages.indexOf(found);

      if (index !== -1) {
        this.messages[index] = message;
      }
      array = this.messages;
    }


    this.messages = this.analyseItems(array);

    requestAnimationFrame(()=>{
      this.scrollDown();
    })

  }

}
