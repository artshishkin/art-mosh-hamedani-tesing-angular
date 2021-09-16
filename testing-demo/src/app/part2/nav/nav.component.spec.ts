import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NavComponent} from './nav.component';
import {By} from "@angular/platform-browser";
import {RouterLinkWithHref} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ NavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to todos page', () => {

    let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    // <a href="todos" ...
    console.log(debugElements);
    let index = debugElements.findIndex(de => de.attributes['routerLink'] === 'todos');

    expect(index).not.toBe(-1);
  });
});
