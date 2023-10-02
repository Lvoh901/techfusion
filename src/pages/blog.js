import React from "react";
import Main from './main';

const Blog = () => {
    return (
        <div>
            <h5 className="card-title fw-bold">TechFusion</h5>

            <Main 
                category="01"
                title="Operation Truce"
                imageSrc=""
            />
        </div>
    );
}

export default Blog;