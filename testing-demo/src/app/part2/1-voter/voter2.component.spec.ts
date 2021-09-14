import {Voter2Component} from './voter2.component';
import {ComponentFixture, TestBed} from "@angular/core/testing";

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
    // fixture.debugElement - wrapper arount native element

  });

  it('', () => {
  });
});
