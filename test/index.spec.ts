import { myPackage } from '../src';

describe('index', () => {
  describe('myPackage', () => {
    it('should return a string containing the message', () => {
      const message = 'Hello6';

      const result = myPackage(message);

      expect(result).toMatch(message);
    });
  });
});
