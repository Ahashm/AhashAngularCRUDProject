import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  informationList = ['New', 'Second Hand', 'Refurbished'];

  constructor() {}

  ngOnInit(): void {}
}
