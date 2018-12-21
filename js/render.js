'use strict';

(function () {

  var WIZARDS_QUANTITY = 4;

  /* Отрисовка похожих волшебников */

  var wizardSetup = document.querySelector('.setup');

  var renderWizard = function (wizard) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var renderSimilarWizards = function (wizards) {
    window.data.wizardsData = wizards;
    var fragment = document.createDocumentFragment();
    var similarListElement = wizardSetup.querySelector('.setup-similar-list');
    similarListElement.innerHTML = '';

    for (var i = 0; i < WIZARDS_QUANTITY; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    similarListElement.appendChild(fragment);
    wizardSetup.querySelector('.setup-similar').classList.remove('hidden');
  };

  var renderError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load()
    .then(renderSimilarWizards)
    .catch(renderError);

  window.render = {
    renderError: renderError,
    renderSimilarWizards: renderSimilarWizards,
  };

})();
