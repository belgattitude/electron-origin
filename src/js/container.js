import Bottle from "bottlejs";

const bottle = new Bottle();

bottle.service('FFmpegService', function() {

  //const ffmpegPath = require('electron').remote.getGlobal('ffmpegpath');
  //return new Ffmpeg(ffmpegPath);
  //return ffmpegPath;


});

//let container = bottle;
//export default container;
/*
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
*/