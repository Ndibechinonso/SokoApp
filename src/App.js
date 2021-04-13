import './App.css';


import Homepage from './components/Homepage'
import ProductDetails from './components/ProductDetails'
import EmptyCart from './components/EmptyCart'
import Account from './components/Account'

function App() {
  return (
    <div className="App">
     
     <Homepage />
     <ProductDetails />
     <EmptyCart />
     <Account />
    </div>
  );
}

export default App;
