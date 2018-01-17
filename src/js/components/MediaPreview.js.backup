import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import { connect } from "react-redux";
import { addMedia } from "../actions/mediasAction";


const mapDispatchToProps = dispatch => {
  return {
    addMedia: media => dispatch(addMedia(media))
  };
};

const mapStateToProps = state => {
  return { medias: state.medias };
};



class ConnectedMediaPreview extends Component {

  render() {
    return (
      <div>
          {this.props.medias.map(media => (
            <video controls width="200" key={media.id}>
              <source src={URL.createObjectURL(media.file)} type={media.type} />
            </video>
          ))}
      </div>
    );
  }
}

const MediaPreview = connect(mapStateToProps, mapDispatchToProps)(ConnectedMediaPreview);

export default MediaPreview;