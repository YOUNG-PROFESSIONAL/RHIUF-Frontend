import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioListComponent } from './bio-list.component';

describe('BioListComponent', () => {
  let component: BioListComponent;
  let fixture: ComponentFixture<BioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
