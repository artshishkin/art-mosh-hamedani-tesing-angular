import {VoteComponent} from './vote.component';

describe('VoteComponent', () => {

  let component: VoteComponent;
  beforeEach(() => {
    // Arrange
    component = new VoteComponent();
  });

  afterEach(() => {
  });

  it('should increment totalVotes when upVoted', () => {

    // Act
    component.upVote();

    // Assert
    expect(component.totalVotes).toBe(1);

  });

  it('should decrement totalVotes when downVoted', () => {

    component.downVote();

    expect(component.totalVotes).toBe(-1);

  });
});
