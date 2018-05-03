import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopementTeamComponent } from './developement-team.component';

describe('DevelopementTeamComponent', () => {
  let component: DevelopementTeamComponent;
  let fixture: ComponentFixture<DevelopementTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopementTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopementTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
