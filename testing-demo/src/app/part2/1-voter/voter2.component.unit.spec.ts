import {Voter2Component} from "./voter2.component";

describe('VoterComponent', () => {

  let voter2Component: Voter2Component;

  beforeEach(() => {
    voter2Component = new Voter2Component();
  });

  it('should return total votes as sum of otherVote and myVote', () => {

    voter2Component.myVote = 1;
    voter2Component.othersVote = 100;

    let totalVotes = voter2Component.totalVotes;

    expect(totalVotes).toBe(101);
  });

  describe('When I upvote, ', () => {
    it('should set myVote to 0 from -1 when upVoting', () => {

      voter2Component.myVote = -1;

      voter2Component.upVote();

      expect(voter2Component.totalVotes).toBe(0);
    });

    it('should set myVote to 1 from 0 when upVoting', () => {

      voter2Component.myVote = 0;

      voter2Component.upVote();

      expect(voter2Component.totalVotes).toBe(1);
    });

    it('should not set myVote larger then 1', () => {

      voter2Component.myVote = 1;

      voter2Component.upVote();

      expect(voter2Component.totalVotes).toBe(1);
    });

    it('should emit event when myVote changes by upVoting', () => {
      let voteEvent: any;
      voter2Component.vote.subscribe(event => voteEvent = event)
      voter2Component.myVote = 0;

      voter2Component.upVote();

      expect(voteEvent).toEqual({myVote: 1});
    });

    it('should NOT emit event when myVote DOES NOT change by upVoting', () => {
      let voteEvent: any;
      voter2Component.vote.subscribe(event => voteEvent = event)
      voter2Component.myVote = 1;

      voter2Component.upVote();

      expect(voteEvent).toBeUndefined();
    });

  });


  describe('When I downvote, ', () => {
    it('should set myVote to 0 from 1 when downVoting', () => {

      voter2Component.myVote = 1;

      voter2Component.downVote();

      expect(voter2Component.totalVotes).toBe(0);
    });

    it('should set myVote to -1 from 0 when downVoting', () => {

      voter2Component.myVote = 0;

      voter2Component.downVote();

      expect(voter2Component.totalVotes).toBe(-1);
    });

    it('should not set myVote smaller then -1 when downVoting', () => {

      voter2Component.myVote = -1;

      voter2Component.downVote();

      expect(voter2Component.totalVotes).toBe(-1);
    });


    it('should emit event when myVote changes by downVoting', () => {
      let voteEvent: any;
      voter2Component.vote.subscribe(event => voteEvent = event)
      voter2Component.myVote = 1;

      voter2Component.downVote();

      expect(voteEvent).toEqual({myVote: 0});
    });

    it('should NOT emit event when myVote DOES NOT change by downVoting', () => {
      let voteEvent: any;
      voter2Component.vote.subscribe(event => voteEvent = event)
      voter2Component.myVote = -1;

      voter2Component.downVote();

      expect(voteEvent).toBeUndefined();
    });

  });

});
