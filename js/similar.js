'use strict';

(function () {


  var wizardCoatInput = document.querySelector('input[name=coat-color]');
  var wizardEyesInput = document.querySelector('input[name=eyes-color]');

  var getRank = function (wizard) {
    var userCoatColor = wizardCoatInput.value;
    var userEyesColor = wizardEyesInput.value;
    var rank = 0;

    if (wizard.colorCoat === userCoatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === userEyesColor) {
      rank += 1;
    }

    return rank;
  };

  var updateWizards = function () {
    var wizards = window.data.wizardsData;
    window.render.renderSimilarWizards(wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
      }
      return rankDiff;
    }));
  };

  window.similar = {
    updateWizards: window.debounce(updateWizards),
  };


})();
