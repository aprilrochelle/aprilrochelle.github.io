const {getAllBlogs, getAllProjects,} = require('./firebaseApi');
const {createBlogPosts, createProjectCards,} = require('./dom');

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
      createProjectCards(results);
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = {
  getAllBlogsEvent,
  getAllProjectsEvent,
};
