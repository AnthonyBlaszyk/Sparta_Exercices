import React from "react";
import CardHeader from "./header";
import CardBody from "./body";
import CardFooter from "./footer";

const ProductCard = (props) => {
  return (
    <div>
      <CardHeader name={props.product.name} platformLogos={props.product.platforms} />
      <CardBody
        cover={props.product.cover}
        firstReleaseDate={props.product.first_release_date}
        genres={props.product.genres}
        screenshots={props.product.screenshots}
        summary={props.product.summary}
      />
      <CardFooter slug={props.product.slug} />
    </div>
  );
};

export default ProductCard;
