import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../Custom-button/Custom-button';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart.selector'
import  './cart-dropdown.comp.scss';

const CartDropDown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem =>(
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
            }
        </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        
    </div>
)
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropDown);