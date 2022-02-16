import React from 'react';
import CategoryOne from '../../Category Component/CategoryOne';
import Footer from '../../Comon/Footer';
import Navbar from '../../Comon/Navbar';
import './../Styles/Home.css'
import LatestStories from './LAtestStories';
import TopStories from './TopStories';
// import Select from 'react-select'

function Home(props) {
    document.title = "PruthaTek Blogs"
    // const options =
    //     [
    //         { value: 'React', label: 'React JS' },
    //         { value: 'Angular js', label: 'Angular JS' },
    //         { value: 'Next JS', label: 'Next JS' },
    //     ];
    // const [selectedOption, setSelectedOption] = useState(null);
    // console.log(selectedOption);
    // const sel = (e) => {
    //     setSelectedOption(e.value)
    // }
    return (
        <div>
            <Navbar />
            {/* <div style={{width : "12vw",marginLeft : "auto",marginRight:"auto"}}>
                <Select
                    defaultValue={selectedOption}
                    onChange={sel}
                    options={options}
                />
            </div> */}
            <div className="top-and-latest-stories">
                <TopStories />
                <LatestStories />
            </div>
            <CategoryOne />
            <div className="category-data">
                <h2>Category 3</h2>
                <div className="category-container">
                    <div className="big-card-second-category">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJr2-HpJq62inTMCq4uY7TsQ2TtwL94VEbcA&usqp=CAU" alt="cabinet"></img>
                        <div className="text-content">
                            <h1>Buy Your Dream Customized PC Cabinte</h1>
                            <p className="by-author">BY OSCAR GONZALEZ</p>
                        </div>
                    </div>
                    <div className="big-card-second-category">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJr2-HpJq62inTMCq4uY7TsQ2TtwL94VEbcA&usqp=CAU" alt="cabinet"></img>
                        <div className="text-content">
                            <h1>Buy Your Dream Customized PC Cabinte</h1>
                            <p className="by-author">BY OSCAR GONZALEZ</p>
                        </div>
                    </div>
                    <div className="category-third-sm-card">
                        <img src="https://i.gadgets360cdn.com/large/mvp_pc_build_1604313319165.jpg?downsize=950:*" alt="hello" />
                        <div>
                            <h3>Title of the Article will be here</h3>
                            <p>description of article will be here</p>
                        </div>
                        <p>23 HRS AGO</p>
                    </div>
                    <div className="category-third-sm-card">
                        <img src="https://i.gadgets360cdn.com/large/mvp_pc_build_1604313319165.jpg?downsize=950:*" alt="hello" />
                        <div>
                            <h3>Title of the Article will be here</h3>
                            <p>description of article will be here</p>
                        </div>
                        <p>23 HRS AGO</p>
                    </div>
                    <div className="category-third-sm-card">
                        <img src="https://i.gadgets360cdn.com/large/mvp_pc_build_1604313319165.jpg?downsize=950:*" alt="hello" />
                        <div>
                            <h3>Title of the Article will be here</h3>
                            <p>description of article will be here</p>
                        </div>
                        <p>23 HRS AGO</p>
                    </div>
                    <div className="category-third-sm-card">
                        <img src="https://i.gadgets360cdn.com/large/mvp_pc_build_1604313319165.jpg?downsize=950:*" alt="hello" />
                        <div>
                            <h3>Title of the Article will be here</h3>
                            <p>description of article will be here</p>
                        </div>
                        <p>23 HRS AGO</p>
                    </div>
                    <div className="category-third-sm-card">
                        <img src="https://i.gadgets360cdn.com/large/mvp_pc_build_1604313319165.jpg?downsize=950:*" alt="hello" />
                        <div>
                            <h3>Title of the Article will be here</h3>
                            <p>description of article will be here</p>
                        </div>
                        <p>23 HRS AGO</p>
                    </div>
                    <div className="category-third-sm-card">
                        <img src="https://i.gadgets360cdn.com/large/mvp_pc_build_1604313319165.jpg?downsize=950:*" alt="hello" />
                        <div>
                            <h3>Title of the Article will be here</h3>
                            <p>description of article will be here</p>
                        </div>
                        <p>23 HRS AGO</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;