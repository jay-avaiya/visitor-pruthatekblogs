import './App.css';
import Home from './Components/Home/Components/Home';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Components/Comon/Navbar';
import DetailedBlog from './Components/Detailed_Blog/Detailed_blog';

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" component={Home} exact/>
        <Route path="/nav" component={Navbar} exact/>
        <Route path="/Blog/:title" component={DetailedBlog} exact/>
      </BrowserRouter>
    </>
  );
}

export default App;
