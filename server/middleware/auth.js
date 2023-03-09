const PocketBase = require('pocketbase');

const pb = new PocketBase('http://localhost:8090');

const auth = {};

auth.signup = async (req, res, next) => {
  const {
    username, email, passwordConfirm, password, name,
  } = req.body;

  // destructuring it in case we want to change data in the future
  const data = {
    emailVisibility: true, username, email, passwordConfirm, password, name,
  };

  const record = await pb.collection('users').create(data);
  res.locals.record = record;
  return next();
};

auth.login = async (req, res, next) => {
  const authData = await pb.collection('users').auth(req.body.username, req.body.password);
  res.locals.authData = authData;
  return next();
};

module.exports = auth;
