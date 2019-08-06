import React from "react";

// Custom Component
import CustomCard from "../common/CustomCard";

const NewList = props => (
  <CustomCard
    link="/lista/novo"
    containerClass="new-list-container"
    action={props.newList}
  >
    <div>
      <p className="title">Adicionar Novas Listas</p>
    </div>
  </CustomCard>
);

export default NewList;
