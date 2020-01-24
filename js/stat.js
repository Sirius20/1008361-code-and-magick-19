var CLOUD_WIDTH = 420;
var CLOUD_HIEGHT = 270;
var CLOUD_X = 100; // координаты
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_SIZE = 16;
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

window.renderStatistics = function (ctx) {
renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

ctx.fillStyle = '#000'
ctx.font = 'TEXT_SIZE PT Mono';
ctx.textBaseline = 'hanging';
ctx.fillText('Ура, вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP * 3);

// высота: по 60 пх снизу и сверху, ширина по 55 справа и слева отступы,

ctx.fillText ('Вы', CLOUD_X + GAP_LEFT, CLOUD_Y + (CLOUD_HIEGHT - GAP_DOWN));
ctx.fillRect (CLOUD_X + GAP_LEFT, CLOUD_Y + GAP * 2 + GAP_DOWN, WIDTH_COLUMN, HEIGHT_COLUMN);

ctx.fillText ('Имя1', CLOUD_X + GAP_LEFT + WIDTH_COLUMN + GAP_COLUMN, CLOUD_Y + (CLOUD_HIEGHT - GAP_DOWN));
ctx.fillRect (CLOUD_X + GAP_LEFT + WIDTH_COLUMN + GAP_COLUMN, CLOUD_Y + GAP * 2 + GAP_DOWN, WIDTH_COLUMN, HEIGHT_COLUMN);

ctx.fillText ('Имя2', CLOUD_X + GAP_LEFT + (WIDTH_COLUMN + GAP_COLUMN) * 2, CLOUD_Y + (CLOUD_HIEGHT - GAP_DOWN));
ctx.fillRect (CLOUD_X + GAP_LEFT + (WIDTH_COLUMN + GAP_COLUMN) * 2, CLOUD_Y + GAP * 2 + GAP_DOWN, WIDTH_COLUMN, HEIGHT_COLUMN);

ctx.fillText ('Имя3', CLOUD_X + GAP_LEFT + (WIDTH_COLUMN + GAP_COLUMN) * 3, CLOUD_Y + (CLOUD_HIEGHT - GAP_DOWN));
ctx.fillRect (CLOUD_X + GAP_LEFT + (WIDTH_COLUMN + GAP_COLUMN) * 3, CLOUD_Y + GAP * 2 + GAP_DOWN, WIDTH_COLUMN, HEIGHT_COLUMN);


};