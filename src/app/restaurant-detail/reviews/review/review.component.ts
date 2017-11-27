import { Component, OnInit, Input } from '@angular/core';

import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'mt-review',
  templateUrl: './review.component.html',
})
export class ReviewComponent implements OnInit {

  @Input() review: Observable<any>
  constructor() { }

  ngOnInit() {
  }

}
