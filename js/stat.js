'use strict';

var PLAYER_NAME = 'Вы';
var PLAYER_BAR_COLOR = 'rgba(255, 0, 0, 1)';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var OFFSET = 12;
var SHADOW_GAP = 10;
var FONT_GAP = 20;
var FONT_COLOR = '#000000';
var HIST_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var HIST_BASELINE = CLOUD_Y + CLOUD_HEIGHT - (2 * OFFSET);

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + OFFSET, y + CLOUD_HEIGHT / 2);
  ctx.lineTo(x, y + CLOUD_HEIGHT);
  ctx.lineTo(x + CLOUD_WIDTH / 2, y + CLOUD_HEIGHT - OFFSET);
  ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT);
  ctx.lineTo(x + CLOUD_WIDTH - OFFSET, y + CLOUD_HEIGHT / 2);
  ctx.lineTo(x + CLOUD_WIDTH, y);
  ctx.lineTo(x + CLOUD_WIDTH / 2, y + OFFSET);
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.closePath();
  ctx.fill();
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.fillStyle = FONT_COLOR;
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + (2 * OFFSET), CLOUD_Y + (2 * OFFSET));
  ctx.fillText('Список результатов:', CLOUD_X + (2 * OFFSET), CLOUD_Y + (2 * OFFSET) + FONT_GAP);

  var maxTime = Math.max.apply(null, times);
  var playerIndex = names.indexOf(PLAYER_NAME);

  for (var i = 0; i < names.length; i++) {
    var barHeight = (HIST_HEIGHT * times[i]) / maxTime;

    ctx.fillStyle = FONT_COLOR;
    ctx.fillText(names[i], CLOUD_X + (2 * OFFSET) + i * (BAR_GAP + BAR_WIDTH), HIST_BASELINE);
    ctx.fillText(parseInt(times[i], 10), CLOUD_X + (2 * OFFSET) + i * (BAR_GAP + BAR_WIDTH), HIST_BASELINE - barHeight - 1.5 * FONT_GAP);

    ctx.fillStyle = (i === playerIndex) ? PLAYER_BAR_COLOR : 'rgba(0, 0, 255,' + Math.random() + ')';
    ctx.fillRect(CLOUD_X + (2 * OFFSET) + i * (BAR_GAP + BAR_WIDTH), HIST_BASELINE - FONT_GAP - barHeight, BAR_WIDTH, barHeight);
  }
};
