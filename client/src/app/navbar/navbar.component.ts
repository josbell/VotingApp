import { Component, OnInit } from '@angular/core';
import { BackEndCallsService } from '../services/back-end-calls.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private _backendService : BackEndCallsService) { }

  ngOnInit() {
  }

}
