import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSizesComponent } from './font-sizes.component';

describe('FontSizesComponent', () => {
  let component: FontSizesComponent;
  let fixture: ComponentFixture<FontSizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontSizesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
