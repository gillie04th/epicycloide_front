import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelesComponent } from './modeles.component';

describe('ModelesComponent', () => {
  let component: ModelesComponent;
  let fixture: ComponentFixture<ModelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
