# Test Cases

## **getAllNumbersByType(firstname, lastname, type)**

Returns an array of objects including names and phone numbers of the given `type`. If no number of given type is found, an empty array [] is returned. If a person of multiple number is found, each of them will be in it's own object.

If a parameter is missing, the function throws an exception: **`'missing parameter'`**.

The format of the returned object is:

```json
[
  { "firstname": "", "lastname": "", "number": { "type": "", "tel": "" } },
  { "firstname": "", "lastname": "", "number": { "type": "", "tel": "" } }
]
```

Example:

```json
[
  {
    "firstname": "Woody",
    "lastname": "Hoody",
    "number": [
      {
        "type": "work",
        "tel": "8765489"
      }
    ],
    "firstname": "Woody",
    "lastname": "Hoody",
    "number": [
      {
        "type": "work",
        "tel": "22555888"
      }
    ]
  },
  {
    "firstname": "Woody",
    "lastname": "Hoody",
    "number": [
      {
        "type": "work",
        "tel": "22555888"
      }
    ]
  },
  {
    "firstname": "Mickey",
    "lastname": "Minnie",
    "number": [
      {
        "type": "work",
        "tel": "23575889"
      }
    ]
  }
]
```

Before tests create phoneRegister object from the class PhoneRegister.

### Test 1: get all work numbers

```js
phoneRegister.getAllNumbersByType("work");
```

returns

```json
[
  {
    "firstname": "Woody",
    "lastname": "Hoody",
    "number": [
      {
        "type": "work",
        "tel": "8765489"
      }
    ],
    "firstname": "Woody",
    "lastname": "Hoody",
    "number": [
      {
        "type": "work",
        "tel": "22555888"
      }
    ]
  },
  {
    "firstname": "Woody",
    "lastname": "Hoody",
    "number": [
      {
        "type": "work",
        "tel": "22555888"
      }
    ]
  },
  {
    "firstname": "Mickey",
    "lastname": "Minnie",
    "number": [
      {
        "type": "work",
        "tel": "23575889"
      }
    ]
  }
]
```

### Test 2: get all mobile numbers

```js
phoneRegister.getAllNumbersByType("mobile");
```

returns:

```json
[
  {
    "firstname": "Mickey",
    "lastname": "Minnie",
    "number": [
      {
        "type": "mobile",
        "tel": "23575889"
      }
    ]
  }
]
```

### Test 3: type 'x' will return an empty array []

```js
phoneRegister.getAllNumbersByType("x");
```

returns []

### Test 4: type 'x' will return an empty array []

```js
phoneRegister.getAllNumbersByType();
```

throws an exception `'missing parameter'`
