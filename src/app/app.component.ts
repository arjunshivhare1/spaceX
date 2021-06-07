import { Component } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  launchYear = '';
  successfulaunch ='';
  successfulLanding ='';
  showLoader = false;
  constructor(private readonly loaderService: LoaderService){
    setTimeout(() => {
    this.loaderService.getLoader().subscribe(res => {
      this.showLoader = res;
    })
  }, 1000);}

  fetchDataByYear(year: number) {
    this.launchYear = year.toString();
    console.log(year);
  }
  fetchDataByLaunch(launch: boolean){
    this.successfulaunch =launch.toString();
    console.log(launch);
  }
  fetchDataByLanding(landing: boolean){
    this.successfulLanding = landing.toString();
    console.log(landing);
  }


}

