import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerNewLikeComponent } from './hacker-new-like.component';

describe('HackerNewLikeComponent', () => {
  let component: HackerNewLikeComponent;
  let fixture: ComponentFixture<HackerNewLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackerNewLikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerNewLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
