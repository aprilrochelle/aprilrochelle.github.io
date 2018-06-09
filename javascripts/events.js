const {getAllBlogs,} = require('./firebaseApi');
const {createBlogPosts,} = require('./blogs');

const getAllBlogsEvent = () => {
  getAllBlogs()
    .then((results) => {
      createBlogPosts(results);
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = {
  getAllBlogsEvent,
};
