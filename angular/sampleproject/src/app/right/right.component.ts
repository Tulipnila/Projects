import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  constructor() { }
  
  ngOnInit(): void {
  }
  
books1=null;
  books = [
    {
      'bookId': 101,
      'bookName': 'Ean? Etharku? Eppadi?',
      'author': 'Sujatha',
      'bookStatus': 'Available',
      'category': 'education'
    },
    {
      'bookId': 102,
      'bookName': 'Ponniyin Selvan',
      'author': 'Kalki',
      'bookStatus': 'Available',
      'category': 'education'
    },
    {
      'bookId': 103,
      'bookName': 'Kaveri Mainthan',
      'author': 'Kalki',
      'bookStatus': 'Available',
      'category': 'education'
    },
    {
      'bookId': 104,
      'bookName': 'Thirukkural',
      'author': 'Sujatha',
      'bookStatus': 'Not Available',
      'category': 'education'
    },
    {
      'bookId': 105,
      'bookName': 'En Iniya Thozhiye',
      'author': 'Sujatha',
      'bookStatus': 'Available',
      'category': 'education'
    },
    {
      'bookId': 106,
      'bookName': 'Iyarkai',
      'author': 'Sujatha',
      'bookStatus': 'Not Available',
      'category': 'education'
    },
    {
      'bookId': 107,
      'bookName': 'Kanni Maadam',
      'author': 'Sujatha',
      'bookStatus': 'Not Printing',
      'category': 'education'
    },
    {
      'bookId': 108,
      'bookName': 'Agni Siragukal',
      'author': 'A.P.J. Abdul Kalam',
      'bookStatus': 'Not Available',
      'category': 'education'
    }
  ]
}
