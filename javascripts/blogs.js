const writeToDom = (input, divId) => {
    document.getElementById(divId).innerHTML += input;
}

const createBlogPosts = (array) => {
    let blogPost= '';
    array.forEach(function(blogObj) {
        blogPost += `<h3 class="proj-id">${blogObj.id}</h3>`;
        blogPost += `<h2 class="proj-title">${blogObj.title}</h2>`;
        blogPost += `<p>${blogObj.date}<p>`;
        blogPost += `<p>${blogObj.post}</p>`;
    });     
    writeToDom(blogPost, "blog");
}

function executeOnLoad() {
    const data = JSON.parse(this.responseText);
    createBlogPosts(data.blogs);
}

function executeIfFail() {
    console.log('Something went wrong.');
}

const startApp = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeOnLoad);
    myRequest.addEventListener('error', executeIfFail);
    myRequest.open("GET", "/db/blogs.json");
    myRequest.send();
}

startApp();