'use strict';

(function () {


  /* Данные */

  var WIZARDS_QUANTITY = 4;
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  /* Генерация данных о похожих волшебниках */

  var generateWizardFullName = function (name, surname) {
    return name + ' ' + surname;
  };

  var createWizard = function (name, coatColor, eyesColor) {
    return {name: name, coatColor: coatColor, eyesColor: eyesColor};
  };

  var generateWizardsData = function () {
    var data = [];
    for (var i = 0; i < WIZARDS_QUANTITY; i++) {
      var wizardName = generateWizardFullName(window.util.getRandomArrayElement(WIZARD_NAMES), window.util.getRandomArrayElement(WIZARS_SURNAMES));
      var wizardCoatColor = window.util.getRandomArrayElement(WIZARD_COAT_COLORS);
      var wizardEyesColor = window.util.getRandomArrayElement(WIZARD_EYES_COLORS);
      data.push(createWizard(wizardName, wizardCoatColor, wizardEyesColor));
    }
    return data;
  };

  window.data = {
    generateWizardsData: generateWizardsData,
    WIZARD_COAT_COLORS: WIZARD_COAT_COLORS,
    WIZARD_EYES_COLORS: WIZARD_EYES_COLORS,
    WIZARD_FIREBALL_COLORS: WIZARD_FIREBALL_COLORS,
  };


})();
