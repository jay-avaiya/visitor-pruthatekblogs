import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../../../Components/Comon/Footer";
import Navbar from "../../../Components/Comon/Navbar";
import { constants, StoryContext } from "../../../context/StoriesContext";
import "./../Styles/Home.css";
import LatestStories from "./LAtestStories";
import TopStories from "./TopStories";
// import Select from 'react-select'

function Home(props) {
  const [loading, setLoading] = useState(true);
  const { state, dispatch } = useContext(StoryContext);

  const fetchLatestStories = () => {
    return axios.get(`${process.env.REACT_APP_SERVER_URL}`);
  };

  const fetchTopStories = () => {
    return axios.get(`${process.env.REACT_APP_SERVER_URL}`);
  };

  useEffect(() => {
    Promise.all([fetchLatestStories(), fetchTopStories()])
      .then((res) => {
        dispatch({ type: constants.LATEST_STORIES, payload: res[0].data.info });
        dispatch({ type: constants.TOP_STORIES, payload: res[1].data.info });
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  }, []);

  document.title = "PruthaTek Blogs";

  return (
    <div className="main-bg">
      <Navbar />
      {!loading && (
        <>
          <div className="top-and-latest-stories">
            <TopStories />
            <LatestStories />
          </div>
          {/* <CategoryOne />
          <CategotyTwo /> */}
        </>
      )}
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Home;
