import {
  OnInit, Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild,
  ElementRef
} from "@angular/core";
import {Message} from "../../models/message.model";
import {Author} from "../../models/author.model";
import {PagingLoader, LoadPerformer} from "../../classes/paging-loader";

@Component({
  selector: 'ngm-messages-list',
  styleUrls: ['./messages-list.component.scss'],
  template: require('./messages-list.component.html')
})
export class MessagesListComponent implements OnInit {

  @ViewChild('itemList') itemList: ElementRef;
  @ViewChild('scrollContainer') scrollContainer: ElementRef;

  @Input()
  loadPerformer: LoadPerformer<Message>;

  loader: PagingLoader<Message>;

  @Input()
  author: Author;

  @Output()
  scrolledToTop: EventEmitter<Message> = new EventEmitter<Message>();

  private messages: Message[] = [];

  private lastTopElement: any;

  ngOnInit(): void {

    let me = this;
    if (this.loadPerformer){
      this.loader = new PagingLoader<Message>(this.loadPerformer);
      this.loader.onChange.subscribe((result)=>{
        this.messages = this.analyseItems(result).concat(this.messages);

        if (me.lastTopElement){
          this.scrollContainer.nativeElement.scrollTop = me.lastTopElement.getBoundingClientRect().top;
        }else {
          setTimeout(()=>{
            me.scrollContainer.nativeElement.scrollTop = me.scrollContainer.nativeElement.scrollHeight;
          });
        }


      });
      this.loader.loadMore(true);
    }

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
      return item;

    }).reverse()

  }


  shouldShowArrow(message, pre, next){


    if (!next || next.author.id !== message.author.id){
      return true;
    }

    return false;
  }

  onScrolledToMessage(message, index, element){

    this.lastTopElement = this.itemList.nativeElement.firstElementChild;
    this.scrolledToTop.emit(message);
    this.loader.loadMore();

  }


}
