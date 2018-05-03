import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionTeamListComponent } from './production-team-list.component';

describe('ProductionTeamListComponent', () => {
  let component: ProductionTeamListComponent;
  let fixture: ComponentFixture<ProductionTeamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionTeamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionTeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
