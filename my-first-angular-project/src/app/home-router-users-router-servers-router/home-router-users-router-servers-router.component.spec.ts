import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRouterUsersRouterServersRouterComponent } from './home-router-users-router-servers-router.component';

describe('HomeRouterUsersRouterServersRouterComponent', () => {
  let component: HomeRouterUsersRouterServersRouterComponent;
  let fixture: ComponentFixture<HomeRouterUsersRouterServersRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRouterUsersRouterServersRouterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRouterUsersRouterServersRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
