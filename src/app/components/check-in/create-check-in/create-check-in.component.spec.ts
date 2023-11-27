import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCheckInComponent } from './create-check-in.component';

describe('CreateCheckInComponent', () => {
  let component: CreateCheckInComponent;
  let fixture: ComponentFixture<CreateCheckInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCheckInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
