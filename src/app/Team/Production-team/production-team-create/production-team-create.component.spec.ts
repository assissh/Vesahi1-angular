import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionTeamCreateComponent } from './production-team-create.component';

describe('ProductionTeamCreateComponent', () => {
  let component: ProductionTeamCreateComponent;
  let fixture: ComponentFixture<ProductionTeamCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionTeamCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionTeamCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
