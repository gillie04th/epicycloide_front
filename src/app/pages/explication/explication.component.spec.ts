import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplicationComponent } from './explication.component';

describe('ExplicationComponent', () => {
  let component: ExplicationComponent;
  let fixture: ComponentFixture<ExplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
