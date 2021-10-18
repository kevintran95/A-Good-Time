const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  signToken: function ({ userName, type, email, password }) {
    const payload = { userName, type, email, password };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
