'use strict';

(function () {


  var CELL_HOVER_COLOR = 'yellow';

  var setupShop = document.querySelector('.setup-artifacts-shop');
  var artifactsElement = document.querySelector('.setup-artifacts');

  var draggedItem = null;

  var setupShopDragStartHandler = function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
  };

  var artifactsElementDragOverHandler = function (evt) {
    evt.preventDefault();
    evt.stopPropagation();
    return false;
  };

  var artifactsElementDropHandler = function (evt) {
    evt.target.style.backgroundColor = '';
    evt.target.appendChild(draggedItem);
  };

  var artifactsElementDragEnterHandler = function (evt) {
    evt.target.style.backgroundColor = CELL_HOVER_COLOR;
    evt.preventDefault();
    evt.stopPropagation();
  };

  var artifactsElementDragLeaveHandler = function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
    evt.stopPropagation();
  };

  setupShop.addEventListener('dragstart', setupShopDragStartHandler);

  artifactsElement.addEventListener('dragover', artifactsElementDragOverHandler);
  artifactsElement.addEventListener('drop', artifactsElementDropHandler);
  artifactsElement.addEventListener('dragenter', artifactsElementDragEnterHandler);
  artifactsElement.addEventListener('dragleave', artifactsElementDragLeaveHandler);


})();
