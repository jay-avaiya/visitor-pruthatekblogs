import React from 'react';

function DetailedBlog(props) {
    console.log(props);
    return (
        <div>
            <h2>{props.location.state}</h2>
        </div>
    );
}

export default DetailedBlog;