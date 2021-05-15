import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import HomePage from "./pages/homepage/homepage.compoent";
import ShopPage from "./pages/shop/shop-page.component";
import SignInSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./components/header-component/header-component.component";
import { connect } from "react-redux";
import { selectCurrentIUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.action";
import "./App.css";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentIUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
