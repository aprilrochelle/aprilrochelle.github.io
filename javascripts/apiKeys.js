const {setConfig,} = require('./firebaseApi');
const {getAllBlogsEvent,} = require('./events');

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
    })
    .catch((err) => {
      console.error('no keys: ', err);
    });
};

module.exports = {
  retrieveKeys,
};
