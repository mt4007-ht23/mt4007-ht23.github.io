# Lecture 11 (Functional Programming)

### Resources

- [R4DS](https://r4ds.hadley.nz/) chapter 26
- [purrr (R)](https://purrr.tidyverse.org/)
- [Functional programming in
  Python](https://realpython.com/python-functional-programming/)

*You can find examples and motivation in the resources.*

## Summary

In this lecture, we'll explore the key principles and concepts of functional
programming and its relevance in modern software development. 

## Functional Programming

Functional programming (FP) is a programming paradigm that treats computation as
the evaluation of mathematical functions and avoids changing-state and mutable
data. It is based on the principles of mathematical functions, emphasizing
immutability, purity, and the use of higher-order functions. 

Functional programming is relevant because it fosters the creation of
predictable, scalable, and modular code. By emphasizing pure functions and
immutability, it enhances code predictability, making it easier to reason about
and debug. The principles of functional programming support scalability and
parallel execution, crucial for handling data-intensive applications.
Additionally, higher-order functions and functional composition enable the
development of modular and reusable code, improving maintainability. The concise
and expressive nature of functional programming helps reduce the likelihood of
bugs and enhances code readability. Overall, functional programming provides a
set of principles that contribute to the resilience, scalability, and
maintainability of software, addressing modern challenges in software
development.

We have already, unknowingly, used the functional programming paradigm during
the course. However, it will be beneficial to go through some definitions in FP.

### Immutability

In programming, immutability refers to the concept that an object, once created,
cannot be modified. Any operation on the object doesn't change its state;
instead, it produces a new object with the updated value. Immutable data
structures are often favored in functional programming because they simplify
reasoning about code and can prevent certain types of bugs related to mutable
state.

### Pure Functions

A pure function is a function whose output is solely determined by its input
parameters, and it has no side effects. This means that for the same input, a
pure function will always produce the same output, and it doesn't modify any
external state. Pure functions are a cornerstone of functional programming, as
they contribute to code predictability, testability, and can facilitate
reasoning about program behavior.

### Higher-Order Functions

In functional programming, functions are treated as resources or variables, which
means they can be passed as arguments to other functions or returned as values
from other functions. Higher-order functions are functions that either take one
or more functions as arguments or return a function as their result. This allows
for powerful abstractions and concise, expressive code


## Example

To make the definitions more concrete, lets look at some examples.

### Pure vs Impure Functions

:::code-group
```Python 
# Impure function (has side effects)
total = 0
def add_to_total(value):
    global total
    total += value

# Pure function
def add(a, b):
    return a + b
```

```R 
# Impure function (has side effects)
total <- 0
add_to_total <- function(value) {
  total <<- total + value
}

# Pure function
add <- function(a, b) {
  return(a + b)
}
```
:::

### Higher-Order Functions

:::code-group
There are some built in higher-order functions such as `map` and `filter`, that
takes functions as arguments.

```Python 
# Higher-order function: Map
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x * x, numbers))

# Higher-order function: Filter
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
```

```R 
library(purrr)
# Higher-order function: Map
numbers <- c(1, 2, 3, 4, 5)
squared <- map(numbers, ~ .x * .x)

# Higher-order function: Filter
even_numbers <- keep(numbers, ~ .x %% 2 == 0)
```
:::

### Immutability

Letting the variables be immutable make it easier to debug when something is
wrong. 

:::code-group
```Python 
# Immutable approach
immutable_list = [1, 2, 3]
new_list = [*immutable_list, 4]
```

```R 
# Immutable approach
immutable_vector <- c(1, 2, 3)
new_vector <- c(immutable_vector, 4)
```
:::

### Functional Composition

The idea of composing functions, is that new functions that consist of other
functions should be composed together to create a new functions. This makes the
code easier to read and debug.

:::code-group
```Python 
# Composition
def add_one(x):
    return x + 1

def square(x):
    return x * x

square_and_add_one = lambda x: add_one(square(x))

print(square_and_add_one(3))  # Output: 10
```

```R 
# Composition
add_one <- function(x) x + 1
square <- function(x) x * x

square_and_add_one <- compose(add_one, square)

print(square_and_add_one(3))  # Output: 10
```
:::

### Map

Using `map` is a key in functional programming. It allows for itteration of a
function on a list or array.

:::code-group
```Python 
# Using map and reduce
numbers = [1, 2, 3, 4, 5]

squared_and_sum = sum(map(lambda x: x * x, numbers))
print(squared_and_sum)  # Output: 55
```

```R 
# Using purrr's map and reduce
library(purrr)
squared_and_sum <- numbers %>% map_dbl(~ .x * .x) %>% reduce(`+`)
print(squared_and_sum)  # Output: 55

```
:::
