import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnChanges, OnInit {
 @Input() text= "";

  ngOnChanges(changes: SimpleChanges): void {
   // if(!changes['text'].isFirstChange()){
      //console.log("you change the original value")
    console.log('ngOnchanges called')//,changes['text'].currentValue)

   // }
  }
  ngOnInit(): void{
    console.log('ngOnInit Called')
  }
  
}
