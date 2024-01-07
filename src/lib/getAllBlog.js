


export default async function getAllBlog(id) {
    try {
        const blog = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return blog.json();
    } catch (error) {
        console.error("Error fetching blog:", error.message);
        
    }
}
