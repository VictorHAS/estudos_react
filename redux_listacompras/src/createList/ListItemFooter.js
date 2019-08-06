import React from "react";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as FormActions } from "../store/actions/form";

// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const ListItemFooter = ({ item, deleteProduct, startUpdate, list }) => (
  <div className="list-card-footer">
    <div className="list-card-footer-actions">
      <FontAwesomeIcon
        onClick={() => startUpdate(list, item)}
        icon={faPen}
        color="#00b0ff"
        size="1x"
      />
      <FontAwesomeIcon
        onClick={() => deleteProduct(item.id)}
        icon={faTrash}
        color="#e91e63"
        size="1x"
      />
    </div>
    <p>Total: R$ {item.total}</p>
  </div>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(FormActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(ListItemFooter);
