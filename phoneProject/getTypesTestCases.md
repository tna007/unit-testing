# Test Cases

## **getTypes()**

returns all phone types in an array. The type in added to the result array only once. If there is no phones or no persons, an empty array [] is returned.

For example:

```json
["home", "work", "mobile"]
```

Before tests create phoneRegister object from the class PhoneRegister.

### Test 1: default jsonData

get types of the default jsonData

returns

```json
["home", "work", "mobile"]
```

### Test 2: persons have no phones

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

returns an empty array []

### Test 3: no persons in PhoneRegester

test data is []
returns an empty array []
