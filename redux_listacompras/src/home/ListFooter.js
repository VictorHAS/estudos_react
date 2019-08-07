import React from "react";

// import { Container } from './styles';

const ListFooter = props => (
  <div className="list-footer">
    <p>{props.date}</p>
    <p>Total: R$ {props.total}</p>
  </div>
);

export default ListFooter;
