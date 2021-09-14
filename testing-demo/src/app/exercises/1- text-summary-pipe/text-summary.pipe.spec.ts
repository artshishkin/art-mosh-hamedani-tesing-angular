import {TextSummaryPipe} from "./text-summary.pipe";

describe('TextSummaryPipe', () => {

  let textSummaryPipe: TextSummaryPipe;

  beforeEach(() => {
    textSummaryPipe = new TextSummaryPipe();
  });

  it('should return empty value if input is null', () => {

    let result = textSummaryPipe.transform(null);

    expect(result).toBe('');
  });

  it('should return empty value if input is undefined', () => {

    let input;
    console.log(input);
    let result = textSummaryPipe.transform(input);

    expect(result).toBe('');
  });

  it('should return empty value if input is empty', () => {

    let input = '';
    console.log(input);
    let result = textSummaryPipe.transform(input);

    expect(result).toBe('');
  });

  it('should return input value if input is not empty and length < 10', () => {

    let input = '1234';

    let result = textSummaryPipe.transform(input);

    expect(result).toBe(input);
  });

  it('should return CUTTED input value to the length of 10', () => {

    let input = '123456789012345678';

    let result = textSummaryPipe.transform(input);

    expect(result).toBe('1234567890...');
  });

  it('should return CUTTED input value to the length of second argument', () => {

    let input = '123456789012345678';

    let result = textSummaryPipe.transform(input, 5);

    expect(result).toBe('12345...');
  });

  it('should return input value if length is less then second argument', () => {

    let input = '1234';

    let result = textSummaryPipe.transform(input, 5);

    expect(result).toBe(input);
  });

  it('should BROKE the pipe logic when passing NOT A NUMBER as the second argument', () => {

    let input = '123456789012345';

    let result = textSummaryPipe.transform(input, 'foo buzz bar');

    expect(result).toBe('...');
    console.log('WTF');
  });


});

