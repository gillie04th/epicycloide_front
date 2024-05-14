import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardModelePredefiniComponent } from './card-modele-predefini.component';

describe('CardModelePredefiniComponent', () => {
  let component: CardModelePredefiniComponent;
  let fixture: ComponentFixture<CardModelePredefiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardModelePredefiniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardModelePredefiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
