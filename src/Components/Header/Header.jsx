import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurretUser } from '../../redux/user/user.selector'
import toggleCartHidden from '../../redux/cart/cart.action'
import CartDropDown from '../cart-dropdown/cart-dropdown.com'
import CartIcon from '../cart-Icon/cart-Icon.comp'
import { ReactComponent as Logo } from '../Assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './Header.scss';

const Header = ({currentUser, hidden}) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          {' '}
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon/>
    </div>
    {
      hidden ? null :
    <CartDropDown />
    }
  </div>
);

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurretUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
