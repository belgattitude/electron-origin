import React from 'react';
import ExampleComponent from '../components/ExampleComponent';
import List from '../components/List';
import Form from '../components/Form';
import DropZone from '../components/DropZone';
import { hot } from 'react-hot-loader'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {name: 'Medium'};
  }
  handleChange(e) {
    this.setState({name: e.target.value});
  }
  render() {
    const ffmpegPath = require('electron').remote.getGlobal('ffmpegpath');
    console.log('ffmpegPath', ffmpegPath);
    return (
      <div style={{textAlign: 'center'}}>
        <h3>Welcomes</h3>
        <p>Hello {this.state.name}</p>
        <input onChange={this.handleChange} defaultValue={this.state.name}/>
        <ExampleComponent />
        <List />
        <Form />
        <DropZone />
      </div>
    );
  }
}

export default hot(module)(App);