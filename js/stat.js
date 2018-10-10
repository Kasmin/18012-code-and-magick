'use strict';

var WIDTH_CANVAS = 700;
var WIDTH_CLOUD = 420;
var HEIGHT_CLOUD = 270;
var WIDTH_COLUMN = 40;
var HEIGHT_COLUMN = 150;
var PADDING_COLUMN = 50;
var START_X = WIDTH_CANVAS / 2 - WIDTH_CLOUD / 2;
var START_Y = 0;

var drawColumn = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var findMax = function (arr) {
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect((START_X + 10), (START_Y + 10), WIDTH_CLOUD, HEIGHT_CLOUD);
  ctx.fillStyle = '#fff';
  ctx.fillRect(START_X, START_Y, WIDTH_CLOUD, HEIGHT_CLOUD);
  ctx.fillStyle = '#000';
  ctx.textStyle = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили', (START_X + 20), START_Y);

  var paddingColumn = 20;
  var maxColumn = findMax(times);
  for (var i = 0; i < times.length; i++) {
    var color = 'rgba(255, 255, 0, ' + Math.random() + ')';
    if (names[i] === 'Вы') {
      color = 'rgba(255, 0, 0, 1)';
    }
    var heightColumn = HEIGHT_COLUMN * times[i] / maxColumn;
    var heightColumnToDraw = HEIGHT_CLOUD - heightColumn - 30;
    drawColumn(ctx, (START_X + paddingColumn), Math.floor(heightColumnToDraw), WIDTH_COLUMN, Math.floor(heightColumn), color);
    ctx.fillStyle = '#000';
    ctx.textStyle = '16px PT Mono';
    ctx.fillText(names[i], (START_X + paddingColumn), (HEIGHT_CLOUD - 30));
    paddingColumn = paddingColumn + PADDING_COLUMN + WIDTH_COLUMN;
  }
};
