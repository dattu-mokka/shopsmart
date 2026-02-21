const bcrypt = require('bcrypt');

bcrypt.hash('virat@1234', 10).then(hash => {
  console.log(hash);
});