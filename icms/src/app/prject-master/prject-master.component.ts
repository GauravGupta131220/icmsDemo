import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prject-master',
  templateUrl: './prject-master.component.html',
  styleUrls: ['./prject-master.component.css']
})
export class PrjectMasterComponent implements OnInit {

  @Output() masterDetail = new EventEmitter();

  public details={};
  public masterDetails= [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showDetails(){   
    this.masterDetails.push(this.details);    
    this.router.navigateByUrl('/masterDetails');
    this.masterDetail.emit(this.masterDetails);
  }

}
