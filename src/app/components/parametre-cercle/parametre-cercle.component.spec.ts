import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametreCercleComponent } from './parametre-cercle.component';

describe('ParametreCercleComponent', () => {
  let component: ParametreCercleComponent;
  let fixture: ComponentFixture<ParametreCercleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParametreCercleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParametreCercleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
