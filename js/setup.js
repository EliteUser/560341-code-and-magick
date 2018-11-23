'use strict';

/* Данные */

var WIZARDS_QUANTITY = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

/* Генерация данных о похожих волшебниках */

var getRandomArrayElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var generateWizardFullName = function (name, surname) {
  return name + ' ' + surname;
};

var createWizard = function (name, coatColor, eyesColor) {
  return {name: name, coatColor: coatColor, eyesColor: eyesColor};
};

var generateWizardsData = function () {
  var data = [];
  for (var i = 0; i < WIZARDS_QUANTITY; i++) {
    var wizardName = generateWizardFullName(getRandomArrayElement(WIZARD_NAMES), getRandomArrayElement(WIZARS_SURNAMES));
    var wizardCoatColor = getRandomArrayElement(WIZARD_COAT_COLORS);
    var wizardEyesColor = getRandomArrayElement(WIZARD_EYES_COLORS);
    data.push(createWizard(wizardName, wizardCoatColor, wizardEyesColor));
  }
  return data;
};

/* Отрисовка похожих волшебников */

var wizardSetup = document.querySelector('.setup');
wizardSetup.classList.remove('hidden');

var renderWizard = function (wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderSimilarWizards = function (wizards) {
  var fragment = document.createDocumentFragment();
  var similarListElement = wizardSetup.querySelector('.setup-similar-list');

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);
  wizardSetup.querySelector('.setup-similar').classList.remove('hidden');
};

/* Отрисовка сгенерированных данных */

var wizardsData = generateWizardsData();
renderSimilarWizards(wizardsData);
