import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { BIO_ACTION_GET_ALL } from './shared/state/acc.action';

@Component({
  selector: 'app-page-acceuil',
  templateUrl: './page-acceuil.component.html',
  styleUrls: ['./page-acceuil.component.css']
})
export class PageAcceuilComponent implements OnInit {

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(BIO_ACTION_GET_ALL());
  }

}
