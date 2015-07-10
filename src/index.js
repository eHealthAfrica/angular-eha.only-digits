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
