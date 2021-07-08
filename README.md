# Example Assessment

This repo serves as an example of what a partial JavaScript assessment may look like.

## Instructions

1. Clone this repo
1. Create a branch called `firstName_lastName` where you use YOUR first name and last name
   1. **Note:** to do this, you can create a branch and move to it with the command `git checkout -b YOUR_BRANCH_NAME`
1. Open the `test-runner.html` file in a browser and notice the failing tests 
1. Write the needed JavaScript in the `solutions.js` file to pass all the tests
1. Add and commit for each completed problem

## Problems

1. Define a function, `sayHello`, that returns the string `hello`.

```javascript
sayHello() // 'hello'
```

1. Define a function, `returnSecondToLastChar` that returns the second to last character of a given string input. 
   A string of `improper input` should be returned if the function is invoked with no input or if the input is not a string.
   The function should return an empty string if passed an empty string as input or a one character string.
   
```javascript
returnSecondToLastChar('dog') // 'o'
returnSecondToLastChar('hello') // 'l'
returnSecondToLastChar('What a goose am I') // ' '
returnSecondToLastChar('8675309') // '0'
returnSecondToLastChar('') // ''
returnSecondToLastChar('W') // ''
returnSecondToLastChar(null) // 'improper input'
returnSecondToLastChar(123) // 'improper input'
returnSecondToLastChar(true) // 'improper input'
returnSecondToLastChar([]) // 'improper input'
```