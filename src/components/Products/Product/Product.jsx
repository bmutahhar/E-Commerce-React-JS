import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const Product = ({ product, onAddtoCart }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
        // height="100"
        component="img"
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography
            variant="h2"
            noWrap
            style={{ fontSize: 18, fontWeight: 400 }}
          >
            {product.name}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Typography variant="h6">
          {product.price.formatted_with_symbol}
        </Typography>
        <IconButton
          aria-label="Add to Cart"
          onClick={() => onAddtoCart(product.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
