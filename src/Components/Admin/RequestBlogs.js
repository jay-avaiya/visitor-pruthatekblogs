import React from 'react';
import Footer from '../Comon/Footer';
import Navbar from '../Comon/Navbar';
import {GiCheckMark} from 'react-icons/gi'
import {ImCross} from 'react-icons/im'
import './Request.css'

function RequestBlogs(props) {
    const demoString = "Description is also currently demoDescription is also currently demoDescription is also currently demoDescription is also currently demoDescription is also currently demoDescription is also currently demoDescription is also currently demoDescription is also currently demo"
    const next = demoString.slice(0, 35)
    const demoData = [
        {
            title: "Title is currently demo",
            description: next,
            Author: "Harshil",
            time: "3:30 PM IST"
        },
        {
            title: "Title is currently demo",
            description: next,
            Author: "Harshil",
            time: "3:30 PM IST"
        },
        {
            title: "Title is currently demo",
            description: next,
            Author: "Harshil",
            time: "3:30 PM IST"
        },
        {
            title: "Title is currently demo",
            description: next,
            Author: "Harshil",
            time: "3:30 PM IST"
        },
        {
            title: "Title is currently demo",
            description: next,
            Author: "Harshil",
            time: "3:30 PM IST"
        },
        {
            title: "Title is currently demo",
            description: next,
            Author: "Harshil",
            time: "3:30 PM IST"
        },
        {
            title: "Title is currently demo",
            description: next,
            Author: "Harshil",
            time: "3:30 PM IST"
        },
        {
            title: "Title is currently demo",
            description: next,
            Author: "Harshil",
            time: "3:30 PM IST"
        },
        {
            title: "Title is currently demo",
            description: next,
            Author: "Harshil",
            time: "3:30 PM IST"
        },
        {
            title: "Title is currently demo",
            description: next,
            Author: "Harshil",
            time: "3:30 PM IST"
        },
    ]
    return (
        <div className="blog-upload-home">
            <Navbar />
            {/* <h1>Blogs Post Requests</h1> */}
            <table>
                <tr>
                    <th>Sr No.</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Author</th>
                    <th>Time</th>
                    <th>Accept</th>
                    <th>Deline</th>
                </tr>
                {demoData.map((blog, index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{blog.title}</td>
                        <td>{blog.description}...</td>
                        <td>{blog.Author}</td>
                        <td>{blog.time}</td>
                        <td className="decision-mark-accept"><GiCheckMark /></td>
                        <td className="decision-mark-decline"><ImCross /></td>
                    </tr>
                ))}
            </table>
            <td className="decision-mark-accept"><GiCheckMark /></td>
            <Footer />
        </div>
    );
}

export default RequestBlogs;