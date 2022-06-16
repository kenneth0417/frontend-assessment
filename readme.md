## Exercise 2

`Live Preview`: https://exercise2-app.netlify.app/

The technologies used in building the Exercise 1 are the following:
- ReactJS
- Material UI (CSS Framework)

Features:
- Fully responsive
- Imported and read json file to map through objects

### Bonus Points: 
#### Explain why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana.
* If we're going to evaluate the JavaScript expression above, it will return a result of 'NaN' or 'Not A Number' when the expression `('ba' + (+'a'))` is evaluated at some point of the concatenation. The expression coerces or attempts to convert a String to a Number which is not possible and lastly it transforms all the character to lower case which results to `banana`. 
