import { Component, OnInit } from '@angular/core';
import { onSideNavChange, onMainContentChange, animateText} from './sidenavAnimation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations:[onSideNavChange, onMainContentChange, animateText]
})
export class DashboardComponent implements OnInit {
  openedMenu:boolean = true;
  sidenavChange:boolean = true;
  contentChange:boolean = true;
  textChange:boolean= true;

  constructor() { }

  ngOnInit(): void {
  }

  changeSideNav(){
    this.sidenavChange = !this.sidenavChange;
    this.contentChange = this.sidenavChange;

    setTimeout(()=>{
      this.textChange = this.sidenavChange;
    }, 100);

  }

}
