'use strict';

(function () {


  var DOWNLOAD_URL = 'https://js.dump.academy/code-and-magick/data';
  var UPLOAD_URL = 'https://js.dump.academy/code-and-magick';
  var XHR_TIMEOUT = 10000;
  var XHR_STATUS_OK = 200;

  var load = function (onLoad, onError) {
    var xhrLoadHandler = function () {
      if (xhr.status === XHR_STATUS_OK) {
        onLoad(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText + '\n Не удалось загрузить данные');
      }
    };

    var xhrErrorHandler = function () {
      onError('Произошла ошибка соединения');
    };

    var xhrTimeoutHandler = function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    };

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = XHR_TIMEOUT;

    xhr.addEventListener('load', xhrLoadHandler);
    xhr.addEventListener('error', xhrErrorHandler);
    xhr.addEventListener('timeout', xhrTimeoutHandler);

    xhr.open('GET', DOWNLOAD_URL);
    xhr.send();
  };

  var save = function (data, onLoad, onError) {
    var xhrLoadHandler = function () {
      if (xhr.status === XHR_STATUS_OK) {
        onLoad(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText + '\n Не удалось отправить данные');
      }
    };

    var xhrErrorHandler = function () {
      onError('Произошла ошибка соединения');
    };

    var xhrTimeoutHandler = function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    };

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = XHR_TIMEOUT;

    xhr.addEventListener('load', xhrLoadHandler);
    xhr.addEventListener('error', xhrErrorHandler);
    xhr.addEventListener('timeout', xhrTimeoutHandler);

    xhr.open('POST', UPLOAD_URL);
    xhr.send(data);
  };


  window.backend = {
    load: load,
    save: save,
  };


})();
