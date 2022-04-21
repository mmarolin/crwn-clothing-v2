import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import SignIn from "../../components/sign-in/sign-in.component";
import { ReactComponent as Logo } from "../../assets/jordan.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" style={{ height: 60, width: 52 }} />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/account">
            ACCOUNT
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          <Link className="auth-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
