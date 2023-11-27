import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCheckInComponent } from './edit-check-in.component';

describe('EditCheckInComponent', () => {
  let component: EditCheckInComponent;
  let fixture: ComponentFixture<EditCheckInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCheckInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
