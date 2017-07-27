import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {asObservable} from './util/asObservable';
@Injectable()
export class BackEndCallsService {

  private _fruitList:BehaviorSubject<any[]> = new BehaviorSubject([]);
  private _user:BehaviorSubject<any> = new BehaviorSubject({});
  public loggedIn:Boolean = false;
  public _errors:BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private _http: Http) { }
  
  get fruitList(){
  	return asObservable(this._fruitList);
  }

  get user(){
  	return asObservable(this._user);
  }

  get errors(){
  	return asObservable(this._errors);
  }
  
  getFruit(){
  	return this._http.get('/fruit')
  		.map(data=>{
  			return data.json()
  		}).subscribe(data=>{
  			this._fruitList.next(data);
  		});
  }

  voteFor(fruit){
  	return this._http.put('/fruit',fruit)
  		.map(response=>{
  			return response.json()
  		})
  }

  login(username){
  	return this._http.post('/user',{'username':username})
  		.map(response=>{
  			return response.json()
  		}).subscribe(
  		(response)=>{
  			if(response.success){
  				this.loggedIn = true;
  				this._errors.next([]);
  				this._user.next(response.data);
  			}else{
  				this._errors.next(response.data);
  			}
  		});
  }

  logout(){
  	this._user.next({});
  	this.loggedIn = false;
  }

  create(fruit){
  	return this._http.post('/fruit',{'name':fruit})
  		.map(data=>{
  			return data.json()
  		})		
  }

}
