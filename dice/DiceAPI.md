# Dice (API)

This is a Dice class for dice game. Dice holds the number of dots. The number of dots is between 1 and given upper bound(= max number of dots)(included). The maximum upper bound is 20. The minimum upper bound is 2. If the dice has not been rolled, the number of dots is 0. After the dice has been rolled, the dot count can't become zero again.

## Operations

### **constructor**

- initialize the dice with upper bound that is passed as a parameter
- if no upper bound is given, the default upper bound is 6
- initializes dot count to 0

- if upper bound is not an integer, throw an exception `'upper bound must be an integer'`

- if the upper bound is not between 2 and 20, an exception is thrown:
  - upper bound > 20: `'Upper bound too big'`
  - upper bound < 2: `'Upper bound too small'`

### **methods**

#### **roll**

- rolls the dice
- when rolled, the dot count become a random number between 1 and upper bound
- returns nothing

#### **toString**

- returns dot count as a string. E.g: `'4'`
- if the dice has not been rolled yet, returns `'Not rolled yet'`

### **Getter**

#### **dots**

- returns the number of dots.

#### **minimumValue**

- returns the minimum number of dots of a dice. It should be 2.

#### **maximumValue**

-returns the upper bound of a dice.
