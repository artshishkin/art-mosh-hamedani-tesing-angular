import {VoterComponent} from "./voter.component";

describe('VoterComponent', () => {

  let voterComponent: VoterComponent;

  beforeEach(() => {
    voterComponent = new VoterComponent();
  });

  it('should return total votes as sum of otherVote and myVote', () => {

    voterComponent.myVote = 1;
    voterComponent.othersVote = 100;

    let totalVotes = voterComponent.totalVotes;

    expect(totalVotes).toBe(101);
  });

  describe('When I upvote, ', () => {
    it('should set myVote to 0 from -1 when upVoting', () => {

      voterComponent.myVote = -1;

      voterComponent.upVote();

      expect(voterComponent.totalVotes).toBe(0);
    });

    it('should set myVote to 1 from 0 when upVoting', () => {

      voterComponent.myVote = 0;

      voterComponent.upVote();

      expect(voterComponent.totalVotes).toBe(1);
    });

    it('should not set myVote larger then 1', () => {

      voterComponent.myVote = 1;

      voterComponent.upVote();

      expect(voterComponent.totalVotes).toBe(1);
    });

    it('should emit event when myVote changes by upVoting', () => {
      let voteEvent: any;
      voterComponent.myVoteChanged.subscribe(event => voteEvent = event)
      voterComponent.myVote = 0;

      voterComponent.upVote();

      expect(voteEvent).toEqual({myVote: 1});
    });

    it('should NOT emit event when myVote DOES NOT change by upVoting', () => {
      let voteEvent: any;
      voterComponent.myVoteChanged.subscribe(event => voteEvent = event)
      voterComponent.myVote = 1;

      voterComponent.upVote();

      expect(voteEvent).toBeUndefined();
    });

  });


  describe('When I downvote, ', () => {
    it('should set myVote to 0 from 1 when downVoting', () => {

      voterComponent.myVote = 1;

      voterComponent.downVote();

      expect(voterComponent.totalVotes).toBe(0);
    });

    it('should set myVote to -1 from 0 when downVoting', () => {

      voterComponent.myVote = 0;

      voterComponent.downVote();

      expect(voterComponent.totalVotes).toBe(-1);
    });

    it('should not set myVote smaller then -1 when downVoting', () => {

      voterComponent.myVote = -1;

      voterComponent.downVote();

      expect(voterComponent.totalVotes).toBe(-1);
    });


    it('should emit event when myVote changes by downVoting', () => {
      let voteEvent: any;
      voterComponent.myVoteChanged.subscribe(event => voteEvent = event)
      voterComponent.myVote = 1;

      voterComponent.downVote();

      expect(voteEvent).toEqual({myVote: 0});
    });

    it('should NOT emit event when myVote DOES NOT change by downVoting', () => {
      let voteEvent: any;
      voterComponent.myVoteChanged.subscribe(event => voteEvent = event)
      voterComponent.myVote = -1;

      voterComponent.downVote();

      expect(voteEvent).toBeUndefined();
    });

  });

});
