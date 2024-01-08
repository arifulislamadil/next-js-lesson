

import getAllBlogs from '@/lib/getAllBlogs';
import Link from 'next/link';

const BlogsPage = async() => {
   const blogs = await getAllBlogs()
   console.log(blogs)
    return (
        <div className='px-10 grid grid-cols-4 w-full gap-5 mt-10'>
            {
                blogs.map(blog =><Link key={blog.id} blog={blog} href={`/blogs/${blog.id}`}><h1 className='border border-white-400 p-5 w-full h-full'>{blog.title}</h1></Link>)
            }
        </div>
    );
};

export default BlogsPage;