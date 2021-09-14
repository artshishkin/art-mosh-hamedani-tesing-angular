import {Voter2Component} from './voter2.component';
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

describe('Voter2Component', () => {

  let fixture: ComponentFixture<Voter2Component>;
  let component: Voter2Component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Voter2Component]
    });

    fixture = TestBed.createComponent(Voter2Component);
    component = fixture.componentInstance;
    // fixture.nativeElement - root DOM element for this component template
    // fixture.debugElement - wrapper around native element

  });

  it('should render total votes', () => {

    component.myVote = 1;
    component.othersVote = 123;
    fixture.detectChanges();

    // fixture.debugElement.query(By.directive(Voter2Component))
    let debugElement = fixture.debugElement.query(By.css('.vote-count'));
    let el: HTMLElement = debugElement.nativeElement;

    expect(el.innerText).toContain('124');
  });

  it('should highlight the upvote button if I have upvoted', () => {

    component.myVote = 1;
    fixture.detectChanges();

    let debugElement = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    expect(debugElement.classes['highlighted']).toBeTruthy();
  });


});
