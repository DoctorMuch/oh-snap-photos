import React from "react";
import PhotoList from "../PhotoList";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery({ currentCategory }) {
  const { name, description } = currentCategory;
  return (
    <section>
      <h2 data-testid="h2tag">
        {capitalizeFirstLetter(name)}
      </h2>
      <p>
        {description}
      </p>
      <PhotoList category={currentCategory.name} />
    </section>
  );
}

export default Gallery;