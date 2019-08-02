import React from "react";

// External
import PropTypes from "prop-types";

// Material Components
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Divider
} from "@material-ui/core";

// Router
import { Link } from "react-router-dom";

// Css
import "./CustomCard.css";

const CustomCard = props => (
  <div className={props.containerClass}>
    <Link to={props.link}>
      <Card className="card">
        <CardActionArea className="card-action-area">
          {props.image && (
            <CardMedia
              component="img"
              className="card-img"
              height="100"
              image={props.image}
              title="image"
            />
          )}
          <CardContent className="card-content">{props.children}</CardContent>
        </CardActionArea>
        {props.footer && (
          <>
            <Divider />
            <CardActions>{props.footer}</CardActions>
          </>
        )}
      </Card>
    </Link>
  </div>
);

CustomCard.propTypes = {
  containerClass: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  link: PropTypes.string.isRequired,
  footer: PropTypes.element,
  image: PropTypes.string
};

export default CustomCard;
