import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Blog from '../../component/Blog/Blog';

const Blogs = () => {
    const data = useLoaderData();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])
    return (
        <div>
            {
                loading ? (<span className="loading loading-infinity w-10 md:w-14 lg:w-24 text-indigo-600 min-h-screen flex items-center justify-center mx-auto my-auto"></span>) : (<div>
                    {
                        data.map( blog => <Blog key={blog.id} blog = {blog}></Blog>)
                    }
                </div>)
            }
        </div>
    );
};

export default Blogs;