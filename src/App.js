import Homepage from './components/Homepage'
import './App.css';
import ProductDetails from './components/ProductDetails'
import EmptyCart from './components/EmptyCart'


function App() {
  return (
    <div className="App">
     
     <Homepage />
     <ProductDetails />
     <EmptyCart />
    </div>
  );
}

export default App;
