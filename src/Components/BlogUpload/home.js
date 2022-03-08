import React from 'react';
import Footer from '../Comon/Footer';
import Navbar from '../Comon/Navbar';
import './home.css'

function home(props) {
    const demoString = "Description is also currently demoDescription is also currently demoDescription is also currently demoDescription is also currently demoDescription is also currently demoDescription is also currently demoDescription is also currently demoDescription is also currently demo"
    const next = demoString.slice(0,35)
    return (
        <div className="blog-upload-home">
            <Navbar />
            <table>
                <tr>
                    <th>Sr No.</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Author</th>
                    <th>Time</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Title is currently demo</td>
                    <td>{next}...</td>
                    <td>Harshil</td>
                    <td>3:30 PM IST</td>
                    <td>Read Blog</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Title is currently demo</td>
                    <td>Description is also currently demo</td>
                    <td>Harshil</td>
                    <td>3:30 PM IST</td>
                    <td>Read</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Title is currently demo</td>
                    <td>Description is also currently demo</td>
                    <td>Harshil</td>
                    <td>3:30 PM IST</td>
                    <td>Read</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Title is currently demo</td>
                    <td>Description is also currently demo</td>
                    <td>Harshil</td>
                    <td>3:30 PM IST</td>
                    <td>Read</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Title is currently demo</td>
                    <td>Description is also currently demo</td>
                    <td>Harshil</td>
                    <td>3:30 PM IST</td>
                    <td>Read</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Title is currently demo</td>
                    <td>Description is also currently demo</td>
                    <td>Harshil</td>
                    <td>3:30 PM IST</td>
                    <td>Read</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Title is currently demo</td>
                    <td>Description is also currently demo</td>
                    <td>Harshil</td>
                    <td>3:30 PM IST</td>
                    <td>Read</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Title is currently demo</td>
                    <td>Description is also currently demo</td>
                    <td>Harshil</td>
                    <td>3:30 PM IST</td>
                    <td>Read</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Title is currently demo</td>
                    <td>Description is also currently demo</td>
                    <td>Harshil</td>
                    <td>3:30 PM IST</td>
                    <td>Read</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Title is currently demo</td>
                    <td>Description is also currently demo</td>
                    <td>Harshil</td>
                    <td>3:30 PM IST</td>
                    <td>Read</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Title is currently demo</td>
                    <td>Description is also currently demo</td>
                    <td>Harshil</td>
                    <td>3:30 PM IST</td>
                    <td>Read</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Title is currently demo</td>
                    <td>Description is also currently demo</td>
                    <td>Harshil</td>
                    <td>3:30 PM IST</td>
                    <td>Read</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Title is currently demo</td>
                    <td>Description is also currently demo</td>
                    <td>Harshil</td>
                    <td>3:30 PM IST</td>
                    <td>Read</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Title is currently demo</td>
                    <td>Description is also currently demo</td>
                    <td>Harshil</td>
                    <td>3:30 PM IST</td>
                    <td>Read</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Title is currently demo</td>
                    <td>Description is also currently demo</td>
                    <td>Harshil</td>
                    <td>3:30 PM IST</td>
                    <td>Read</td>
                </tr>
            </table>
            <Footer />
        </div>
    );
}

export default home;