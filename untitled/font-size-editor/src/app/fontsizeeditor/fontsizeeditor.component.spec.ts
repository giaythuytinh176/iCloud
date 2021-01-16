import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontsizeeditorComponent } from './fontsizeeditor.component';

describe('FontsizeeditorComponent', () => {
  let component: FontsizeeditorComponent;
  let fixture: ComponentFixture<FontsizeeditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontsizeeditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontsizeeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
