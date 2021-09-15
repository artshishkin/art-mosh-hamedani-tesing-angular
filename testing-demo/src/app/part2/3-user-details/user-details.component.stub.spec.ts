/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserDetailsComponent} from './user-details.component';
import {ActivatedRoute, Router} from "@angular/router";
import {from} from "rxjs";

describe('UserDetailsComponent using jasmine.createSpyObj', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  let routerSpy: jasmine.SpyObj<Router>;
  let activatedRouteSpy: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(() => {

    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);
    const activatedRouteSpyObj = jasmine.createSpyObj('ActivatedRoute', ['foo']);

    TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      providers: [
        {provide: Router, useValue: routerSpyObj},
        {provide: ActivatedRoute, useValue: activatedRouteSpyObj}
      ]
    });

    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    activatedRouteSpy = TestBed.inject(ActivatedRoute) as jasmine.SpyObj<ActivatedRoute>;
    activatedRouteSpy.params = from([]);

    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
