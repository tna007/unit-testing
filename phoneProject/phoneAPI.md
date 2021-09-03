# Phone API

## data

Data will be in a json file

### phones.json

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

## Class PhoneRegister

## **constructor(data)**

Phones json array is passed as a parameter `data`. If the parameter is missing, throws an exception `'phone data missing'`

## **getTypes()**

returns all phone types in an array. The type in added to the result array only once. If there is no phones, an empty array [] is returned.

For example:

```json
["home", "work", "mobile"]
```

## **getNumbersByType(firstname, lastname, type)**

Method returns an array of phone numbers of the given `type` belonging to a given person with given `firstname` and `lastname`.

If no person with given name is found, an empty array [] is returned.
If at least one parameter is missing an exception `'missing parameter'` is thrown.

For example Woody Hoody and work:

```json
["8765489", "22555888"]
```
