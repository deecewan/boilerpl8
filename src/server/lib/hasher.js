import bcrypt from 'bcrypt';

const SALT_ROUNDS = process.env.SALT_ROUNDS || 12;

function genSalt() {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
      // istanbul ignore if
      if (err) {
        return reject(err);
      }
      return resolve(salt);
    });
  });
}

function genHash(password, salt) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        return reject(err);
      }

      return resolve(hash);
    });
  });
}

function hashPassword(password) {
  return new Promise(resolve => {
    if (password === null) {
      return resolve(null);
    }
    return resolve(genSalt()
      .then(salt => genHash(password, salt)));
  });
}

function verify(password, hash) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, same) => {
      if (err) {
        return reject(err);
      }
      if (!same) {
        return reject(new Error('Passwords do not match'));
      }
      return resolve();
    });
  });
}

export {
  genSalt,
  genHash,
  hashPassword,
  verify,
};
