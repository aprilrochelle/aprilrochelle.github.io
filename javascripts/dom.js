const writeToDom = (input, divId) => {
  $(`#${divId}`).html(input);
};

const createTechCards = (array) => {
  let techCard = '';
  techCard += `<div class="tech-card-div">`;
  array.forEach((tech) => {
    techCard +=   `<div class="tech-card">`;
    techCard +=     `<div class="techpic-div">`;
    techCard +=       `<img class="tech-pic" src="${tech.img}">`;
    techCard +=     `</div>`;
    techCard +=   `</div>`;
  });
  techCard += `</div>`;
  writeToDom(techCard, 'tech-cards');
};

const createBlogPosts = (array) => {
  let blogPost = '';
  array.forEach((blog) => {
    blogPost += `<h3 class="blog-title">${blog.title}</h3>`;
    blogPost += `<h5>${blog.date}</h5>`;
    blogPost += `<p>${blog.post}</p>`;
  });
  writeToDom(blogPost, 'blog-cards');
};

const createProjectCards = (array) => {
  let projectCard = '';
  projectCard += `<div class="container-fluid">`;
  array.forEach((proj) => {
    projectCard +=  `<div class="row proj-row">`;
    projectCard +=    `<div class="col-md-5">`;
    projectCard +=      `<img class="proj-img" src="${proj.thumbnail}" alt="Project Screenshot">`;
    projectCard +=    `</div>`;
    projectCard +=    `<div class="col-md-7">`;
    projectCard +=      `<h2 class="proj-title">${proj.title}</h2>`;
    projectCard +=      `<h4 class="description">${proj.description}</h4>`;
    projectCard +=      `<p><b>Technologies Used:</b> ${proj.technologiesUsed}</p>`;
    projectCard +=      `<a class="proj-btn btn btn-sm" role="button" href="${proj.url}" target="_blank">View Live Demo</a>`;
    projectCard +=      `<a class="proj-btn btn btn-sm" role="button" href="${proj.github}" target="_blank">Explore on Github</a>`;
    projectCard +=    `</div>`;
    projectCard +=    `</div>`;
  });
  projectCard += `</div>`;
  writeToDom(projectCard, 'project-cards');
};

module.exports = {
  createBlogPosts,
  createProjectCards,
  createTechCards,
};
