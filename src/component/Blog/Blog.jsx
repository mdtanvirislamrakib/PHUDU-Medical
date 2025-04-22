import React from 'react';

const Blog = ({blog}) => {
    return (
        <div className='w-full lg:w-10/12 mx-auto my-5'>
            <div className=' bg-white rounded-2xl p-5 lg:px-10 lg:py-5 space-y-2'>
                <h1 className='text-lg lg:text-xl font-bold'>{blog.question}</h1>
                <div className='text-gray-400 border border-dashed'></div>
                <p className='text-lg lg:text-xl font-semibold text-indigo-500'>Answer: <span className='text-gray-500'>{blog.answer}</span></p>
                <div></div>
            </div>
        </div>
    );
};

export default Blog;