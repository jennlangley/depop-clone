import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import ProductsIndex from './components/Products/index';
import Navigation from "./components/Navigation";
import ProductForm from "./components/Products/NewProduct/ProductForm";
import ProductDetail from "./components/Products/ProductDetail/ProductDetail";
import ManageProducts from "./components/Products/ManageProducts";
import EditProduct from "./components/Products/ManageProducts/EditProduct";
import Orders from "./components/Orders";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);
  const user = useSelector(state=> state.session.user);
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
          <Route exact path="/products/:productId/edit">
            <EditProduct />
          </Route>
          <Route exact path="/products/:productId">
            <ProductDetail />
          </Route>
          <Route path="/orders">
            <Orders user={user} />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
