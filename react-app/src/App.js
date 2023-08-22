import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import { getProducts } from "./store/product";
import ProductsIndex from './components/Products/index';
import Navigation from "./components/Navigation";
import ProductForm from "./components/Products/NewProduct/ProductForm";
import ProductDetail from "./components/Products/ProductDetail/ProductDetail";
import ManageProducts from "./components/Products/ManageProducts";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/products">
            <ProductsIndex />
          </Route>
          <Route exact path="/">
            <ProductsIndex />
          </Route>
          <Route exact path="/products/new">
            <ProductForm />
          </Route>
          <Route exact path="/products/manage">
            <ManageProducts />
          </Route>
          <Route exact path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
