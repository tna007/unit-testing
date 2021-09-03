# Test Cases

## **getAllNumbers()**

Returns all phone numbers in an array, each as an object of form:

```json
{ "firstname": "", "lastname": "", "phones": [] }
```

The phone object in phones array is of form:

```json
{ "type": "", "number": "" }
```

If a person doesn't have a phone(the phone field is an empty array), then the person will not be added into the result array. If all phones are missing, an empty array is returned. If all persons are missing, an empty array is returned.

Before tests create phoneRegister object from the class PhoneRegister.

### Test 1: get all with default data

```js
phneRegister.getAllNumbers();
```

returns

```json
[
  {
    "firstname": "Woody",
    "lastname": "Hoody",
    "phones": [
      {
        "type": "home",
        "number": "12345678"
      },
      {
        "type": "work",
        "number": "8765489"
      },
      {
        "type": "work",
        "number": "22555888"
      }
    ]
  },
  {
    "firstname": "Mickey",
    "lastname": "Minnie",
    "phones": [
      {
        "type": "home",
        "number": "11144456"
      },
      {
        "type": "mobile",
        "number": "04458795"
      },
      {
        "type": "work",
        "number": "23575889"
      }
    ]
  }
]
```

### Test 2: some phones missing

Test data:

```json
[
  {
    "firstname": "Woody",
    "lastname": "Hoody",
    "phones": [
      {
        "type": "home",
        "number": "12345678"
      },
      {
        "type": "work",
        "number": "8765489"
      },
      {
        "type": "work",
        "number": "22555888"
      }
    ]
  },
  {
    "firstname": "Mickey",
    "lastname": "Minnie",
    "phones": []
  }
]
```

```js
phoneRegister.getAllNumbers();
```

returns:

```json
[
  {
    "firstname": "Woody",
    "lastname": "Hoody",
    "phones": [
      {
        "type": "home",
        "number": "12345678"
      },
      {
        "type": "work",
        "number": "8765489"
      },
      {
        "type": "work",
        "number": "22555888"
      }
    ]
  }
]
```

### Test 4: all phones missing

Test data:

```json
[
  {
    "firstname": "Woody",
    "lastname": "Hoody",
    "phones": []
  },
  {
    "firstname": "Mickey",
    "lastname": "Minnie",
    "phones": []
  }
]
```

```js
phoneRegister.getAllNumbers();
```

returns an empty array [].

### Test 5: all persons missing

Test data: []

```js
phoenRegister.getAllNumbers();
```

returns an empty array [].
