import { Component, OnInit } from '@angular/core';
import { PresentsService, IPresent } from '../services/presents.service';

@Component({
  selector: 'app-add-present',
  templateUrl: './add-present.component.html',
  styleUrls: ['./add-present.component.css']
})
export class AddPresentComponent implements OnInit {

  constructor(private presentService: PresentsService) { }

  ngOnInit() {
  }

  onSubmit(present: IPresent) {
    this.presentService.addPresent(present);
  }
}
