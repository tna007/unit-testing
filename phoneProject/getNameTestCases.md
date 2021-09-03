## Test Cases

## **getName(number)**

The method searches the given phone number from the telephone registry. If the number is found, the method returns a json object of form

```json
{ "firstname": "", "lastname": "" }
```

If no phone with given number is found, the method returns `null`.
If the parameter is missing null is also returned.

Before tests create phoneRegister object from the class PhoneRegister.

### Test 1: get name of the number "12345678"

Call

```js
phoneRegister.getName("12345678");
```

returns

```json
{ "firstname": "Woody", "lastname": "Hoody" }
```

### Test 2: get names by numbers from default data

```js
const testValues = [
  ["12345678", { firstname: "Woody", lastname: "Hoody" }],
  ["8765489", { firstname: "Woody", lastname: "Hoody" }],
  ["11144456", { firstname: "Mickey", lastname: "Minnie" }],
];
```

### Test 3: wrong number

Call

```js
phoneRegister.getName("00124");
```

returns `null`

### Test 4: parameter missing

Call

```js
phoneRegister.getName();
```

returns `null`
