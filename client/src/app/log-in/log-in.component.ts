import { Component, OnInit, EventEmitter } from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';
import { BackEndCallsService } from '../services/back-end-calls.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
	username;
	modalActions = new EventEmitter<string|MaterializeAction>();
  constructor(private _backendService : BackEndCallsService) { }

  ngOnInit() {
  }

  openErrorModal(){
    this.modalActions.emit({action:"modal",params:['open']});
  }

  logIn(){
  	this._backendService.login(this.username);
  	this.username = "";
  }

}
