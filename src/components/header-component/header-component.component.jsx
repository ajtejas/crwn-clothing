import React from "react";
import { connect } from "react-redux";
import "./header-component.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import CartIcon from "../cart-icon/cart-icon.compont";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentIUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.reselect";
import { signoutStart } from "../../redux/user/user.action";

const Header = ({ currentUser, hidden, signoutStart }) => (
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
        <div className="option" onClick={signoutStart}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {!hidden ? <CartDropDown /> : null}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentIUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signoutStart: () => dispatch(signoutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
