export class DomUtils {

  static findChildBySelector(element, selector){
    let res = [].filter.call(document.querySelectorAll(selector), function(el){
      return el.parentNode == element;
    });

    if (res && res.length > 0){
      return res[0];
    }
    return null;
  }

  static findParentBySelector(element, selector) {
    let all = document.querySelectorAll(selector);
    let cur = element.parentNode;
    while(cur && !DomUtils.collectionHas(all, cur)) { //keep going up until you find a match
      cur = cur.parentNode; //go up
    }
    return cur; //will return null if not found
  }

  static collectionHas(a, b) {
    for(let i = 0, len = a.length; i < len; i ++) {
      if(a[i] == b) return true;
    }
    return false;
  }

  static scrollDown(element){

    console.log('Current Top:',element.scrollTop);
    console.log('Scroll Height:',element.scrollHeight);
    element.scrollTop = element.scrollHeight;

  }



}
