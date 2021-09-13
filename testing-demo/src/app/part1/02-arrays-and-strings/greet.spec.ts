import {greet} from "./greet";

describe('greet', () => {
  it('should add name to the message', () => {
    let finalMessage = greet("Art");
    expect(finalMessage).toContain('Art');
  });
})
