import React, { useEffect, useState } from "react";
import "./NAvbar.css";
import { AiFillCaretDown } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Navbar(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    window.scroll(() => {
      if (window.screenTop >= 300) {
        document.querySelector(".navi").classList.toggle(".stick-it");
      }
    });
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/allCategories`)
      .then((res) => {
        setCategories(res.data.info);
      })
      .catch((error) => {
        toast.error("Something went wrong, Please refresh the page");
      });
  }, []);

  const visible = (e) => {
    console.log("clicked");
    console.log(e);
    console.log(document.querySelector(".navbar-ul"));
    document.querySelector(".navbar-ul").classList.toggle("navbar-ul-second");
  };

  return (
    <>
      <div className="blog-navbar">
        <Link to="/">
          <img
            src="/Logo.png"
            alt="Pruthatek-logo"
            className="pruthatek-blog-logo"
          />
        </Link>
        <div className="navbar-menu">
          <div className="navbar-ul">
            {categories?.map((category) => {
              return (
                <>
                  <div className="main-menu-div flex items-center gap-3 relative">
                    {category.name}
                    <AiFillCaretDown />
                    <div className="sub-menu-div top-10">
                      {category.sub_category?.map((subCat, index) => {
                        if (index == 0) {
                          return (
                            <>
                              <p className="inside-title">{subCat.name}</p>
                            </>
                          );
                        } else {
                          return (
                            <>
                              <p>{subCat.name}</p>
                            </>
                          );
                        }
                      })}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <GiHamburgerMenu className="hamburger" onClick={visible} />
        <ToastContainer />
      </div>
    </>
  );
}

export default Navbar;
