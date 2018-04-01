var projects = [
    {
        id: "project1", 
        title: "Cool Project 1", 
        imageUrl: "https://picsum.photos/200", 
        description: "This is the best project",
        githubUrl: "https://github.com/aprilrochelle/aprilrochelle.github.io"
    },
    {
        id: "project2", 
        title: "Cool Project 2", 
        imageUrl: "https://picsum.photos/200?image=1081", 
        description: "This is the best project",
        githubUrl: "https://github.com/aprilrochelle/aprilrochelle.github.io"
    },
    {
        id: "project3", 
        title: "Cool Project 3", 
        imageUrl: "https://picsum.photos/200?image=1067", 
        description: "This is the best project",
        githubUrl: "https://github.com/aprilrochelle/aprilrochelle.github.io"
    },
    {
        id: "project4", 
        title: "Cool Project 4", 
        imageUrl: "https://picsum.photos/200?image=1069", 
        description: "This is the best project",
        githubUrl: "https://github.com/aprilrochelle/aprilrochelle.github.io"
    },
    {
        id: "project5", 
        title: "Cool Project 5", 
        imageUrl: "https://picsum.photos/200?image=979", 
        description: "This is the best project",
        githubUrl: "https://github.com/aprilrochelle/aprilrochelle.github.io"
    },
    {
        id: "project6", 
        title: "Cool Project 6", 
        imageUrl: "https://picsum.photos/200?image=953", 
        description: "This is the best project",
        githubUrl: "https://github.com/aprilrochelle/aprilrochelle.github.io"
    }
  ];

const writeToDom = (input, divId) => {
    document.getElementById(divId).innerHTML += input;
}

const createProjectCards = (array) => {
    var projectCard = '';
    array.forEach(function(projectObj) {
        projectCard += `<h3 class="proj-id">${projectObj.id}</h3>`;
        projectCard += `<h2 class="proj-title">${projectObj.title}</h2>`;
        projectCard += `<img src="${projectObj.imageUrl}" width="300">`;
        projectCard += `<p>${projectObj.description}</p>`;
        projectCard += `<p><a href="${projectObj.githubUrl}" target="_blank">Explore on Github</a></p>`;
    });
        
    writeToDom(projectCard, "project");
}

createProjectCards(projects);