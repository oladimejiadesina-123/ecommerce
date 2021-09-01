import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../Custom-button/Custom-button';
import { addItems } from '../../redux/cart/cart.action'
import './Collection.scss';

const Collection = ({item, addItems}) => {

  const { imageUrl, price, name} = item;
  
  return (

  <div className="collection-item">
    <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton onClick={() => addItems(item)} inverted>Add to cart</CustomButton>
  </div>
)};

const mapDispatchToProps = dispatch => ({
  addItems: item => dispatch(addItems(item))
})
export default connect(null, mapDispatchToProps)(Collection);
