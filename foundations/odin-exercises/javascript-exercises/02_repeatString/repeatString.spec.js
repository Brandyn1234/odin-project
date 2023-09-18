const repeatString = require('./repeatString');

describe('repeatString', () => {
  test('repeats the string', () => {
    expect(repeatString('hey', 3)).toEqual('heyheyhey');
  });
  test.skip('repeats the string many times', () => {
    expect(repeatString('hey', 10)).toEqual('heyheyheyheyheyheyheyheyheyhey');
  });
  test.skip('repeats the string 1 times', () => {
    expect(repeatString('hey', 1)).toEqual('hey');
  });
  test.skip('repeats the string 0 times', () => {
    expect(repeatString('hey', 0)).toEqual('');
  });
  test.skip('returns ERROR with negative numbers', () => {
    expect(repeatString('hey', -1)).toEqual('ERROR');
  });
  test.skip('repeats the string a random amount of times', function () {
    const number = Math.floor(Math.random() * 1000);

    expect(repeatString('hey', number).match(/((hey))/g).length).toEqual(number);
  });
  test.skip('works with blank strings', () => {
    expect(repeatString('', 10)).toEqual('');
  });
});