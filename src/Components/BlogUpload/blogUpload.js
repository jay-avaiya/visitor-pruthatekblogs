import React, { useEffect, useState } from 'react';
import Navbar from '../Comon/Navbar';
import './blogUpload.css'
import Select from 'react-select'
import Footer from '../Comon/Footer';


function BlogUpload(props) {

    const [title,setTitle] = useState('') 
    const [selectedOption, setSelectedOption] = useState(null);
    const [heading1,setheading1] = useState('') 
    const [heading2,setheading2] = useState('') 
    const [heading3,setheading3] = useState('') 
    const [content1,setcontent1] = useState('') 
    const [content2,setcontent2] = useState('') 
    const [content3,setcontent3] = useState('') 

    useEffect(() => {
        document.title = "Upload Blog"
    })
    const options = [
        { value: 'Electronic', label: 'Electronic' },
        { value: 'News', label: 'News' },
        { value: 'Games', label: 'Games' },
        { value: 'Reviews', label: 'Reviews' },
        { value: 'Cars', label: 'Cars' },
    ];
    console.log(selectedOption);
    const sel = (e) => {
        setSelectedOption(e.value)
    }
    const showValues = (e) =>{
        e.preventDefault();
        console.log({
            title: title,
            heading1 : heading1,
            heading2 : heading2,
            heading3 : heading3,
            content1 : content1,
            content2 : content2,
            content3 : content3,
            blogType : selectedOption
        });
        setSelectedOption(null)
        setTitle('')
        setcontent1('')
        setcontent2('')
        setcontent3('')
        setheading1('')
        setheading2('')
        setheading3('')
    }
    return (
        <>
            <Navbar />
            <h1 className="blog-details-title">Enter Blog Details</h1>
            <div className="blog-detail-form">
                <form onSubmit={showValues} onReset={showValues}>
                    <p><label htmlFor="blog-title">Title</label></p>
                    <input type="text" id="blog-title" value={title} placeholder="Enter your blog Title" onChange={(e) => setTitle(e.target.value)} autoComplete="off" required/>

                    <p>Thumbnail</p>
                    <input type="file" required/>

                    <p>Type of Blog</p>
                    <div>
                        <Select
                            defaultValue={selectedOption}
                            onChange={sel}
                            options={options}
                        />
                    </div>

                    <p>Heading-1</p>
                    <input type="text" placeholder="Enter your first heading" value={heading1} onChange={(e) => setheading1(e.target.value)}  required/>

                    <p>Content-1</p>
                    <textarea placeholder="Enter Content" value={content1} onChange={(e) => setcontent1(e.target.value)}  required/>

                    <p>Image-1</p>
                    <input type="file" required/>

                    <p>Heading-2</p>
                    <input type="text" value={heading2} placeholder="Enter your first heading" onChange={(e) => setheading2(e.target.value)} required/>

                    <p>Content-2</p>
                    <textarea placeholder="Enter Content" value={content2} onChange={(e) => setcontent2(e.target.value)} required />

                    <p>Image-2</p>
                    <input type="file" required/>

                    <p>Heading-3</p>
                    <input type="text" value={heading3} placeholder="Enter your first heading" onChange={(e) => setheading3(e.target.value)}  required/>

                    <p>Content-3</p>
                    <textarea placeholder="Enter Content" value={content3} onChange={(e) => setcontent3(e.target.value)} required />

                    <p>Image-3</p>
                    <input type="file" required/>

                    <p>Video URL</p>
                    <input type="url" required placeholder="Enter youtube video url"/>

                    <button type="reset" className="form-btn">Reset</button>
                    <button type="submit" className="form-btn">Submit</button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default BlogUpload;