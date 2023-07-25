import { Component } from '@angular/core';

@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.css']
})
export class OnewayComponent {
 //oneway binding
  firstName = "Sachin";
 lastName = "Tendulkar";

 //property binding
 title = "Learning Angular";

 //two way binding
 name="Tulip"

 //string interpolation(function)
 head = "Hello Tulip!"

 getTitle(){
  return this.head
 }

 getMax(first:number, second:number){
  return Math.max(first,second);
 }
 //string interpolation in element property
 color="purple";

 //button property
 isDisabled = true

 //Event binding
 clickCount = 0;
 clickMe(){
  this.clickCount++
 }
 isEnabled=true;
 enableBig = true;
 enableItalic =true;

 status ='error';
//PIPE 

toDate = new Date();
message = "Welcome to Angular";
price = 1200;
} 
