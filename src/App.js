import './App.css';
import Home from './Components/Home/Components/Home';
import { BrowserRouter, Route } from 'react-router-dom'
import DetailedBlog from './Components/Detailed_Blog/Detailed_blog';
import BlogUpload from './Components/BlogUpload/blogUpload';
import Login from './Components/BlogUpload/Login';
import Verification from './Components/BlogUpload/verification';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import home from './Components/BlogUpload/home';
import Declined from './Components/BlogUpload/Declined';
import CreateUser from './Components/Admin/CreateUser';
import Allblogs from './Components/Admin/Allblogs';
import AdminLogin from './Components/Admin/Login';
import RequestBlogs from './Components/Admin/RequestBlogs';
// import CookiesNotification from './Components/Comon/CookiesNotification';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      offset: 150
    })
  })
  return (
    <>
      {/* <CookiesNotification /> */}
      <BrowserRouter>
        <Route path="/Blog/:title" component={DetailedBlog} exact />
        <Route path="/blogupload/home" component={home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/blogupload/verification" component={Verification} exact />
        <Route path="/blogupload/declined" component={Declined} exact />
        <Route path="/blogupload" component={BlogUpload} exact />
        <Route path="/admin/createUser" component={CreateUser} exact />
        <Route path="/admin/allblogs" component={Allblogs} exact />
        <Route path="/admin/login" component={AdminLogin} exact />
        <Route path="/admin/requests" component={RequestBlogs} exact />
        <Route path="/" component={Home} exact />
      </BrowserRouter>
    </>
  );
}

export default App;
