import React from "react";

// Redux && Actions
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ListActions } from "../store/actions/list";

// Custom component
import Form from "./Form";
import ListItem from "./ListItem";
import NewItem from "./NewItem";

// Css
import "./List.css";

const createList = props => {
  function addProduct(product, list) {
    props.addProduct(product, list);
  }

  return (
    <div className="page-container">
      <Form
        addProduct={addProduct}
        updateProduct={props.updateProduct}
        url={props.match.params.action}
      />

      <div className="list-items-container">
        {props.list.items.map(item => (
          <ListItem
            list={props.list.list}
            item={item}
            toggleProduct={props.toggleProduct}
            key={item.id}
            deleteProduct={props.deleteProduct}
          />
        ))}

        {props.match.params.action === "edicao" && (
          <NewItem list={props.list.list} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  list: state.list
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ListActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createList);
