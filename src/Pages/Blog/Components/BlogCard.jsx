import React from 'react';
import { FaBookOpen } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import { MdOutlinePublishedWithChanges } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const BlogCard = ({blog}) => {
    return (
        <div>
            <div className="group">
                <div className="w-96 group-hover:shadow-2xl duration-700">
                    <div className="w-96 overflow-hidden">
                        <img className='w-96 h-64 transform group-hover:scale-110 overflow-hidden duration-700' src={blog.thumbnail} alt="" />
                    </div>
                    <div className="p-5 h-56 flex flex-col gap-2">
                        <h4 className='font-semibold text-orange-400'>{blog.category}</h4>
                        <NavLink to={`/blog/${blog.id}`}><h1 className='font-bold text-2xl'>{blog.name}</h1></NavLink>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <FaBookOpen></FaBookOpen>
                                <h4>{blog.view_count}</h4>
                            </div>
                            <div className="flex items-center gap-1">
                                <FaStar></FaStar>
                                <h4>{blog.rating} Rating</h4>
                            </div>
                            <div className="flex items-center gap-1">
                                <MdOutlinePublishedWithChanges></MdOutlinePublishedWithChanges>
                                <h4>{blog.publish_date}</h4>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img className='w-12 h-12 rounded-full' src={blog.author.image} alt="" />
                            <h1 className='text-xl'>{blog.author.name}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;