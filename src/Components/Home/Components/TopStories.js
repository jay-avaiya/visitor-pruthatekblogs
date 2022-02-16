import React from 'react';
import { Link } from 'react-router-dom';
import './../Styles/TopStories.css'
import TopStoriesData from './../../../JSON/topstories.json'

function TopStories(props) {
    return (
        <div className="top-stories">
            <p className="top-title">TOP STORIES</p>
            {
                TopStoriesData.map((blog, index) => (
                    <div key={index}>
                        <Link to={{
                            pathname: "/Blog/customized",
                            state: "Customised PC By Harshil"
                        }}>
                            <div className="bigger-img-card" key={index}>
                                <img src={blog.imgPath} alt="cabinet"></img>
                                <div className="text-content">
                                    <h1>{blog.blogTitle}</h1>
                                    <p className="by-author">{blog.author}</p>
                                </div>
                            </div>
                        </Link>
                        <div className="small-img-card-container">
                            {
                                blog.nextTwo.map((nextBlog,ind) => (
                                    <div className="small-img-card" key={ind}>
                                        <img src={nextBlog.imgPath} alt="cabinet" />
                                        <h3>{nextBlog.blogTitle}</h3>
                                        <p className="by-author">{nextBlog.author}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default TopStories;