import { AppState } from 'src/app/shared/state/app.state';
import { Bio } from './../../shared/models/Bio.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BIO_ACTION_UPDATE } from '../../shared/states/bio.action';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-bio-form',
  templateUrl: './bio-form.component.html',
  styleUrls: ['./bio-form.component.css']
})
export class BioFormComponent implements OnInit {

  // @Input() childForm: FormGroup = {} as FormGroup;
  @Input() data: Bio = <Bio>{};
  childForm!: FormGroup;
  input = false;
  content = true;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router:Router
  ) { }
  ngOnInit(): void {
    this.childForm = this.fb.group({
      bioId: [this.data.bioId],
      bioTitle: [this.data.bioTitle,Validators.required],
      bioDesc: [this.data.bioDesc, Validators.required],
      bioCat: [this.data.bioCat],
      bioEnabled: [this.data.bioEnabled]
    });
  }
  public editer(){
    this.input = !this.input;
    this.content = !this.content;
  }
  public annuler(){
    this.input = !this.input;
    this.content = !this.content;
  }
  public submit(){
    if(this.childForm.valid){
      this.store.dispatch(BIO_ACTION_UPDATE(this.childForm.value),);
    }
  }

}
