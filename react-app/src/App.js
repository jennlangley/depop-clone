import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import LandingPage from "./components/LandingPage";
import ProductsIndex from './components/Products/index';
import Navigation from "./components/Navigation";
import ProductForm from "./components/Products/NewProduct/ProductForm";
import ProductDetail from "./components/Products/ProductDetail/ProductDetail";
import ManageProducts from "./components/Products/ManageProducts";
import EditProduct from "./components/Products/ManageProducts/EditProduct";
import Orders from "./components/Orders";
import Checkout from "./components/Cart/Checkout";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile/Profile";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { CartProvider } from "./context/CartContext";
import SearchResults from "./components/SearchResults";
import ProductCategory from "./components/ProductCategory";
import ProductSubcategory from "./components/ProductCategory/ProductSubcategory";
import CheckoutCart from "./components/Cart/Checkout/CheckoutCart";
import './index.css';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate())
    .then(() => setIsLoaded(true));
  }, [dispatch]);
  const user = useSelector(state=> state.session.user);
  return (
    <CartProvider>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <>
      <ScrollToTop>
        <Switch>
          <Route exact path="/login" >
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/products">
            <ProductsIndex />
          </Route>
          <Route path="/search">
            <SearchResults />
          </Route>
          <Route exact path="/category/:categoryId">
            <ProductCategory />
          </Route>
          <Route exact path="/category/:categoryId/:subcategoryId">
            <ProductSubcategory />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/products/new">
            <ProductForm />
          </Route>
          <Route exact path="/products/manage">
            <ManageProducts />
          </Route>
          <Route exact path="/products/:productId/edit">
            <EditProduct />
          </Route>
          <Route exact path="/products/:productId">
            <ProductDetail isLoaded={isLoaded} />
          </Route>
          <Route exact path="/orders">
            <Orders user={user} />
          </Route>
          <Route exact path="/users/:userId">
            <Profile />
          </Route>
          <Route exact path="/cart">
            <Checkout />
          </Route>
          <Route exact path="/checkout">
            <CheckoutCart />
          </Route>
          <Route path="">
            <NotFound />
          </Route>
        </Switch>
      </ScrollToTop>
      </>
      )}
    </CartProvider>
  );
}

export default App;
