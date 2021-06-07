import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { GetApiService } from '../get-api.service';
import { LoaderService } from '../loader.service';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-space-x-item',
  templateUrl: './space-x-item.component.html',
  styleUrls: ['./space-x-item.component.css'],
})
export class SpaceXItemComponent implements OnInit, OnChanges {
  spacexdata = [];
  page = 1;
  @Input() launchYear: string; 
  @Input() successfulLaunch: string;
  @Input() successfulLanding : string
  constructor(private getService: GetApiService, 
    private readonly loaderService: LoaderService,
    private scrollService: ScrollService) {}

  ngOnInit(): void {
    // this.callApi();
    this.scrollService.onScrolledDown$
     .subscribe(() => {
       this.page = this.page +1;
       this.callApi()
      });
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if((changes.launchYear) || (changes.successfulLaunch ) ||(changes.successfulLanding)) {
      this.callApi();
    }
  }
  callApi() {
    this.loaderService.showLoader();
    this.getService.getdata(this.page,this.launchYear,this.successfulLaunch, this.successfulLanding).subscribe((res: any) => {
      this.spacexdata = res;
      this.loaderService.hideLoader();
      console.log(this.spacexdata);
    });
  }
}
