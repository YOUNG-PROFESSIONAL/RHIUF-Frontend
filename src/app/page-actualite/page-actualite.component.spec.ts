import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageActualiteComponent } from './page-actualite.component';

describe('PageActualiteComponent', () => {
  let component: PageActualiteComponent;
  let fixture: ComponentFixture<PageActualiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageActualiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
