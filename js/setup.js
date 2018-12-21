'use strict';

(function () {


  /* Открытие / закрытие окна персонажа */

  var wizardSetup = document.querySelector('.setup');
  var wizardSetupOpen = document.querySelector('.setup-open');
  var wizardSetupClose = wizardSetup.querySelector('.setup-close');

  var openSetup = function () {
    wizardSetup.classList.remove('hidden');

    wizardSetupClose.addEventListener('click', wizardSetupCloseClickHandler);
    wizardSetupClose.addEventListener('keydown', wizardSetupCloseEnterHandler);
    document.addEventListener('keydown', wizardSetupEscHandler);
  };

  var closeSetup = function () {
    wizardSetup.style = '';
    wizardSetup.classList.add('hidden');
    wizardSetupClose.removeEventListener('click', wizardSetupCloseClickHandler);
    wizardSetupClose.removeEventListener('keydown', wizardSetupCloseEnterHandler);
    document.removeEventListener('keydown', wizardSetupEscHandler);
  };

  var wizardSetupOpenClickHandler = function () {
    openSetup();
  };

  var wizardSetupCloseClickHandler = function () {
    closeSetup();
  };

  var wizardSetupEscHandler = function (evt) {
    window.util.isEscEvent(evt, closeSetup);
  };

  var wizardSetupOpenEnterHandler = function (evt) {
    window.util.isEnterEvent(evt, openSetup);
  };

  var wizardSetupCloseEnterHandler = function (evt) {
    window.util.isEnterEvent(evt, closeSetup);
  };

  wizardSetupOpen.addEventListener('click', wizardSetupOpenClickHandler);
  wizardSetupOpen.addEventListener('keydown', wizardSetupOpenEnterHandler);

  /* Фокус на поле ввода имени персонажа */

  var wizardNameInput = wizardSetup.querySelector('.setup-user-name');

  var cancelEscEvent = function (evt) {
    if (evt.keyCode === window.util.ESC_KEYCODE) {
      evt.stopPropagation();
    }
  };

  wizardNameInput.addEventListener('keydown', cancelEscEvent);

  /* Отправка данных формы на сервер */

  var form = wizardSetup.querySelector('.setup-wizard-form');

  var formSubmitSuccessHandler = function () {
    wizardSetup.classList.add('hidden');
  };

  var formSubmitErrorHandler = function (errorMessage) {
    window.render.renderError(errorMessage);
  };

  var changeWizardAppearance = function () {
    var wizardElement = document.querySelector('.setup-wizard');
    var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
    var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
    var wizardCopy = document.querySelector('svg').cloneNode(true);

    wizardCopy.querySelector('#wizard-coat').style.fill = wizardCoatElement.style.fill;
    wizardCopy.querySelector('#wizard-eyes').style.fill = wizardEyesElement.style.fill;

    var wizardBase64Right = window.svg2base64(wizardCopy);
    wizardCopy.querySelector('#wizard').setAttribute('transform', 'translate(62, 0) scale(-1, 1)');
    var wizardBase64Left = window.svg2base64(wizardCopy);

    window.restartGame(wizardBase64Right, wizardBase64Left);
  };

  var formSubmitHandler = function (evt) {
    evt.preventDefault();

    window.backend.save(new FormData(form))
      .then(formSubmitSuccessHandler)
      .then(changeWizardAppearance)
      .catch(formSubmitErrorHandler);
  };

  form.addEventListener('submit', formSubmitHandler);


})();
