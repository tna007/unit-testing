# calc library API

## **sum(a,b)**

Function returns the sum of two numbers. Numbers are passed to function as params

Returns the sum on given numbers

- if param is missing, throws an exception: `'parameter missing'`
- if params are not numbers, throws an exception: `'only numbers allowed'`

### Test cases

#### 1 sums

##### Integers

- sum(1,1) return 2
- sum(2,3) return 5
- sum(-2,-4) return -6
- sum(-2,4) return 2
  [2, -4, -2],
  [0, 0, 0],
  [0, 3, 3],
  [3, 0, 3],
  [0, -3, -3],
  [-3, 0, -3]

##### Floats

sum(10, 11.5) returns 21.5

[10, 11.5, 21.5],
[2.5, 3, 5.5],
[-2.5, 3, 0.5],
[3, 2.5, -0.5],
[-2.5, -3, -5.5],
[-2.5, -2.5, -5.0],
[-2.5, 2.5, 0],
[2.4, -2.5, -0.1]

#### 2 Missing parameter

- sum() throws an exception `'parameter missing'`
- sum(1) throws an exception `'parameter missing'`
- sum(a) throws an exception `'parameter missing'`
- sum('') throws an exception `'parameter missing'`
- sum(null, 1) throws an exception `'parameter missing'`
- sum(undefined, 1) throws an exception `'parameter missing'`

#### 3 Parameters are not numbers

- sum('a', 1) throws an exception `'only numbers allowed'`
- sum(1, 'a') throws an exception `'only numbers allowed'`
- sum('a', 'b') throws an exception `'only numbers allowed'`
- sum('', '') throws an exception `'only numbers allowed'`

### division

function divide(a,b) returns a/b

problems:

0/0 => NaN
2/0 => Infinity
-2/0 => -Infinity
Infinity / Infinity => NaN
-Infinity / Infinity => NaN
Infinity/ -Infinity => NaN

- Infinity/ -Infinity => NaN

Test values:
[0, 0, Number.NaN],
[2, 0, Number.POSITIVE_INFINITY],
[-2, 0, Number.NEGATIVE_INFINITY],
[Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NaN]
