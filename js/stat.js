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

window.renderStatistics = function (ctx, names, times) {
 renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
 renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

 ctx.fillStyle = '#000'
 ctx.font = '16px, PT Mono';
 ctx.textBaseline = 'hanging';
 ctx.fillText('Ура, вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
 ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP * 3);

 var maxTime = getMaxElement(times);

 for (var i = 0; i < names.length; i++) {
    ctx.fillText (names[i], CLOUD_X + GAP_LEFT + (WIDTH_COLUMN + GAP_COLUMN) * i, CLOUD_Y + (CLOUD_HIEGHT - GAP_DOWN));
    ctx.fillRect (CLOUD_X + GAP_LEFT + (WIDTH_COLUMN + GAP_COLUMN) * i, CLOUD_Y + GAP * 2 + GAP_DOWN, WIDTH_COLUMN, (HEIGHT_COLUMN * times[i]) / maxTime);
  };
  
if (names[i] == 'Вы') {
      ctx.fillStyle = rgba(255, 0, 0, 1);
    }

};