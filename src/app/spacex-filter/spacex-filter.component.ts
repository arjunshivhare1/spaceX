import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-spacex-filter',
  templateUrl: './spacex-filter.component.html',
  styleUrls: ['./spacex-filter.component.css']
})
export class SpacexFilterComponent implements OnInit {
  @Input() launchYear: string; 
  @Input() successfulLaunch: string;
  @Input() successfulLanding : string;
  years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  constructor(private getService: GetApiService) { }
@Output() fetchDataByYear = new EventEmitter();
@Output() fetchDataByLaunch = new EventEmitter();
@Output() fetchDataByLanding = new EventEmitter();
 reset(): void{
   this.fetchDataByYear.emit("")
   this.fetchDataByLanding.emit("")
   this.fetchDataByLaunch.emit("")
 }
  ngOnInit(): void {
  }

}
