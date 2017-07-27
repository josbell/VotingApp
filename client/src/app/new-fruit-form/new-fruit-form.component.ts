import { Component, OnInit } from '@angular/core';
import { BackEndCallsService } from '../services/back-end-calls.service';

@Component({
  selector: 'app-new-fruit-form',
  templateUrl: './new-fruit-form.component.html',
  styleUrls: ['./new-fruit-form.component.css']
})
export class NewFruitFormComponent implements OnInit {
  newFruit:any;

  constructor(private _backendService : BackEndCallsService) { }

  ngOnInit() {
  }

  onNewFruitSubmit(){
  	this._backendService.create(this.newFruit)
  		.subscribe((res)=>{
  			this.newFruit = '';
  			this._backendService.getFruit();
  		})
  }

}
