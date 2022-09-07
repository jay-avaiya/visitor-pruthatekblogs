import React, { useContext, useEffect } from "react";
import "./../Styles/LatestStories.css";
import { StoryContext } from "../../../context/StoriesContext";
import moment from "moment";
// import Fade from 'react-reveal/Fade'

function LatestStories(props) {
  const {
    state: { latestStories },
  } = useContext(StoryContext);

  return (
    <div className="latest-stories">
      <p className="latest-title">LATEST STORIES</p>
      {latestStories.map((blog, index) => (
        <div className="latest-card" key={index} data-aos="fade-up">
          <img
            src={`${process.env.REACT_APP_IMG_BASEURL}/${blog.thumbnail_img}`}
            alt="hello"
            className="latest-card-img min-h-24"
          />
          <div className="latest-card-text-content flex flex-col justify-between">
            <h3 className="latest-title overflow-y-hidden max-h-10">
              {blog.title}
            </h3>
            <p className="description max-h-24 overflow-y-hidden">{`Now for those who don’t have any idea about Freelancer, it provides a platform for the employer to post jobs and freelancers like me to get jobs. The process to find a job is fairly simple, you just have to bid on a job you like,`}</p>
            <p className="by-author font-extrabold capitalize">
              {blog.user.username}
            </p>
          </div>
          <p className="last-update">
            {moment(blog.updated_at).format("DD MMM, YYYY")}
          </p>
        </div>
      ))}
    </div>
  );
}

export default LatestStories;
