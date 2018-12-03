'use strict';

(function () {


  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var isEscEvent = function (evt, action) {
    if (evt.keyCode === ESC_KEYCODE) {
      action();
    }
  };

  var isEnterEvent = function (evt, action) {
    if (evt.keyCode === ENTER_KEYCODE) {
      action();
    }
  };

  var getRandomArrayElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var colorizeElement = function (element, elementInput, colors) {
    element.addEventListener('click', function () {
      var color = getRandomArrayElement(colors);
      if (element.tagName.toLowerCase() === 'div') {
        elementInput.value = color;
        element.style.backgroundColor = color;
      } else {
        elementInput.value = color;
        element.style.fill = color;
      }
    });
  };

  window.util = {
    ESC_KEYCODE: ESC_KEYCODE,
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
    getRandomArrayElement: getRandomArrayElement,
    colorizeElement: colorizeElement,
  };


})();
