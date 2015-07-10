# angular-eha.only-digits

[![Build Status](https://travis-ci.org/eHealthAfrica/angular-eha.only-digits.svg?branch=master)](https://travis-ci.org/eHealthAfrica/angular-eha.only-digits)

Provides a Angular directive for input fields to ensure that only digits are accepted. Optionally converts
the input to an integer.

## Installation

Install with npm:

`npm install --save angular-eha.only-digits`

Or alternatively, with Bower:

`bower install --save angular-eha.only-digits`

## Usage

Add `eha.only-digits` to your app's module dependencies:

```javascript
angular.module('app', [
  'eha.only-digits'
]);
```

Use like this:

```html
<input type="text" only-digits>
<input type="text" only-digits convert-to-number="true">
```

The input field has to be of type `text`, otherwise the browser will send undefined as value
when there is invalid input and we cannot hook into ngModel.$parsers to remove unwanted chars.

Optionally `convert-to-number="true"` can be set to convert the the string input value to a
number before its set on the model.

## License

Apache 2.0, see [LICENSE](/LICENSE)

## Author

© 2015 [Till Reitemeyer](http://github.com/skoni) & [Robin Mehner](http://coding-robin.de) for [eHealth Systems Africa](http://ehealthafrica.org)
