const writeToDom = (input, divId) => {
  $(`#${divId}`).html(input);
};

const createBlogPosts = (array) => {
  let blogPost = '';
  array.forEach((blogObj) => {
    blogPost += `<h3 class="proj-id">${blogObj.id}</h3>`;
    blogPost += `<h2 class="proj-title">${blogObj.title}</h2>`;
    blogPost += `<p>${blogObj.date}<p>`;
    blogPost += `<p>${blogObj.post}</p>`;
  });
  writeToDom(blogPost, 'blog');
};

module.exports = {
  createBlogPosts,
};
