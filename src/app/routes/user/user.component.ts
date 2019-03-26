
import { Component, OnInit, ViewChild } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { AgGridNg2 } from 'ag-grid-angular';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;
  url = `https://api.randomuser.me/?results=20`;
  
  scroll = { y: '230px' };

  columnDefs = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price', sortable: true, filter: true },
    { headerName: '操作', field: 'price', cellRenderer: function(param) {
      const ele = 'a'
      const that = this
      const text = '修改';
      const attr = []
      const event = [   /** 当前函数作用域是{},不是dom,因为是在在父级onclick执行的此函数,this不是dom元素而是自身{}, 所以在作用域传入dom=this */ 
        { code: 1, def: function(dom) {console.log('dom this is', dom, 'func is ', that.common.jumpUrl)}  }
      ];
      const a = this.common.productDom(ele, attr, event, text);
      return a;
    }.bind(this) }
  ];

  rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000, checkboxSelection: true },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  constructor(
    public http: _HttpClient, 
    private message: NzMessageService,
    private common: CommonService,
  ) {}

  ngOnInit() {
    // this.http
    //   .get(this.url)
    //   .subscribe((res: any[string]) => {
    //     this.events = res.results
    //   });
  }

  jumpUrl(a: string) {
    console.log(a)
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

  fullChange(val: boolean) {
    this.scroll = val ? { y: '350px' } : { y: '230px' };
  }
}
