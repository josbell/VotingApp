import { Component, OnInit } from '@angular/core';
import { BackEndCallsService } from '../services/back-end-calls.service';

@Component({
  selector: 'app-voting-dashboard',
  templateUrl: './voting-dashboard.component.html',
  styleUrls: ['./voting-dashboard.component.css']
})
export class VotingDashboardComponent implements OnInit {
  constructor(private _backendService : BackEndCallsService) { }

  ngOnInit() {
  }

}
