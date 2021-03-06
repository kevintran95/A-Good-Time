const jwt = require('jsonwebtoken');

const secret = 'soosorry';
const expiration = '4h';

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      console.log(data)
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ userName, userType, email, password, _id }) {
    const payload = { userName, userType, email, password, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
