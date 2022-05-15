import React from "react";
import { useLocation } from 'react-router-dom';

const BlogPost = () => {
    const location = useLocation();
    console.log(location.state);

    return (
        <h1>Posts</h1>
    );
}


export default BlogPost;