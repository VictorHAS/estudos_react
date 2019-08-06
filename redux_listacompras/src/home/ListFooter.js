import React from "react";

// import { Container } from './styles';

const ListFooter = props => (
  <div className="list-footer">
    <p>01/01/2019</p>
    <p>Total: R$ {props.total}</p>
  </div>
);

export default ListFooter;
