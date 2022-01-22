import { si } from './infoSystem';

describe('typeScript test suite', () => {
  it('should return "system information"', () => {
    expect.assertions(1);
    expect(si).toHaveProperty('cpu');
  });
});


