import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    console.log($);
    $('.js-example-basic-single').select2(
      { theme: "bootstrap" }
    );
  }

}
