var CLOUD_WIDTH = 420;
var CLOUD_HIEGHT = 270;
var CLOUD_X = 100; // координаты
var CLOUD_Y = 10;
var GAP = 10;
var HEIGHT_COLUMN = 150;
var WIDTH_COLUMN = 40;
var QUANTITY_COLUMN = 4;
var GAP_COLUMN = 50;
var GAP_LEFT = (CLOUD_WIDTH - WIDTH_COLUMN * QUANTITY_COLUMN - GAP_COLUMN*(QUANTITY_COLUMN-1))/2;
var GAP_DOWN = (CLOUD_HIEGHT - HEIGHT_COLUMN)/3;

var renderCloud = function (ctx, x, y, color){
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HIEGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

    for (var i = 1; i < arr.length; i++) {

      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    
    return maxElement;
};

var randomOne = function () {
  return Math.floor(Math.random() * 100 + 1);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px, PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура, вы победили!', CLOUD_X + GAP * 6, CLOUD_Y);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 6, CLOUD_Y + GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    else {
      ctx.fillStyle = 'hsl(210, '+ randomOne() +'%, 50%)';
    }
  
    ctx.fillText (names[i], CLOUD_X + GAP_LEFT + (WIDTH_COLUMN + GAP_COLUMN) * i, CLOUD_Y + (CLOUD_HIEGHT - GAP_DOWN));
    ctx.fillRect (CLOUD_X + GAP_LEFT + (WIDTH_COLUMN + GAP_COLUMN) * i, CLOUD_Y + (CLOUD_HIEGHT - GAP_DOWN - GAP_DOWN/2), WIDTH_COLUMN, ( - HEIGHT_COLUMN * times[i]) / maxTime);
    ctx.fillText (Math.round(times[i]), CLOUD_X + GAP_LEFT + (WIDTH_COLUMN + GAP_COLUMN) * i, CLOUD_Y + (CLOUD_HIEGHT - GAP_DOWN*2) - (HEIGHT_COLUMN * times[i]) / maxTime);
  };
};