import axios from "axios";
var currentBlog = 'null';
const baseUrl = 'https://tranquil-basbousa-ea4da1.netlify.app/'
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getBlogDate(blogDate) {
    const date = months[blogDate.month] + ' ' + blogDate.day + ', ' + blogDate.year + '';
    return date;
}

async function setCurrentBlog(id) {
    await axios.get(`${baseUrl}/api/blogPost/${id}`)
        .then(response => {
            currentBlog = response.data
        })
        .catch(error => console.log(error))
}

function getCurrentBlog() {
    return currentBlog;
}
async function setPosts(category) {
    return await axios.get(`${baseUrl}/api/blogPost/category/${category}`)
        .then(response => {
            return response.data;
        })
        .catch(error => console.log(error))
}

async function getAllPosts() {

    return await axios.get(`${baseUrl}/api/blogPost`)
        .then(response => response.data)
        .catch(error => console.log(error))
}

async function getSearchResult(searchTerm) {
    return await axios.get(`${baseUrl}/api/blogPost/search/${searchTerm}`)
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(error => console.log(error))
}



//crud
function addPost(blog) {
    axios.post(`${baseUrl}/api/blogPost`, blog)
        .then(response => {
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
        })
}

async function deletePost(blogId) {
    axios.delete(`${baseUrl}/api/blogPost/${blogId}`)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
}

async function updatePost(blog, blogId) {
    axios.put(`${baseUrl}/api/blogPost/${blogId}`, blog)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
}

export default {
    setCurrentBlog,
    getCurrentBlog,
    setPosts,
    addPost,
    getAllPosts,
    deletePost,
    updatePost,
    getBlogDate,
    getSearchResult,
}
