const writeToDom = (input, divId) => {
    document.getElementById(divId).innerHTML += input;
}

const createProjectCards = (array) => {
    let projectCard = '';
    array.forEach(function(projectObj) {
        projectCard += `<h3 class="proj-id">${projectObj.id}</h3>`;
        projectCard += `<h2 class="proj-title">${projectObj.title}</h2>`;
        projectCard += `<img src="${projectObj.imageUrl}" width="300">`;
        projectCard += `<p>${projectObj.description}</p>`;
        projectCard += `<p><a href="${projectObj.githubUrl}" target="_blank">Explore on Github</a></p>`;
    });
        
    writeToDom(projectCard, "project");
}

function executeOnLoad() {
    const data = JSON.parse(this.responseText);
    createProjectCards(data.projects);
}

function executeIfFail() {
    console.log('Something went wrong.');
}

const startApp = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeOnLoad);
    myRequest.addEventListener('error', executeIfFail);
    myRequest.open("GET", "/db/projects.json");
    myRequest.send();
}

startApp();