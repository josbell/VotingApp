import { Component, OnInit } from '@angular/core';
import { BackEndCallsService } from '../services/back-end-calls.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent implements OnInit {
	fruitList:Observable<any[]>;
  constructor(private _backendService : BackEndCallsService) { }

  ngOnInit() {
  	this._backendService.getFruit();
  }

  voteFor(fruit){
  	fruit.totalVotes+=1;
  	this._backendService.voteFor(fruit)
  		.subscribe(res=>{
  			this._backendService.getFruit();
  		})
  }


}
