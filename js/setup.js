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

  var formSubmitHandler = function (evt) {
    window.backend.save(new FormData(form), formSubmitSuccessHandler, formSubmitErrorHandler);
    evt.preventDefault();
  };

  form.addEventListener('submit', formSubmitHandler);


})();
