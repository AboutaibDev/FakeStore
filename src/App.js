import './App.css';
import Products from './Project/fakeStore/Products';
import Cart from './Project/fakeStore/Cart';
import Details from './Project/fakeStore/Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import { Nav } from "react-bootstrap";
import { useSelector } from 'react-redux';

function App() {
  const cartCount = useSelector((state)=>state.cart.counter)
  return (
      <Router>
          <Nav className="me-auto ">
            <Nav.Link as={Link} to="/Home"><h2>Home</h2></Nav.Link>
            <Nav.Link as={Link} to="/Cart"><h2>Cart({cartCount})</h2></Nav.Link>
          </Nav>
          <main>
            <Routes>
              <Route path="*" element={<Products />}/>
              <Route path="/Cart" element={<Cart />}/>          
              <Route path="/Details/:id" element={<Details />}/>      
            </Routes>
          </main>
      </Router>
  );
}

export default App;
// hello :)