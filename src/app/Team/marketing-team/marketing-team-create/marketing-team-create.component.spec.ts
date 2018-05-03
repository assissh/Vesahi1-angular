import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingTeamCreateComponent } from './marketing-team-create.component';

describe('MarketingTeamCreateComponent', () => {
  let component: MarketingTeamCreateComponent;
  let fixture: ComponentFixture<MarketingTeamCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingTeamCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingTeamCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
