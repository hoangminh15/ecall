import React from "react";
import "./Header.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <span className="e">E</span>
        <span className="call">call</span>
        <span className="vn">.vn</span>
      </div>
      <div className="header__right">
        <Router>
          <nav className="header__nav">
            <ul className="list__nav">
              <li>
                <Link to="/">TRANG CHỦ</Link>
              </li>
              <li>
                <Link to="/intro">GIỚI THIỆU</Link>
              </li>
              <li>
                <Link to="/products">
                  <div className="header__products">
                    <span>SẢN PHẨM</span>
                    <ExpandMoreIcon className="icon__arrow" />
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/news">TIN TỨC</Link>
              </li>
              <li>
                <Link to="/contact">LIÊN HỆ</Link>
              </li>
            </ul>
            {/* 
            <Switch>
              <Route exact path="/">
                <h2>Home</h2>
              </Route>
              <Route path="/intro">
                <h2>Intro</h2>
              </Route>
              <Route path="/products">
                <h2>Products</h2>
              </Route>
              <Route path="/news">
                <h2>News</h2>
              </Route>
              <Route path="/contact">
                <h2>Contact</h2>
              </Route>
            </Switch> */}
          </nav>
        </Router>
        <span>|</span>
        <IconButton>
          <ShoppingCartIcon className="icon__cart" />
        </IconButton>
        <IconButton>
          <SearchIcon className="icon__search" />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
