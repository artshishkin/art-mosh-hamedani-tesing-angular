/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HighlightDirective} from './highlight.directive';
import {Component} from '@angular/core';
import {By} from "@angular/platform-browser";

@Component({
    template: `
        <p highlight="cyan">First</p>
        <p highlight>Second</p>
    `
})
class DirectiveHostComponent {
}

describe('HighlightDirective', () => {
    let fixture: ComponentFixture<DirectiveHostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DirectiveHostComponent, HighlightDirective]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DirectiveHostComponent);
        fixture.detectChanges();
    });

    it('should highlight the first element with cyan', () => {

      let firstParagraph = fixture.debugElement.queryAll(By.css('p'))[0];

      expect(firstParagraph.nativeElement.style.backgroundColor).toBe('cyan');

    });

    it('should highlight the second element with the default color', () => {

      let secondParagraph = fixture.debugElement.queryAll(By.css('p'))[1];

      let highlightDirective = secondParagraph.injector.get(HighlightDirective);
      let defaultColor = highlightDirective.defaultColor;

      expect(secondParagraph.nativeElement.style.backgroundColor).toBe(defaultColor);

    });

});
