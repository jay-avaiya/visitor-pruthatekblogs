import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
// import Login from "./Components/BlogUpload/Login";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CreateUser from "./Components/Admin/CreateUser";
import Allblogs from "./Components/Admin/Allblogs";
import AdminLogin from "./Components/Admin/Login";
import RequestBlogs from "./Components/Admin/RequestBlogs";
import { DetailedBlog, Home } from "./pages";
// import CookiesNotification from './Components/Comon/CookiesNotification';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      offset: 150,
    });
  });
  return (
    <>
      {/* <CookiesNotification /> */}
      <BrowserRouter>
        <Route path="/blog/:blogid" component={DetailedBlog} exact />
        <Route path="/blogupload/home" component={Home} exact />
        {/* <Route path="/login" component={Login} exact /> */}
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
