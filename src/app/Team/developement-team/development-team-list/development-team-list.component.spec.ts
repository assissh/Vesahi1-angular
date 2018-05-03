import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentTeamListComponent } from './development-team-list.component';

describe('DevelopmentTeamListComponent', () => {
  let component: DevelopmentTeamListComponent;
  let fixture: ComponentFixture<DevelopmentTeamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentTeamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentTeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
