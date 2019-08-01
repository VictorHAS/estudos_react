import React from "react";
import { Segment, Input } from "semantic-ui-react";
import { connect } from "react-redux";
import { buscaVideo } from "../store/actions/busca-video";

const SearchBar = props => {
  function renderFirst() {
    return props.buscaVideo("React redux");
  }

  function pesquisaTermo(e) {
    if (e.keyCode === 13) {
      const termo = e.target.value;
      props.buscaVideo(termo);
      console.log(termo);
    }
  }

  return (
    <div className="search-bar">
      {renderFirst()}
      <Segment stacked>
        <Input
          icon="search"
          size="large"
          onKeyDown={pesquisaTermo}
          placeholder="Search ..."
        />
      </Segment>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return { buscaVideo: termo => dispatch(buscaVideo(termo)) };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
