const {setConfig,} = require('./firebaseApi');
const {getAllBlogsEvent, getAllProjectsEvent, getAllTechIcons, getAllDesignPics,} = require('./events');

const apiKeys = () => {
  return new Promise((resolve, reject) => {
    $.ajax('./db/apiKeys.json')
      .done((data) => {
        resolve(data.apiKeys);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const retrieveKeys = () => {
  apiKeys()
    .then((results) => {
      firebase.initializeApp(results.firebase);
      setConfig(results.firebase);
      getAllBlogsEvent();
      getAllProjectsEvent();
      getAllTechIcons();
      getAllDesignPics();
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = {
  retrieveKeys,
};
