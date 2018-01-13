import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import { connect } from "react-redux";
import { addMedia } from "../actions/mediasAction";
import MainPlayer from './MainPlayer';

const mapDispatchToProps = dispatch => {
  return {
    addMedia: media => dispatch(addMedia(media))
  };
};

const mapStateToProps = state => {
  return { medias: state.medias };
};



class ConnectedDropZone extends Component {

  constructor() {
    super();
    this.onDrop = this.onDrop.bind(this);
  }


  onDrop(acceptedFiles, rejectedFiles)  {

    const file = acceptedFiles[0];

    console.log(file);
    //console.log(rejectedFiles);
    this.props.addMedia({
      title: acceptedFiles[0].name,
      id: acceptedFiles[0].name,
      type: acceptedFiles[0].type,
      file: acceptedFiles[0]
    });
    /*
    const fileBlob = acceptedFiles[0];
    const newFile = {};
    _fileProperties.forEach(key => {
      newFile[key] = fileBlob[key];
    });

    return newFile;
*/
  }

  render() {
    const DropContainer = styled.div`
      border: 1px solid black;
      height: 100%;
    `;

    //const videoFile = 'file:///home/sebastien/Videos/MVI_0291.m4v';
    let videoFile = '';
    if (Array.isArray(this.props.files)) {
      console.log('COOOOL', this.props.files[0]);
      videoFile = 'file://' + this.props.files[0].path;
    }
    videoFile = 'file://' + this.props.file;
    console.log('props', this.props);
    return (
      <div>
        <div className="container" data-tid="container">
          <h2>Converter</h2>
        </div>
        <Dropzone onDropAccepted={this.onDrop} multiple={false} disablePreview={true}>
          <DropContainer>Drop here</DropContainer>
        </Dropzone>
        <div>Hello</div>
        <MainPlayer/>
      </div>
    );
  }
}

const DropZone = connect(mapStateToProps, mapDispatchToProps)(ConnectedDropZone);

export default DropZone;