'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

/* Данные */

var WIZARDS_QUANTITY = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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

/* Открытие / закрытие окна персонажа */

var wizardSetupOpen = document.querySelector('.setup-open');
var wizardSetupClose = wizardSetup.querySelector('.setup-close');

var openSetup = function () {
  wizardSetup.classList.remove('hidden');

  wizardSetupClose.addEventListener('click', wizardSetupCloseClickHandler);
  wizardSetupClose.addEventListener('keydown', wizardSetupCloseEnterHandler);
  document.addEventListener('keydown', wizardSetupEscHandler);

  wizardNameInput.addEventListener('focus', wizardNameInputFocusHandler);
};

var closeSetup = function () {
  wizardSetup.classList.add('hidden');

  wizardSetupClose.removeEventListener('click', wizardSetupCloseClickHandler);
  wizardSetupClose.removeEventListener('keydown', wizardSetupCloseEnterHandler);
  document.removeEventListener('keydown', wizardSetupEscHandler);

  wizardNameInput.removeEventListener('focus', wizardNameInputFocusHandler);
};

var wizardSetupEscHandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeSetup();
  }
};

var wizardSetupOpenClickHandler = function () {
  openSetup();
};

var wizardSetupOpenEnterHandler = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openSetup();
  }
};

var wizardSetupCloseClickHandler = function () {
  closeSetup();
};

var wizardSetupCloseEnterHandler = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closeSetup();
  }
};

wizardSetupOpen.addEventListener('click', wizardSetupOpenClickHandler);
wizardSetupOpen.addEventListener('keydown', wizardSetupOpenEnterHandler);

/* Фокус на поле ввода имени персонажа */

var wizardNameInput = wizardSetup.querySelector('.setup-user-name');

var wizardNameInputFocusHandler = function () {
  document.removeEventListener('keydown', wizardSetupEscHandler);
  wizardNameInput.addEventListener('blur', wizardNameInputBlurHandler);
};

var wizardNameInputBlurHandler = function () {
  document.addEventListener('keydown', wizardSetupEscHandler);
  wizardNameInput.removeEventListener('blur', wizardNameInputBlurHandler);
};

/* Изменение цвета мантии */

var wizardSetupAppearance = wizardSetup.querySelector('.setup-player');

var wizardCoat = wizardSetupAppearance.querySelector('.wizard-coat');
var wizardEyes = wizardSetupAppearance.querySelector('.wizard-eyes');
var wizardFireball = wizardSetupAppearance.querySelector('.setup-fireball-wrap');

var wizardCoatClickHandler = function () {
  var wizardCoatInput = wizardSetupAppearance.querySelector('input[name=coat-color]');
  var coatColor = getRandomArrayElement(WIZARD_COAT_COLORS);

  wizardCoatInput.value = coatColor;
  wizardCoat.style = 'fill: ' + coatColor;
};

/* Изменение цвета глаз */

var wizardEyesClickHandler = function () {
  var wizardEyesInput = wizardSetupAppearance.querySelector('input[name=eyes-color]');
  var eyesColor = getRandomArrayElement(WIZARD_EYES_COLORS);

  wizardEyesInput.value = eyesColor;
  wizardEyes.style = 'fill: ' + eyesColor;
};

/* Изменение цвета фаерболла */

var wizardFireballClickHandler = function () {
  var wizardFireballInput = wizardFireball.querySelector('input[name=fireball-color]');
  var fireballColor = getRandomArrayElement(WIZARD_FIREBALL_COLORS);

  wizardFireballInput.value = fireballColor;
  wizardFireball.style = 'background-color: ' + fireballColor;
};

wizardCoat.addEventListener('click', wizardCoatClickHandler);
wizardEyes.addEventListener('click', wizardEyesClickHandler);
wizardFireball.addEventListener('click', wizardFireballClickHandler);
// может стоит эти обработчики перенести в тело openSetup() и затем удалять их в теле closeSetup()?
