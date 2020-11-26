import React from 'react';

import { Item as ItemProps } from 'src/services/items';
import { Shop } from 'src/services/shops';
import Item from './Item';

export type ItemsProps = {
  items: ItemProps[];
  shops: {[id: number]: Shop};
};

function Items({ items, shops }: ItemsProps) {
  return (
    <ul>
      {
        items.map(({
          id, brand_id, name, price, currency, images, sizes,
        }) => (
          <Item
            key={id}
            id={id}
            brand={shops[brand_id].name}
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
