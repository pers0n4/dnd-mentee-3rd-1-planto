const bcrypt = require("bcrypt");

const saltRounds = 10;
const password = "test";

// STUB
(async () => {
  bcrypt.hash(password, saltRounds, (err, encrypted) => {
    console.log(encrypted);
    console.log(encrypted.length);

    bcrypt.compare(password, encrypted, (err, same) => {
      console.log(same);
    });
  });
})();
