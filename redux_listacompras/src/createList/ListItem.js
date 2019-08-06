import React from "react";

// Material Component
import { Typography, Checkbox } from "@material-ui/core";

//Custom Component
import CustomCard from "../common/CustomCard";
import ListItemFooter from "./ListItemFooter";

const ListItem = ({ item, deleteProduct, toggleProduct, list }) => (
  <CustomCard
    link="#"
    image="http://s2.glbimg.com/P6Nn4AXYPq-K1Xek4cCKyONYYyA=/e.glbimg.com/og/ed/f/original/2014/01/15/cafe.jpg"
    containerClass="list-item"
    action={() => toggleProduct(item.id)}
    footer={
      <ListItemFooter list={list} deleteProduct={deleteProduct} item={item} />
    }
  >
    <div>
      <div className="list-item-header">
        <Typography variant="subtitle1" component="h2">
          {item.product}
        </Typography>
        <Checkbox checked={item.checked} />
      </div>
      <Typography component="p">
        {item.quantity} {item.unit}
      </Typography>
      <Typography component="p">R${item.price}</Typography>
    </div>
  </CustomCard>
);

export default ListItem;
