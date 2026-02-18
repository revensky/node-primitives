/**
 * Enum type definition.
 */
export type Enum = Record<string, string | number>;

/**
 * Returns the keys of the Enum.
 *
 * @param enumObj Enum object to be inspected.
 * @returns Collection of the keys of the Enum.
 */
export function getEnumKeys<T extends Enum>(enumObj: T): (keyof T)[] {
  return Object.keys(enumObj).filter((key) => Number.isNaN(Number(key)));
}

/**
 * Returns the key of the first Enum member that represents the provided value.
 *
 * @param enumObj Enum object to be inspected.
 * @param value Value to be searched.
 * @returns Key of the first Enum member based on the provided value.
 */
export function getEnumKey<T extends Enum>(enumObj: T, value: T[keyof T]): keyof T | null {
  return getEnumKeys(enumObj).find((key) => enumObj[key] === value) ?? null;
}

/**
 * Checks if the provided Enum has the provided key as its member.
 *
 * @param enumObj Enum object to be inspected.
 * @param key Key to be checked.
 * @returns Whether the provided Enum has the provided key as its member.
 */
export function hasEnumKey<T extends Enum>(enumObj: T, key: unknown): key is keyof T {
  return typeof key === 'string' && getEnumKeys(enumObj).includes(key);
}

/**
 * Returns the values of the Enum.
 *
 * @param enumObj Enum object to be inspected.
 * @returns Collection of the Values of the Enum.
 */
export function getEnumValues<T extends Enum>(enumObj: T): T[keyof T][] {
  return getEnumKeys(enumObj).map((key) => enumObj[key]);
}

/**
 * Returns the first occurrence of the value in the Enum based on the provided key.
 *
 * @param enumObj Enum object to be inspected.
 * @returns First occurrence of the value in the Enum.
 */
export function getEnumValue<T extends Enum>(enumObj: T, key: keyof T): T[keyof T] | null {
  return hasEnumKey(enumObj, key) ? enumObj[key] : null;
}

/**
 * Checks if the provided Enum has the provided value as its member.
 *
 * @param enumObj Enum object to be inspected.
 * @param value Value to be checked.
 * @returns Whether the provided Enum has the provided value as its member.
 */
export function hasEnumValue<T extends Enum>(enumObj: T, value: unknown): value is T[keyof T] {
  return getEnumKey(enumObj, <any>value) !== null;
}

/**
 * Converts the provided value into a member of the provided Enum.
 *
 * @param enumObj Enum object to be inspected.
 * @param value Value to be searched.
 * @returns Enum member based on the provided value.
 */
export function parseEnumValue<T extends Enum>(enumObj: T, value: string | number): T[keyof T] | null {
  return getEnumValues(enumObj).find((attr) => attr === value) ?? null;
}

/**
 * Returns the entries of the provided Enum.
 *
 * @param enumObj Enum object to be inspected.
 * @returns Entries of the provided Enum.
 */
export function getEnumEntries<T extends Enum>(enumObj: T): [keyof T, T[keyof T]][] {
  return getEnumKeys(enumObj).map((key) => [key, enumObj[key]]);
}
