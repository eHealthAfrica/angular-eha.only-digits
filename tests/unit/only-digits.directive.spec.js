'use strict';

describe('eha.only-digits.directive', function() {

  beforeEach(module('eha.only-digits.directive'));

  var $compile = null;
  var $scope = null;

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $scope = _$rootScope_;
  }));

  function compile(html) {
    var element = $compile(html)($scope);
    $scope.$digest();
    return element;
  }

  it('strips non-digits from the ng-model value', function() {
    var formElement = compile("<form name='theForm'><input name='theField' ng-model='foo' only-digits></form>");
    var inputElement = formElement.find('input');
    var inputModel = $scope.theForm.theField;

    inputModel.$setViewValue('123abc');
    expect(inputElement.val()).toEqual('123');
  });

  it('converts strings to numbers', function() {
    compile("<form name='theForm'><input name='theField' ng-model='foo' only-digits convert-to-number='true'></form>");
    var inputModel = $scope.theForm.theField;

    inputModel.$setViewValue('123abc');
    expect(inputModel.$modelValue).toEqual(123);
  });
});
