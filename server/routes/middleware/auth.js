// const jwt = require('jsonwebtoken');
// const secret = require('../../config/auth').secret;

// module.exports = (request, res, next) => {
//     const [token_type, jwt_token] = request.headers['authorization'].split(' ');

//     console.log("token_type: " + token_type);
//     console.log("jwt_token: " + jwt_token);

//     try {
//         let user = jwt.verify(jwt_token, secret);
//     } catch (e) {
//         if (e instanceof jwt.JsonWebTokenError) {
//             return res.status(401).json({ status: 'User unauthorized' }).end()
//         }
//         return res.status(400).end()
//     }

//     next();
// };