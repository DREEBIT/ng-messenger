export class DomUtils {

  public static findChildBySelector(element, selector): any {
    let res = [].filter.call(document.querySelectorAll(selector), (el) => el.parentNode === element);

    if (res && res.length > 0){
      return res[0];
    }
    return null;
  }

  public static findParentBySelector(element, selector): any {
    let all = document.querySelectorAll(selector);
    let cur = element.parentNode;
    while(cur && !DomUtils.collectionHas(all, cur)) { //keep going up until you find a match
      cur = cur.parentNode; //go up
    }
    return cur; //will return null if not found
  }

  public static collectionHas(a, b): boolean {
    for(let i = 0, len = a.length; i < len; i ++) {
      if(a[i] === b) return true;
    }
    return false;
  }

  public static scrollDown(element): void {
    element.scrollTop = element.scrollHeight;
  }

}
