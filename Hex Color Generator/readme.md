# Random Hex Color Generator

This project will generate random Hex Colors and display the color on the body.

## Problem

We can easily generate RGB colors by generating random values using Math library and feeding it accordingly in the code.
But to generate Hex colors we need to take a step further. What is that?

## Learnings

We can generate random Hexadecimal values by using the radix option in 'toString()' method.

Radix - Ranges between 2 and 36. The values above 10 will get converted to alphabets.

Use substring(start, end) to truncate the values and use them as your hex value.

## Use case:

We can modify this and make a color pallet generator. We can optimize the color combinations with some conditions to come up with proper color pallets.

## My approach:

- I learnt about the toString() method and tried to generate random numbers between 0 amd 15 using Math.random().
- I used a for loop to generate 6 random hexadecimal values and stored it in a variable.
- The stored random hex value is used to generate radnom colors and using DOM it was displayed as the body's background color.

## Mistakes and Corrections

- Instead of using a for loop I learnt about substring() to truncate the values generated using Math.random() and used it as the radnom hex value.
- This made the code clean and optimized for performance.
