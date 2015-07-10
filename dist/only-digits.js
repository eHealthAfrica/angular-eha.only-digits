'use strict';
(function() {

  var ngModule = angular.module('eha.only-digits', [
    'eha.only-digits.directive'
  ]);

  // Check for and export to commonjs environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ngModule;
  }

}());

'use strict';
(function() {

  // Directive to restrict input element input to digits.
  //
  // The input field has to be of type=text, otherwise the browser
  // will send undefined as value when there is invalid input and
  // we cannot hook into ngModel.$parsers to remove unwanted chars.
  // There might be a better way to handle this and have type=number.
  //
  // Optionally convert-to-number="true" can be set to convert the
  // the string input value to a number before its set on the model.
  var ngModule = angular.module('eha.only-digits.directive', []);

  ngModule.directive('onlyDigits', function() {
    return {
      restrict: 'A',
      require: '?ngModel',
      scope: {
        'convertToNumber': '@'
      },

      link: function (scope, element, attrs, ngModel) {
        if (!ngModel) {
          return;
        }

        var convertToNumber = false;
        attrs.$observe('convertToNumber', function(val) {
          convertToNumber = val === 'true';
        });

        ngModel.$parsers.unshift(function (val) {
          if (!val) {
            return val;
          }
          var digits = val.replace(/\D/g, '');
          ngModel.$viewValue = digits;
          ngModel.$render();

          if (convertToNumber && !(typeof val === 'number')) {
            return parseInt(digits, 10);
          }
          return digits;
        });
      }
    };
  });

  // Check for and export to commonjs environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ngModule;
  }
}());
