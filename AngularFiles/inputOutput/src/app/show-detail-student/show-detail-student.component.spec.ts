import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailStudentComponent } from './show-detail-student.component';

describe('ShowDetailStudentComponent', () => {
  let component: ShowDetailStudentComponent;
  let fixture: ComponentFixture<ShowDetailStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDetailStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
