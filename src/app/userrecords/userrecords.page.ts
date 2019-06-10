import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-userrecords',
  templateUrl: './userrecords.page.html',
  styleUrls: ['./userrecords.page.scss'],
})
export class UserrecordsPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  
}
