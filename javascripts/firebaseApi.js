let firebaseConfig = {};

const setConfig = (fbconfig) => {
  firebaseConfig = fbconfig;
};

const getAllBlogs = () => {
  return new Promise((resolve, reject) => {
    const allBlogsArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/blogs/blogs.json`,
    })
      .done((allBlogsObj) => {
        if (allBlogsObj !== null) {
          Object.keys(allBlogsObj).forEach((fbKey) => {
            allBlogsObj[fbKey].id = fbKey;
            allBlogsArray.push(allBlogsObj[fbKey]);
          });
        }
        resolve(allBlogsArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getAllProjects = () => {
  return new Promise((resolve, reject) => {
    const allProjectsArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/projects/projects.json`,
    })
      .done((allProjectsObj) => {
        if (allProjectsObj !== null) {
          Object.keys(allProjectsObj).forEach((fbKey) => {
            allProjectsObj[fbKey].id = fbKey;
            allProjectsArray.push(allProjectsObj[fbKey]);
          });
        }
        resolve(allProjectsArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getAllIcons = () => {
  return new Promise((resolve, reject) => {
    const allIconsArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/tech/technologies.json`,
    })
      .done((allIconsObj) => {
        if (allIconsObj !== null) {
          Object.keys(allIconsObj).forEach((fbKey) => {
            allIconsObj[fbKey].id = fbKey;
            allIconsArray.push(allIconsObj[fbKey]);
          });
        }
        resolve(allIconsArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getAllPics = () => {
  return new Promise((resolve, reject) => {
    const allPicsArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/design/samples.json`,
    })
      .done((allPicsObj) => {
        if (allPicsObj !== null) {
          Object.keys(allPicsObj).forEach((fbKey) => {
            allPicsObj[fbKey].id = fbKey;
            allPicsArray.push(allPicsObj[fbKey]);
          });
        }
        resolve(allPicsArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  setConfig,
  getAllBlogs,
  getAllProjects,
  getAllIcons,
  getAllPics,
};
