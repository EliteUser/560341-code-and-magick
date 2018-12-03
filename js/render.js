'use strict';

(function () {


  /* Отрисовка похожих волшебников */

  var wizardSetup = document.querySelector('.setup');
  var wizardsData = window.data.generateWizardsData();

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

  renderSimilarWizards(wizardsData);


})();
