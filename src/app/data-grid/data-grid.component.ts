import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
  pageNumber=0;
  pageSize=10;
 
  @Input() headers:[] | undefined;
  @Input() data:[] | undefined;
  @Input() fields:[] | undefined;
  @Output() delete=new EventEmitter<object>();
  
  constructor() { }

  ngOnInit(): void {
   
  }
  // just for learning and test
  deleteClick(item: object | undefined){
    this.delete.emit(item);
  }
 
}