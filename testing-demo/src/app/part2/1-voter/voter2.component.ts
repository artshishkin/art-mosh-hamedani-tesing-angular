import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-voter2',
    templateUrl: './voter2.component.html',
    styleUrls: ['./voter2.component.css']
})
export class Voter2Component {
    @Input() othersVote = 0;
    @Input() myVote = 0;

    @Output() vote = new EventEmitter();

    upVote() {
        if (this.myVote == 1) {
            return;
        }

        this.myVote++;

        this.vote.emit({myVote: this.myVote});
    }

    downVote() {
        if (this.myVote == -1) {
            return;
        }

        this.myVote--;

        this.vote.emit({myVote: this.myVote});
    }

    get totalVotes() {
        return this.othersVote + this.myVote;
    }
}
