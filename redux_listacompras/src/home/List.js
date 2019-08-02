import React from "react";

// Custom Component
import CustomCard from "../common/CustomCard";

// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faCheck } from "@fortawesome/free-solid-svg-icons";

const List = () => (
  <CustomCard
    containerClass="list-container"
    footer={
      <div className="list-footer">
        <p>01/01/2019</p>
        <p>100.00</p>
      </div>
    }
  >
    <div>
      <p className="title">Mês</p>
      <div className="list-card-body">
        <div className="list-card-item">
          <FontAwesomeIcon icon={faShoppingBasket} size="sm" />
          <p>1 Item(s) Restante</p>
        </div>
        <div className="list-card-item">
          <FontAwesomeIcon icon={faCheck} size="sm" />
          <p>2 Item(s) Comprados</p>
        </div>
      </div>
    </div>
  </CustomCard>
);

export default List;
