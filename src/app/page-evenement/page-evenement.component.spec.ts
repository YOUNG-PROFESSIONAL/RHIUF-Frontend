import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEvenementComponent } from './page-evenement.component';

describe('PageEvenementComponent', () => {
  let component: PageEvenementComponent;
  let fixture: ComponentFixture<PageEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEvenementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
