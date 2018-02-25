import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-details',
  templateUrl: './master-details.component.html',
  styleUrls: ['./master-details.component.css']
})
export class MasterDetailsComponent implements OnInit {

  @Input() projectInformation;

  constructor(private router: Router) { }

  ngOnInit() {
    }

  enterDetails(){
    this.router.navigateByUrl('/projectMaster');
  }

}
