import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import "./../Styles/TopStories.css";
// import TopStoriesData from "./../../../JSON/topstories.json";
import { StoryContext } from "../../../context/StoriesContext";

function TopStories() {
  const {
    state: { topStories },
  } = useContext(StoryContext);

  const history = useHistory();

  const blogClick = (blog) => {
    history.push(`/blog/${blog.uuid}`);
  };

  return (
    <div>
      <p className="top-title">TOP STORIES</p>
      <div className="top-stories">
        {topStories.map((blog, index) => {
          if (index % 3 === 0) {
            return (
              <div
                className="bigger-img-card shadow-lg shadow-black"
                key={index}
                data-aos="fade-up"
                onClick={() => blogClick(blog)}
              >
                <img
                  src={`${process.env.REACT_APP_IMG_BASEURL}/${blog.thumbnail_img}`}
                  alt="cabinet"
                ></img>
                <div className="text-content">
                  <h1 className="overflow-y-hidden max-h-14">{blog.title}</h1>
                  <p className="by-author capitalize font-extrabold">
                    {blog.user.username}
                  </p>
                </div>
              </div>
            );
          } else {
            return (
              <div
                className="small-img-card shadow-lg shadow-black"
                key={index}
                data-aos="fade-up"
                onClick={() => blogClick(blog)}
              >
                <img
                  src={`${process.env.REACT_APP_IMG_BASEURL}/${blog.thumbnail_img}`}
                  alt="cabinet"
                />
                <h3 className="sm-img-card-title overflow-y-hidden max-h-10 mt-3 p-3">
                  {blog.title}
                </h3>
                <p className="by-author capitalize font-extrabold p-3">
                  {blog.user.username}
                </p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default TopStories;
