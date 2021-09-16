/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserDetailsComponent} from './user-details.component';
import {ActivatedRoute, Router} from "@angular/router";
import {Subject} from "rxjs";

class RouterStub {
  navigate(params: any) {
  }
}

class ActivatedRouteStub {

  private subject: Subject<any> = new Subject<any>();

  push(value: any) {
    this.subject.next(value);
  }

  get params() {
    return this.subject.asObservable();
  }

}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      providers: [
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect the customer to the users page after saving', () => {

    let router = TestBed.inject(Router);
    let spy = spyOn(router, "navigate");

    component.save();

    expect(spy).toHaveBeenCalledWith(['users']);
  });

  it('should navigate the customer to the `not-found` page when no valid user id is passed', () => {

    let router = TestBed.inject(Router);
    let spy = spyOn(router, "navigate");

    let activatedRouteSpy: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    activatedRouteSpy.push({id: 0, name: 'fooBuzzBar'});

    expect(spy).toHaveBeenCalledWith(['not-found']);
  });

  it('should NOT navigate the customer to the `not-found` page when VALID user id is passed', () => {

    let router = TestBed.inject(Router);
    let spy = spyOn(router, "navigate");

    let activatedRouteSpy: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    activatedRouteSpy.push({id: 123, name: 'Good Id User'});

    expect(spy).not.toHaveBeenCalled();
  });


});
