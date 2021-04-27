import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from '../components/Homepage'
import EmptyCart from '../components/EmptyCart'
import Account from '../components/Account'
import ProductDetails from '../components/ProductDetails'
const Routes = () => (
  <BrowserRouter>
    <Switch>
    <Route exact path='/cart' component={EmptyCart} />
    <Route exact path='/account' component={Account} />
    <Route exact path='/productDetails' component={ProductDetails} />
    <Route exact path="/" component={Homepage} />
      <Route path="*" component={() => <div>Not found</div>} />
    </Switch>
    </BrowserRouter>
  );

    export default Routes