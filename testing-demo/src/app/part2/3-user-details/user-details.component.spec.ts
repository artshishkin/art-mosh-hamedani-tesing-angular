/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserDetailsComponent} from './user-details.component';
import {ActivatedRoute, Router} from "@angular/router";
import {from, Observable} from "rxjs";

class RouterStub {
  navigate(params: any) {
  }
}

class ActivatedRouteStub {
  params: Observable<any> = from([true]);
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


});
