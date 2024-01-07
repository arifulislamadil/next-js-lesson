


export default async function getBlog(id) {
    try {
        const blog = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        return blog.json();
    } catch (error) {
        console.error("Error fetching blog:", error.message);
        
    }
}
