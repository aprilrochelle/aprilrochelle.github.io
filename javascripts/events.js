const {getAllBlogs, getAllProjects, getAllIcons,} = require('./firebaseApi');
const {createBlogPosts, createProjectCards, createTechCards,} = require('./dom');

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

const getAllTechIcons = () => {
  getAllIcons()
    .then((results) => {
      createTechCards(results);
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = {
  getAllBlogsEvent,
  getAllProjectsEvent,
  getAllTechIcons,
};
