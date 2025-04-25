import React from 'react';
import blogData from '../../Data/blogData';
import Header from '../../Components/Shared/Header';
import BlogCard from './Components/BlogCard';

const Blog = () => {
    const {blogs} = blogData();
    
    return (
        <div>
            <div className="">
                <div className="w-8/12 mx-auto">
                    <div className="">
                        <Header name={"All Blogs"}></Header>
                    </div>
                    <div className="grid grid-cols-3 gap-10 my-10">
                        {
                            blogs?.map(blog=> <BlogCard blog={blog}></BlogCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;