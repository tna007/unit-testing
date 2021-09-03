# Test Cases

## **getNumbersByType(firstname, lastname, type)**

Method returns an array of objects including phone numbers of the given `type` belonging to a given person with given `firstname` and `lastname`.

If no person with given name is found, an empty array [] is returned.
If no number with given type is found, an empty arry [] is returned.
If at least one parameter is missing an exception `'missing parameter'` is thrown.

For example Woody Hoody and work:

```json
["8765489", "22555888"]
```

Before tests create phoneRegister object from the class PhoneRegister.

### Test 1: get from default jsonData with parameters Woody, Hoody, work

```js
phoneRegister.getNumbersByType("Woody", "Hoody", "work");
```

returns

```json
["8765489", "22555888"]
```

### Test 2: get from default jsonData with parameters Mickey, Minnie, mobile

returns

```json
["04458795"]
```

### Test 3: wrong type or name returns an empty array

```js
phoneRegister.getNumbersByType("Mickey", "Minnie", "x");
phoneRegister.getNumbersByType("Mickey", "x", "mobile");
phoneRegister.getNumbersByType("x", "Minnie", "mobile");
```

### Test 4: missing parameter throws an exception

```js
phoneRegister.getNumbersByType("Mickey", "Minnie");
phoneRegister.getNumbersByType("Mickey");
phoneRegister.getNumbersByType();
```
