# Test cases for Dice

This is a Dice class for dice game. Dice holds the number of dots. The number of dots is between 1 and given upper bound(included). The maximum upper bound is 20. The minimum upper bound is 2. If the dice has not been rolled, the number of dots is 0. After the dice has been rolled, the dot count can't become zero again.

## Operations

### **constructor**

- initialize the dice with upper bound that is passed as a parameter
- if no upper bound is given, the default upper bound is 6
- initializes dot count to 0

- if upper bound is not an integer, throw an exception `'upper bound must be an integer'`

- if the upper bound is not between 2 and 20, an exception is thrown:
  - upper bound > 20: `'Upper bound too big'`
  - upper bound < 2: `'Upper bound too small'`

#### Test cases for constructor

1. Create a dice with no upper bound

- creates a dice with dot count between 1 - 6
- dot count is zero

2. Create a dice with given upper bound 2-20

- creates a dice with dot count between 1-upper bound
- dot count is zero(tested in test case 1)

3. Test the exceptions

- 0 throws an exception `'Upper bound too small'`
- 1 throws an exception `'Upper bound too small'`
- -1 throws an exception `'Upper bound too small '`
- 21 throws an exception `'Upper bound too big'`
- 'a' throws an exception `'Upper bound must be an integer'`
- 2.5 throws an exception `'Upper bound must be an integer'`

### **methods**

#### **roll**

- rolls the dice
- when rolled, the dot count become a random number between 1 and upper bound
- returns nothing

#### test cases for roll

- create a dice with no upper bound. Upper bound should be 6. When the dice hasn't been rolled, dot count is 0. Then roll the dice and now dot count should be between 1-6.
- create a dice with upper bound 20 => after rolled results dot count between 1-20.

#### **toString**

- returns dot count as a string. E.g: `'4'`
- if the dice has not been rolled yet, returns `'Not rolled yet'`

#### Test cases for toString


### **Getter**

#### **dots**

- returns the number of dots.

#### **minimumValue**

- returns the minimum number of dots of a dice. It should be 2.

#### **maximumValue**

-returns the upper bound of a dice.
