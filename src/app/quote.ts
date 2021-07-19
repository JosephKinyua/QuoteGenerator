export class Quote {
  showDescription: boolean;
  constructor(public id: number,public title: string,public quote: string,public author: string,public submitted : string,public dateUpload: Date,public upVote:number,public downVote:number){
    this.showDescription=false;
}
}
