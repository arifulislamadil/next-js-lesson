import Image from "next/image";
import Img1 from "../../../../public/images/img-1.jpg";
import getAllBlog from "@/lib/getAllBlog";
import Loading from "./loading";
import NotFound from "./not-found";
import getBlog from "@/lib/getBlog";

export async function generateMetadata({params}) {
  const { id } = params;
  const blog = await getAllBlog(id);
  return {
    title: blog.title,
    descriptions: blog.body
    
  };
}

const BlogPage = async ({ params }) => {
  const { id } = params;
  const blogPromise =  getAllBlog(id);
  const commentsPromise =  getBlog(id)
  
const [blog, comments] = await Promise.all([blogPromise, commentsPromise])


  if (!blog || Object.keys(blog).length === 0) {
    return <NotFound />;
  }

  if (!blog) {
    return <Loading />;
  }

  return (
    <div className="px-10">
      <Image className="" src={Img1} alt="" />
      <h1>Blog Page {blog.id}</h1>
      <h3 className="text-2xl">Blog Page {blog.title}</h3>
      <p className="text-xl">Blog Page {blog.body}</p>
    </div>
  );
};

export default BlogPage;
