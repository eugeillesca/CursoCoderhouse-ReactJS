import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './containers/ItemListContainer.js';
import ItemDetailContainer from './containers/ItemDetailContainer.js';
import Cart from './components/Cart.js';
import './App.css'
import NavBar from './components/NavBar';
import CartContextProvider from './components/CartContext.js';


const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        
      </BrowserRouter>
    </CartContextProvider>
  );
}
export default App;