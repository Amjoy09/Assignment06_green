1) What is the difference between var, let, and const?

Ans::
var: Declares a function-scoped or globally-scoped variable, optionally initializing it to a value.  Hoisted to the top but initialized as undefined.  Can cause bugs because it ignores block scope. Old version and not recommended nowadays.
 
let: Declares a block-scoped local variable, optionally initializing it to a value.   Hoisted but not usable before declaration (Temporal Dead Zone).
 
const: Declares a block-scoped constant, which cannot be reassigned after initialization.  Hoisted but not usable before declaration (Temporal Dead Zone).


2) What is the difference between map(), forEach(), and filter()?

Ans::
map():  Creates a new array by applying a function to each element of the original array. It does not change the original array. Always returns an array of the same length.

forEach():  Runs a function on each element, but does not return a new array. Usually used for side effects (like printing, updating values).
 
filter():  Creates a new array with elements that pass a condition. Returns a shorter or equal length array depending on matches.


3) What are arrow functions in ES6?

Ans::
Arrow functions were introduced in ES6 (ECMAScript 2015) as a shorter and cleaner way to write functions.
They use the => syntax, which looks like an arrow.  If the function body has only one expression, the result is returned automatically (no need for return). Arrow functions don’t create their own this, they use the value of this from the surrounding context (lexical this).


4) How does destructuring assignment work in ES6?

Ans::
Destructuring assignment in ES6 (ECMAScript 2015) is a powerful feature that simplifies the process of unpacking values from arrays or properties from objects into individual variables. Before destructuring, you had to access each element or property one by one. Destructuring provides a much cleaner, more readable syntax.


5) Explain template literals in ES6. How are they different from string concatenation?

Ans::
Template literals are a new way to define strings in JavaScript. Unlike regular strings that use single (') or double (") quotes, template literals use backticks (``). This seemingly small change brings two major benefits:

(i)String Interpolation: This is the most powerful feature. You can embed JavaScript expressions directly into the string using the syntax ${expression}. The expression is evaluated, and the result is inserted into the string. This is the modern, preferred alternative to string concatenation with the + operator.

 (ii)Multi-line Strings: Template literals can span multiple lines without needing special characters like \n (newline). This is extremely useful for writing blocks of text, like HTML or SQL queries, directly in your code.

 


 

 
 
 

 
 
 


 
 
 
