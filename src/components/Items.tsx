import React from 'react';

import { Item as ItemProps } from 'src/services/items';
import Item from './Item';

export type ItemsProps = {
  items: ItemProps[];
};

function Items({ items }: ItemsProps) {
  return (
    <ul>
      {
        items.map(({
          id, brand, name, price, currency, images, sizes,
        }) => (
          <Item
            key={id}
            brand={brand}
            name={name}
            price={price}
            currency={currency}
            image={images[0]}
            sizes={sizes}
          />
        ))
      }
    </ul>
  );
}

export default React.memo(Items);
