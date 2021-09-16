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

  });

  describe('and activated route without params', () => {
    beforeEach(() => {

      activatedRouteSpy.params = from([]);

      fixture = TestBed.createComponent(UserDetailsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should redirect the customer to the users page after saving', () => {

      component.save();

      expect(routerSpy.navigate).toHaveBeenCalledWith(['users']);
    });


  });

  describe('and testing activated route with wrong params', () => {

    beforeEach(() => {

      activatedRouteSpy.params = from([{id: 0, name: 'wrong id'}]);

      fixture = TestBed.createComponent(UserDetailsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should navigate the customer to the `not-found` page when NO valid user id is passed', () => {
      expect(routerSpy.navigate).toHaveBeenCalledWith(['not-found']);
    });

  });

  describe('and testing activated route with correct params', () => {

    beforeEach(() => {

      activatedRouteSpy.params = from([{id: 123, name: 'User With Correct id'}]);

      fixture = TestBed.createComponent(UserDetailsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should NOT navigate the customer to the `not-found` page when VALID user id is passed', () => {
      expect(routerSpy.navigate).not.toHaveBeenCalled();
    });

  });

});
