import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryTaskComponent } from './salary-task.component';

describe('SalaryTaskComponent', () => {
  let component: SalaryTaskComponent;
  let fixture: ComponentFixture<SalaryTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
