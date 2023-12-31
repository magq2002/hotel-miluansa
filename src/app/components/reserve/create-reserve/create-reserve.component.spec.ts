import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReserveComponent } from './create-reserve.component';

describe('CreateReserveComponent', () => {
  let component: CreateReserveComponent;
  let fixture: ComponentFixture<CreateReserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateReserveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
