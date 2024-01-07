
export default async function getAllBlogs(){

    const blogs = await fetch ("https://jsonplaceholder.typicode.com/posts")
    return  blogs.json();

}
