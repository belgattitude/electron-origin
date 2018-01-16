const ffbinaries = require('ffbinaries');
const mkdirp = require('mkdirp');
const fs = require('fs');

const destination = __dirname + '/../ffbinaries';
const version = "3.4"


let platforms = [
  {'name': 'osx-64', 'path': '/darwin/x64' },
  {'name': 'linux-64', 'path': '/linux/x64' },
  {'name': 'windows-64', 'path': '/win32/x64' },
];

platforms.map((platform) => {

  let dest = destination + '/' + platform.path;

  if (!fs.existsSync(dest)) {
    mkdirp(dest, function (err) {
      if (err) {
        console.error(err)
      } else {
        ffbinaries.downloadFiles(['ffmpeg', 'ffprobe'], {
          platform: platform.name,
          quiet: false,
          destination: dest,
          version: version
        }, function () {
          console.log('Downloaded ffmpeg and ffprobe binaries for ' + platform + ' to ' + dest + '.');
        });
      }
    });
  }


})

