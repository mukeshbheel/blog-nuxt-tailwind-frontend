import axios from "axios";
var currentBlog = 'null';
const baseUrl = 'https://sheltered-hamlet-11059.herokuapp.com'

async function setCurrentBlog(id){
    console.log(id)
    await axios.get(`${baseUrl}/api/blogPost/${id}`)
    .then(response => {
        console.log(response.data)
        currentBlog = response.data
    })
    .catch(error => console.log(error))
    // currentBlog = blog
    console.log(currentBlog)
}

function getCurrentBlog(){
    return currentBlog;
}
async function setPosts(category){
    console.log(category)
    return await axios.get(`${baseUrl}/api/blogPost/category/${category}`)
    .then(response => {
        console.log(response.data)
        return response.data;
    })
    .catch(error => console.log(error))
}

async function getAllPosts(){

    return await axios.get(`${baseUrl}/api/blogPost`)
            .then(response => response.data)
            .catch(error => console.log(error))
}



//crud
function addPost(blog){
    console.log(blog)
    axios.post(`${baseUrl}/api/blogPost`, blog)
    .then(response =>{
        console.log(response.data)
    })
    .catch(err=>{
        console.log(err)
    })
}

async function deletePost(blogId){
    console.log(blogId)
    axios.delete(`${baseUrl}/api/blogPost/${blogId}`)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
}

async function updatePost(blog, blogId){
    console.log(blogId)
    axios.put(`${baseUrl}/api/blogPost/${blogId}`, blog)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
}

 export default{
    setCurrentBlog,
    getCurrentBlog,
    setPosts,
    addPost,
    getAllPosts,
    deletePost,
    updatePost,
}
