import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private httpclient:HttpClient) { }
  
  
  getdata(page: number,year = '',launch ='',landing: ''){
    return this.httpclient.get('https://api.spacexdata.com/v3/launches', 
    {params: {launch_year: year,limit:(10*page).toString(),launch_success: launch, land_success: landing}});
  }
}
