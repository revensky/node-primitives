# @revensky/primitives

Library that provides enhanced functionalities for NodeJS' primitive types.

## JSON

Enhances the JSON library by allowing the `jsonParse()` method to remove
the `__proto__` and `constructor` properties of any JSON object,
as they can be used to inject malicious code into the resulting object.

It also exposes a `jsonStringify()` method for stability purposes.
