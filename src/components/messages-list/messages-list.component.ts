import {
  OnInit, Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild,
  ElementRef
} from "@angular/core";
import {Message} from "../../models/message.model";
import {Author} from "../../models/author.model";
import {PagingLoader, LoadPerformer} from "../../classes/paging-loader";
import {DomUtils} from "../../classes/dom.utils";
import {VirtualScrollComponent} from "angular2-virtual-scroll";

@Component({
  selector: 'ngm-messages-list',
  styleUrls: ['./messages-list.component.scss'],
  templateUrl : './messages-list.component.html'
})
export class MessagesListComponent implements OnInit {

  @ViewChild('scrollContainer')
  scrollContainer: VirtualScrollComponent;

  @Input()
  loadPerformer: LoadPerformer<Message>;

  loader: PagingLoader<Message>;

  @Input()
  author: Author;

  @Input()
  hideAuthorName: boolean = false;

  @Output()
  scrolledToTop: EventEmitter<Message> = new EventEmitter<Message>();

  private messages: Message[] = [];

  private lastTopElement: any;

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
            let index = this.loader.limit+1;
            this.scrollTo(index);
          }

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

    requestAnimationFrame(()=>{
      let element = this.scrollContainer['element']['nativeElement'];
      let d = this.scrollContainer['calculateDimensions']();
      let height = Math.floor(index / d.itemsPerRow) *
        d.childHeight - Math.max(0, (d.itemsPerCol - 1)) * d.childHeight;
      if (top){
        let positionInfo = element.getBoundingClientRect();
        height += (positionInfo.height);
      }
      element.scrollTop = height;
    });

  }

  scrollDown() {

    requestAnimationFrame(()=>{
      let element = this.scrollContainer['element']['nativeElement'];
      if (this.messages.length > 0){
        this.scrollContainer.refresh();
        //@Todo: Einen besseren weg finden für async scroll
        setTimeout(()=>{
          DomUtils.scrollDown(element);
          setTimeout(()=>{
            DomUtils.scrollDown(element);
          },100)
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

  addMessage(message: Message){

    let array = this.messages.concat([message]);
    this.messages = this.analyseItems(array);

    this.scrollContainer.scrollInto(message);
    requestAnimationFrame(()=>{
      this.scrollDown();
    })

  }

}
