const bottle = new Bottle();

bottle.service('FFmpegService', function() {

});
bottle.service('Hops', Hops);
bottle.service('Water', Water);
bottle.factory('Beer', function(container) {
  var barley = container.Barley;
  var hops = container.Hops;
  var water = container.Water;

  barley.halved();
  hops.doubled();
  water.spring();
  return new Beer(barley, hops, water);
});