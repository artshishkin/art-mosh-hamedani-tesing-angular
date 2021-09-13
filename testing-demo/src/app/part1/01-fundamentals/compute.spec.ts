// describe()  // suite - group of related tests
// it()        // spec - define spec or test

import {compute} from "./compute";

describe('compute', function () {
  it('should return 0 if input is negative', () => {
    let result = compute(-1);
    expect(result).toBe(0);
  });

  it('should return (input+1) if input is positive or 0', () => {
    let result = compute(100);
    expect(result).toBe(101);
  });
})
