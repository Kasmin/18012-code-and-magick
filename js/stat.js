'use strict';

var BOX_WIDTH = 420;
var BOX_HEIGHT = 270;
var BOX_X = 100;
var BOX_Y = 10;
var OFFSET = 10;

var BAR_WIDTH = 40;
var BAR_GAP = 50;
var MAX_BAR = 150;

var textX = BOX_X + 20;
var barsX = BOX_X + 36;

var drawBox = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, BOX_WIDTH, BOX_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  drawBox(ctx, BOX_X + OFFSET, BOX_Y + OFFSET, 'rgba(0, 0, 0, 0.7)');
  drawBox(ctx, BOX_X, BOX_Y, '#ffffff');

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', textX, 40);
  ctx.fillText('Список результатов:', textX, 60);

  var maxTime = Math.max.apply(null, times);

  for (var i = 0; i < times.length; i++) {
    var barHeight = times[i] * MAX_BAR / maxTime;
    var barX = barsX + (BAR_WIDTH + BAR_GAP) * i;
    var barYOffset = MAX_BAR - barHeight;

    // Вывожу показатели над столбцами
    ctx.fillText(Math.floor(times[i]), barX, barYOffset + 88);

    // Вывожу результаты в виде столбцов
    ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsl(227, '
    + Math.floor(Math.random() * 100) + '%, 45%)';
    ctx.fillRect(barX, barYOffset + 98, BAR_WIDTH, barHeight);

    // Вывожу имена игроков
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], barX, 266);
  }
};
