import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './containers/ItemListContainer.js';
import ItemDetailContainer from './containers/ItemDetailContainer.js';
import './App.css'
import NavBar from './components/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
      </Routes>
      
    </BrowserRouter>
  );
}
export default App;