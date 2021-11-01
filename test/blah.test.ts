import { sum, getObjAttrFromString } from '../src';

describe('sum', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});

describe('[Success] Get object attribute`s value, from a string', () => {
  it('works', () => {
    const object = {
      attr1: {
        subAttr: 'value 1',
      },
      attr2: 'value 2',
    };
    const string = 'attr1.subAttr';

    expect(getObjAttrFromString(object, string)).toEqual('value 1');
  });
});
