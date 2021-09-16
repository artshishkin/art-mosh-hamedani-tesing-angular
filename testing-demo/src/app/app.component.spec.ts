import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {By} from "@angular/platform-browser";
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {NavComponent} from "./part2/nav/nav.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [
        AppComponent,
        NavComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testing-demo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testing-demo');
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('testing-demo app is running!');
  });

  it('should have a router outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);

    let debugElement = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(debugElement).not.toBeNull();
  });

  it('should have a link to todos page', () => {
    const fixture = TestBed.createComponent(AppComponent);

    let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    // <a href="todos" ...
    console.log(debugElements);
    let index = debugElements.findIndex(de => de.attributes['routerLink'] === 'todos');

    expect(index).not.toBe(-1);
  });

});
