import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
  new Quote(1,'inspirational','You have gotta dance like there is nobody watching,Love like you will never be hurt,Sing like there is nobody listening,And live like it is heaven on earth.','William W. Purkey','john doe',new Date(2020,3,14)),
  new Quote(1,'life','Life is what happens when you are busy making other plans.','John Lennon','Mary',new Date(2020,3,14)),
  new Quote(1,'love','A man is already halfway in love with any woman who listens to him.','Brendan Francis','chris doe',new Date(2020,3,14))
  ];

  toggleDetails(index:any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete:boolean, index:number){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  deleteQuote(isComplete:boolean, index:number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].title}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
