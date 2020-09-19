import React, {Component} from 'react';
import SHOP_DATA from './Shop.data';
import Preview from '../Preview-Collection/Preview';

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const {collections} = this.state;
    return (
      <div>
        {collections.map(({id, ...otherCollectionProps}) => (
          <Preview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
