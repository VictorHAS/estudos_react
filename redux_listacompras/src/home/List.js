import React from "react";

// Custom Component
import CustomCard from "../common/CustomCard";
import ListItem from "./ListItem";
import ListFooter from "./ListFooter";

// Css
import "./List.css";

// FontAwesome Icons
import { faShoppingBasket, faCheck } from "@fortawesome/free-solid-svg-icons";

const List = props => (
  <CustomCard
    containerClass="list-container"
    link="/lista/edicao"
    footer={<ListFooter date={props.date} total={props.total} />}
    cardClass={props.openedItems < 1 ? "closed-list" : "opened-list"}
  >
    <div>
      <p className="title">{props.list}</p>
      <div className="list-card-body">
        <ListItem
          icon={faShoppingBasket}
          text={`${props.openedItems} Item(s) Restantes`}
        />
        <ListItem
          icon={faCheck}
          text={`${props.closedItems} Item(s) Comprados`}
        />
      </div>
    </div>
  </CustomCard>
);

export default List;
