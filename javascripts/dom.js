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

const createProjectCards = (array) => {
  let projectCard = '';
  array.forEach((projectObj) => {
    projectCard += `<h3 class="proj-id">${projectObj.id}</h3>`;
    projectCard += `<h2 class="proj-title">${projectObj.title}</h2>`;
    projectCard += `<img src="${projectObj.imageUrl}" width="300">`;
    projectCard += `<p>${projectObj.description}</p>`;
    projectCard += `<p><a href="${projectObj.githubUrl}" target="_blank">Explore on Github</a></p>`;
  });

  writeToDom(projectCard, 'project');
};

module.exports = {
  createBlogPosts,
  createProjectCards,
};
