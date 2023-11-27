import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCheckInComponent } from './list-check-in.component';

describe('ListCheckInComponent', () => {
  let component: ListCheckInComponent;
  let fixture: ComponentFixture<ListCheckInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCheckInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
