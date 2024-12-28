# JavaScript NaN Propagation Bug

This repository demonstrates a common issue in JavaScript: the propagation of NaN (Not a Number) through calculations.  While NaN is useful for representing undefined numerical results, it can lead to unexpected behavior if not handled carefully.

The `bug.js` file contains a simple example showing how NaN can silently propagate, potentially masking the source of the error. The `bugSolution.js` file offers a potential solution using explicit NaN checks.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` in a JavaScript environment.
3. Observe the unexpected result when passing NaN to the `bar` function.

## Solution

The provided solution in `bugSolution.js` involves adding explicit checks for NaN before performing calculations, to prevent silent propagation and provide a more informative error handling mechanism. 