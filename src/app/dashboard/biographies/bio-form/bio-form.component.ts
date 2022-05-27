import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormGroupName } from '@angular/forms';
import { Bio } from '../models/Bio.model';
import { map, Observable } from 'rxjs';
import { selectAllBio$ } from '../states/bio.selector';
import { BioState } from '../states/bio.state';

@Component({
  selector: 'app-bio-form',
  templateUrl: './bio-form.component.html',
  styleUrls: ['./bio-form.component.css']
})
export class BioFormComponent implements OnInit {
  bioForm!: FormGroup;
  data$: Observable<BioState>  = this.store.select(selectAllBio$);
  isDisabled: boolean = true;
    constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.bioForm = this.fb.group({
      bioData: this.fb.array([])
    });
    this.data$.subscribe(
      datas => {
        datas.dataBioState?.apiData.datas?.forEach(bio => {
          this.addBio(bio);
        })
      });
  }
/**********ON LOAD*************/
  get bioData(): FormArray {
    return this.bioForm.get("bioData") as FormArray;
  }

  getBio(bio: Bio) : FormGroup{
    return this.fb.group({
      bioId: [bio.bioId],
      bioTitle: {value:bio.bioTitle, disabled:this.isDisabled},
      bioCat: [bio.bioCat],
      bioDesc: [bio.bioDesc],
      bioEnabled: [bio.bioEnabled]
    })
  }

  addBio(bio: Bio){
    this.bioData.push(this.getBio(bio))
  }

/********************** On edit ***********************/
editBio(i: number): FormArray{
  document.getElementById("bio-title-" + i);
  const desc = document.getElementById("bio-desc-" + i);
  const data = this.bioData.at(i) as FormArray;
  console.log(data);
  return data;
}

/********************** On save ***************************/
  onSubmit() {
    console.log(this.bioForm.value);
  }

}
