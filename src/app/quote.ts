export class Quote {
  showDescription: boolean;
  constructor(public id: number,public title: string,public quote: string,public author: string,public submitted : string,public dateUpload: Date,){
    this.showDescription=false;
}
}
