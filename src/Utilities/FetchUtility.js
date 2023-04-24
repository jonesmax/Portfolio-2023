const URL = "http://localhost:5000/graphql";

var bcrypt = require('bcryptjs');


const hashPassowrd = async (password) =>{

  bcrypt.genSalt(10, function(err, salt) {
     bcrypt.hash(password, salt, function(err, hash) {
        return hash;
    });
});

};


const fetchQuery = async (query) => {
  try {
    let response = await fetch(URL, {
      headers: { "Content-type": "application/json" },
      method: "post",
      body: JSON.stringify({
        query: query,
      }),
    });
    if (response && response.ok) {
      return await response.json();
    }
    return null;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

module.exports = {
  fetchQuery,hashPassowrd
};
