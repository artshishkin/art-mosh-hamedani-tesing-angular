import {getCurrencies} from "./getCurrencies";

describe('getCurrencies',()=>{
  it("should contain 'USD', 'AUD', 'EUR' in any order", () => {
    let currencies = getCurrencies();
    expect(currencies).toContain('USD');
    expect(currencies).toContain('AUD');
    expect(currencies).toContain('EUR');
  });
})
