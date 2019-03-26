import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private eventCode: any = {
    1: 'onclick',
  }
  constructor(
    private router: Router,
  ) { }

  /**
   * url跳转
   * @param u 跳转地址
   */
  jumpUrl(u: string):void {
    this.router.navigateByUrl(u);
  }

  /**
   * 生产dom元素
   * @param ele   元素名称
   * @param attr  属性列表
   * @param event 监听事件列表
   * @param text  元素内html
   */
  productDom(ele: string, attr: [{name: string, val: string}], event: [{code: string, def: any}], text: string = '' ):any {
    const dom = document.createElement(ele);
    attr.forEach( (item) => {
      dom.setAttribute(item.name, item.val)
    } )
    event.forEach( (item) => {
      dom[this.eventCode[item.code]] =  function(d) {
        item.def(this)
      };
    } )
    if ( text !== '' ) dom.innerHTML = text
    return dom;
  }

}
