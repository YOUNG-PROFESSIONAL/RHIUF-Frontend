import { CategorieBio } from './shared/models/Bio.model';
import { STATUS } from '../../shared/state/app.state';
import { BIO_ACTION_GET_ALL } from './shared/states/bio.action';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { BioState } from './shared/states/bio.state';
import { selectAllBio$ } from './shared/states/bio.selector';
import { Observable } from 'rxjs';
import { AppState} from 'src/app/shared/state/app.state';

@Component({
  selector: 'app-biographies',
  templateUrl: './biographies.component.html',
  styleUrls: ['./biographies.component.css']
})
export class BiographiesComponent implements OnInit {
  public title = "Biographies";
    constructor () {}

  ngOnInit(): void {

  }
}
