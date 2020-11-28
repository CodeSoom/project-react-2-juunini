import React from 'react';

import { Shop } from 'src/services/shops';
import Item, { ItemProps } from './Item';

export type ItemsProps = {
  items: ItemProps[];
};

function Items({ items }: ItemsProps) {
  return (
    <ul>
      {
        items.map(({
          id, brand, name, finalPrice, currency, image, sizes,
        }) => (
          <Item
            key={id}
            id={id}
            brand={brand}
            name={name}
            finalPrice={finalPrice}
            currency={currency}
            image={image}
            sizes={sizes}
          />
        ))
      }
    </ul>
  );
}

export default React.memo(Items);
