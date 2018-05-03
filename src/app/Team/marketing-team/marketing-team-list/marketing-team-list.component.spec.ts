import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingTeamListComponent } from './marketing-team-list.component';

describe('MarketingTeamListComponent', () => {
  let component: MarketingTeamListComponent;
  let fixture: ComponentFixture<MarketingTeamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingTeamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingTeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
