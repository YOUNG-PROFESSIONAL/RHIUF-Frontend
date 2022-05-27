import { CategorieBio } from './models/Bio.model';
import { STATUS } from './../../state/app.state';
import { BIO_ACTION_GET_ALL } from './states/bio.action';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { BioState } from './states/bio.state';
import { selectAllBio$ } from './states/bio.selector';
import { Observable } from 'rxjs';
import { AppState} from 'src/app/state/app.state';

@Component({
  selector: 'app-biographies',
  templateUrl: './biographies.component.html',
  styleUrls: ['./biographies.component.css']
})
export class BiographiesComponent implements OnInit {
  public title = "Biographies";

  biographies$: Observable<BioState> = this.store.select(selectAllBio$);
  readonly status = STATUS;
  readonly cat = CategorieBio;
    constructor (private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(BIO_ACTION_GET_ALL());
  }
}
