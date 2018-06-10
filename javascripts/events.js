const {getAllBlogs, getAllProjects,} = require('./firebaseApi');
const {createBlogPosts, createProjectPosts,} = require('./dom');

const getAllBlogsEvent = () => {
  getAllBlogs()
    .then((results) => {
      createBlogPosts(results);
    })
    .catch((error) => {
      console.error(error);
    });
};

const getAllProjectsEvent = () => {
  getAllProjects()
    .then((results) => {
      createProjectPosts(results);
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = {
  getAllBlogsEvent,
  getAllProjectsEvent,
};
