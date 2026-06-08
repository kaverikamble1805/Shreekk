import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineDonation } from './online-donation';

describe('OnlineDonation', () => {
  let component: OnlineDonation;
  let fixture: ComponentFixture<OnlineDonation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineDonation],
    }).compileComponents();

    fixture = TestBed.createComponent(OnlineDonation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
