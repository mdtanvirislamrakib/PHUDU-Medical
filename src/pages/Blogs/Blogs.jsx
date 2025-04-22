import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from '../../component/Blog/Blog';

const Blogs = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <div>
                {
                    data.map( blog => <Blog key={blog.id} blog = {blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;