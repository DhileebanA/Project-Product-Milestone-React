import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductTable } from './components/Products/ProductTable';
import { ProductDisp } from './components/Product Display/productDisp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductTable/>} />
          <Route path='/product/:id' element={<ProductDisp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
