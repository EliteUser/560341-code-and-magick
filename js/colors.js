'use strict';

(function () {


  /* Изменение цветов персонажа */

  var wizardSetupAppearance = document.querySelector('.setup-player');

  var wizardCoat = wizardSetupAppearance.querySelector('.wizard-coat');
  var wizardEyes = wizardSetupAppearance.querySelector('.wizard-eyes');
  var wizardFireball = wizardSetupAppearance.querySelector('.setup-fireball-wrap');

  var wizardCoatInput = wizardSetupAppearance.querySelector('input[name=coat-color]');
  var wizardEyesInput = wizardSetupAppearance.querySelector('input[name=eyes-color]');
  var wizardFireballInput = wizardFireball.querySelector('input[name=fireball-color]');

  /* Изменение цвета мантии*/
  window.util.colorizeElement(wizardCoat, wizardCoatInput, window.data.WIZARD_COAT_COLORS);

  /* Изменение цвета глаз */
  window.util.colorizeElement(wizardEyes, wizardEyesInput, window.data.WIZARD_EYES_COLORS);

  /* Изменение цвета фаерболла */
  window.util.colorizeElement(wizardFireball, wizardFireballInput, window.data.WIZARD_FIREBALL_COLORS);


})();
