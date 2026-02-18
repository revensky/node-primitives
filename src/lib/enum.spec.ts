import {
  getEnumEntries,
  getEnumKey,
  getEnumKeys,
  getEnumValue,
  getEnumValues,
  hasEnumKey,
  hasEnumValue,
  parseEnumValue,
} from './enum';

enum IntEnum {
  One = 1,
  Two = 2,
  Four = 4,
  Eight = 8,
}

enum StringEnum {
  Foo = 'foo',
  Bar = 'bar',
  Baz = 'baz',
  Qux = 'qux',
}

describe('getEnumKeys()', () => {
  it('should return all the keys of the enum.', () => {
    expect(getEnumKeys(IntEnum)).toEqual(['One', 'Two', 'Four', 'Eight']);
    expect(getEnumKeys(StringEnum)).toEqual(['Foo', 'Bar', 'Baz', 'Qux']);
  });
});

describe('getEnumKey()', () => {
  it("should return null when there's no key that matches the provided value in the enum.", () => {
    expect(getEnumKey(IntEnum, <any>3)).toBeNull();
    expect(getEnumKey(StringEnum, <any>'unknown')).toBeNull();
  });

  it('should return the first key that matches the requested value.', () => {
    expect(getEnumKey(IntEnum, IntEnum.One)).toEqual('One');
    expect(getEnumKey(StringEnum, StringEnum.Foo)).toEqual('Foo');
  });
});

describe('hasEnumKey()', () => {
  it('should return whether or not the provided key exists in the enum.', () => {
    expect(hasEnumKey(IntEnum, 'Eight')).toBeTrue();
    expect(hasEnumKey(StringEnum, 'Baz')).toBeTrue();

    expect(hasEnumKey(IntEnum, 'Unknown')).toBeFalse();
    expect(hasEnumKey(StringEnum, 'Unknown')).toBeFalse();
  });
});

describe('getEnumValues()', () => {
  it('should return all the values of the enum.', () => {
    expect(getEnumValues(IntEnum)).toEqual([1, 2, 4, 8]);
    expect(getEnumValues(StringEnum)).toEqual(['foo', 'bar', 'baz', 'qux']);
  });
});

describe('getEnumValue()', () => {
  it("should return null when there's no value that matches the provided key in the enum.", () => {
    expect(getEnumValue(IntEnum, <any>'Sixteen')).toBeNull();
    expect(getEnumValue(StringEnum, <any>'quux')).toBeNull();
  });

  it('should return the first value that matches the requested key.', () => {
    expect(getEnumValue(IntEnum, 'Four')).toEqual(4);
    expect(getEnumValue(StringEnum, 'Foo')).toEqual('foo');
  });
});

describe('hasEnumValue()', () => {
  it('should return whether or not the provided value exists in the enum.', () => {
    expect(hasEnumValue(IntEnum, 2)).toBeTrue();
    expect(hasEnumValue(StringEnum, 'qux')).toBeTrue();

    expect(hasEnumValue(IntEnum, 32)).toBeFalse();
    expect(hasEnumValue(StringEnum, 'unknown')).toBeFalse();
  });
});

describe('parseEnumValue()', () => {
  it('should return null when the provided value does not exist in the enum.', () => {
    expect(parseEnumValue(IntEnum, 32)).toBeNull();
    expect(parseEnumValue(StringEnum, 'unknown')).toBeNull();
  });

  it('should return the parsed value of the enum.', () => {
    expect(parseEnumValue(IntEnum, 2)).toEqual(2);
    expect(parseEnumValue(StringEnum, 'qux')).toEqual('qux');
  });
});

describe('getEnumEntries()', () => {
  it('should return the entries of the enum.', () => {
    expect(getEnumEntries(IntEnum)).toEqual([
      ['One', 1],
      ['Two', 2],
      ['Four', 4],
      ['Eight', 8],
    ]);

    expect(getEnumEntries(StringEnum)).toEqual([
      ['Foo', 'foo'],
      ['Bar', 'bar'],
      ['Baz', 'baz'],
      ['Qux', 'qux'],
    ]);
  });
});
