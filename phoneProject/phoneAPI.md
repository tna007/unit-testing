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

returns all phone types in an array. The type in added to the result array only once. If there is no phones or no persons, an empty array [] is returned.

For example:

```json
["home", "work", "mobile"]
```

## **getNumbersByType(firstname, lastname, type)**

Method returns an array of objects including phone numbers of the given `type` belonging to a given person with given `firstname` and `lastname`.

If no person with given name is found, an empty array [] is returned.
If no number with given type is found, an empty arry [] is returned.
If at least one parameter is missing an exception `'missing parameter'` is thrown.

For example Woody Hoody and work:

```json
["8765489", "22555888"]
```

## **getAllNumbersByType(type)**

Returns an array of objects including names and phone numbers of the given `type`. If no number of given type is found, an empty array [] is returned. If a person of multiple number is found, each of them will be in it's own object.

If a parameter is missing, the function throws an exception: **`'missing parameter'`**.

The format of the returned object is:

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

## **getName(number)**

The method searches the given phone number from the telephone registry. If the number is found, the method returns a json object of form

```json
{ "firstname": "", "lastname": "" }
```

If no phone with given number is found, the method returns `null`.
If the parameter is missing null is also returned.
