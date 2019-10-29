const {getAllBlogs, getAllProjects, getAllIcons, getAllPics,} = require('./firebaseApi');
const {createBlogPosts, createProjectCards, createTechCards, createDesignCards,} = require('./dom');

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

const getAllDesignPics = () => {
  console.log('design');
  getAllPics()
    .then((results) => {
      createDesignCards(results);
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = {
  getAllBlogsEvent,
  getAllProjectsEvent,
  getAllTechIcons,
  getAllDesignPics,
};
