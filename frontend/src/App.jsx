import './App.css';
import Home from './screens/Home';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Login from './screens/Login';
import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';


function App() {
  return (
  <>
    <CartProvider>
 
    <Router>
     <div>
      <Routes>
        <Route exact path ="/" element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/createuser' element={<Signup/>} />
        <Route exact path='/myorder' element={<MyOrder/>} />

      </Routes>
     </div>
    </Router>

    </CartProvider>
  </>
  );
}

export default App;
