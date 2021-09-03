# Test Cases

## **constructor(data)**

Phones json array is passed as a parameter `data`. If the parameter is missing, throws an excetion `'phone data missing'`.

### Test 1: object created

```js
new PhoneRegister(jsonData);
```

Test if the objects inner field has the same value as given as parameter. Parameter jsonData is the default `phones.json`

### Test 2: missing parameter throws an exception

```js
new PhoneRegister();
```

This will throw an excetion `'phone data missing'`.
