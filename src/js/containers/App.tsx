import React from 'react';
import ExampleComponent from '../components/ExampleComponent';
//import List from '../components/List';
import Form from '../components/Form';
import DropZone from '../components/DropZone';
import { hot } from 'react-hot-loader'
import Ffmpeg  from "../lib/Ffmpeg";
import Ffprobe  from "../lib/Ffprobe";

class App extends React.Component<any, {}> {

  ffmpeg: Ffmpeg;
  ffprobe: Ffprobe;
  state: any;
  infos: any;

  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {name: 'Medium'};
    this.ffmpeg = this.getFfMpeg();
    this.ffprobe = this.getFfProbe();
    this.infos = this.ffprobe.getInfo2('/home/sebastien/Videos/MVI_0291.m4v');
    console.log('this.infos', this.infos);

  }

  getFfMpeg(): Ffmpeg {
    const ffbinariesConfig = require('electron').remote.getGlobal('ffbinariesConfig');
    return new Ffmpeg(ffbinariesConfig.ffmpeg);
  }

  getFfProbe(): Ffprobe {
    const ffbinariesConfig = require('electron').remote.getGlobal('ffbinariesConfig');
    return new Ffprobe(ffbinariesConfig.ffprobe);
  }


  handleChange(e: any) {
    this.setState({name: e.target.value});
  }
  render() {
    const ffmpegPath = this.ffmpeg.getFFMpegPath();
    const ffprobePath = this.ffprobe.getFFProbePath();

    /*
    ffmpeg.getVersion().then((stdout, ffmpegVersion) => {
      this.setState({
        ffmpegVersion: stdout
      })
    });*/
    console.log('ffprobePath', ffprobePath);
    console.log('ffmpegPath', ffmpegPath);
    return (
      <div style={{textAlign: 'center'}}>
        <h3>Welcomes {ffmpegPath}</h3>

        <p>Hello {this.state.name}</p>
        <input onChange={this.handleChange} defaultValue={this.state.name}/>
        <ExampleComponent />
        <Form />
        <DropZone />
      </div>
    );
  }
}

export default hot(module)(App);