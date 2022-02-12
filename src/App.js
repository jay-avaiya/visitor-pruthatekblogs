import './App.css';
import Home from './Components/Home/Components/Home';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Components/Comon/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" component={Home} exact/>
        <Route path="/nav" component={Navbar} exact/>
      </BrowserRouter>
    </>
  );
}

export default App;
