import React from "react";

import { connect } from "react-redux";
import { reproduzVideo } from "../store/actions/reproduz-video";

import { List, Image, Dimmer, Loader } from "semantic-ui-react";

const VideoList = props => {
  function renderVideo(video) {
    return (
      <List animated verticalAlign="middle" key={video.etag}>
        <List.Item onClick={() => props.reproduz(video)}>
          <Image src={video.snippet.thumbnails.default.url} />
          <List.Content>
            <List.Header>{video.snippet.title}</List.Header>
          </List.Content>
        </List.Item>
      </List>
    );
  }

  return (
    <div className="video-list">
      {props.carregando && (
        <Dimmer active inverted>
          <Loader size="medium">Carregando ...</Loader>
        </Dimmer>
      )}
      {props.videos.map(video => {
        return renderVideo(video);
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    videos: state.busca.videos,
    carregando: state.busca.carregando,
    erro: state.busca.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reproduz: video => dispatch(reproduzVideo(video))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);
