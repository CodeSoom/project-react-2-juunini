import React from 'react';

import Item, { ItemProps } from './Item';

export type ItemsProps = {
  items: ItemProps[];
};

function Items({ items }: ItemsProps) {
  return (
    <ul>
      {
        items.map(({
          id, brand, name, price, currency, image, sizes,
        }) => (
          <Item
            key={id}
            brand={brand}
            name={name}
            price={price}
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
