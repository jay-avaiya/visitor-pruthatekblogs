import React from 'react';
import Footer from '../Comon/Footer';
import Navbar from '../Comon/Navbar';

function Allblogs(props) {
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
            <h2>All Blogs</h2>
            <table>
                <tr>
                    <th>Sr No.</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Author</th>
                    <th>Time</th>
                    <th>Action</th>
                </tr>
                {demoData.map((blog, index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{blog.title}</td>
                        <td>{blog.description}...</td>
                        <td>{blog.Author}</td>
                        <td>{blog.time}</td>
                        <td>Read Blog</td>
                    </tr>
                ))}
            </table>
            <Footer />
        </div>
    );
}

export default Allblogs;