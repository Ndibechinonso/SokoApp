import * as React from 'react'
import { Route, Switch } from 'react-router-dom';

import Homepage from '../components/Homepage'
import EmptyCart from '../components/EmptyCart'
import Account from '../components/Account'
import ProductDetails from '../components/ProductDetails'
const Routes = () => (
    <Switch>
      <Route exact path="/" component={Homepage} />
    <Route exact path='/cart' component={EmptyCart} />
    <Route exact path='/account' component={Account} />
    <Route exact path='/productDetails' component={ProductDetails} />
      <Route path="*" component={() => <div>Not found</div>} />
    </Switch>
  );

    export default Routes