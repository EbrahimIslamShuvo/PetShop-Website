import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../Components/Shared/Header';
import blogData from '../../../Data/blogData'; // Make sure this exports an object, not a function

const SingleBlog = () => {
    const { id } = useParams();
    const { blogs } = blogData(); // ✅ No parentheses here

    const blog = blogs?.find(blog => blog?.id == id); // Safe find
    console.log(blog)

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <Header name={"Blog Details"} />
                    </div>

                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img 
                            src={blog?.thumbnail} 
                            alt={blog?.name} 
                            className="w-full h-96 object-cover"
                        />

                        <div className="p-6 md:p-8">
                            <div className="flex justify-between items-start mb-4">
                                <h1 className="text-3xl font-bold text-gray-900">{blog?.name}</h1>
                                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                                    {blog?.category}
                                </span>
                            </div>

                            <div className="flex items-center mb-6">
                                <img 
                                    src={blog?.author.image} 
                                    alt={blog?.author.name}
                                    className="w-10 h-10 rounded-full mr-3 object-cover"
                                />
                                <div>
                                    <p className="text-sm font-medium text-gray-900">{blog?.author.name}</p>
                                    <p className="text-sm text-gray-500">
                                        Published on {new Date(blog?.publish_date).toLocaleDateString()} • {blog?.view_count.toLocaleString()} views
                                    </p>
                                </div>
                                <div className="ml-auto flex items-center">
                                    <span className="text-yellow-500 mr-1">★</span>
                                    <span className="font-medium">{blog?.rating}.0</span>
                                    <span className="text-gray-500 ml-1">({blog?.rating_count})</span>
                                </div>
                            </div>

                            <div className="prose max-w-none text-gray-700 mb-8">
                                <p>{blog?.description}</p>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {blog?.tags.map((tag, index) => (
                                    <span 
                                        key={index}
                                        className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <h3 className="text-xl font-semibold mb-4">Reviews ({blog?.reviews.length})</h3>
                                <div className="space-y-6">
                                    {blog?.reviews.map((review, index) => (
                                        <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                                            <div className="flex items-center mb-3">
                                                <img 
                                                    src={review.reviewer_img} 
                                                    alt={review.reviewer_name}
                                                    className="w-8 h-8 rounded-full mr-3 object-cover"
                                                />
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">{review.reviewer_name}</p>
                                                    <div className="flex items-center">
                                                        {[...Array(5)].map((_, i) => (
                                                            <span 
                                                                key={i}
                                                                className={`${i < review.rating ? 'text-yellow-500' : 'text-gray-300'} mr-1`}
                                                            >
                                                                ★
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-gray-700 mb-2">{review.review}</p>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <span className="bg-gray-100 px-2 py-0.5 rounded mr-2">{review.category}</span>
                                                <span>•</span>
                                                <span className="ml-2">{review.tag}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;
