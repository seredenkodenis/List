import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css'],
})
export class TestcomponentComponent implements OnInit {

  names = JSON.parse(localStorage.getItem('message'));

  showt:boolean = false;

  inputText:string = "Type your own note";
  
  constructor() {
  }


  addTo(){
    if(this.inputText == ""){
      alert('Please, insert new string!');
    }else {
      this.names.push(this.inputText);
      localStorage.setItem('message', JSON.stringify(this.names));
      this.inputText = "";
    }
  }
  delete(i){
      this.names.pop(i);

      localStorage.setItem('message',JSON.stringify(this.names));
  }
  show(){
    this.showt = ! this.showt;
  }

  deleteAll(){
    this.names.length = 0;

    localStorage.setItem('message', JSON.stringify(this.names));
  }

  ngOnInit() {
  }

}
