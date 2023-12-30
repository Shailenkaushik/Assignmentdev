// // const request = require('supertest');
// // const assert = require('assert');
// const express = require('express');
// const jwt = require('jsonwebtoken');
// const jwtPassword = 'secret';
// const zod=require('zod');
// const app = express();
// let errorCount = 0;
// app.use(express.json());
// // You have been given an express server which has a few endpoints.
// // Your task is to
// // 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// // 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint



// app.get('/user', function(req, res) {

//    const token=req.headers.authorization;
//   const response= verifyJwt(token);
//   if(response){
//     res.status(200).json({ msg:"user logged in successfully"});
//   }
//   else{
//     res.status(401).json({ msg:"Invalid credentails"});
//   }
//   // throw new Error("User not found");
  
// });

// app.post('/user', function(req, res) {
//   console.log(req.body);
//   const token=signJwt(req.body.username,req.body.password);
  
//   if(token!=null)
//   res.status(200).json({ msg: 'created dummy user',token });
//   else
//     res.status(401).json({ msg: 'invalid credentials' });
// });

// app.get('/errorCount', function(req, res) {
  
//   res.status(200).json({ errorCount });

// });
// // /**
//  // * Generates a JWT for a given username and password.
//  // *
//  // * @param {string} username - The username to be included in the JWT payload.
//  // *                            Must be a valid email address.
//  // * @param {string} password - The password to be included in the JWT payload.
//  // *                            Should meet the defined length requirement (e.g., 6 characters).
//  // * @returns {string|null} A JWT string if the username and password are valid.
//  // *                        Returns null if the username is not a valid email or
//  // *                        the password does not meet the length requirement.
//  // */
// const schema=zod.object({
//   username:zod.string().email(),
//   uassword:zod.string().min(6)
 
// })


// function signJwt(username, password) {
//     // Your code here
//     const data={username:username,uassword:password};
//    const response=schema.safeParse(data);
//   if(response.success){
//     const token=jwt.sign({data},jwtPassword);
//     return token;
//   }
//   else{
//     errorCount++;
//     return null;
//   }

// }

// /**
//  * Verifies a JWT using a secret key.
//  *
//  * @param {string} token - The JWT string to verify.
//  * @returns {boolean} Returns true if the token is valid and verified using the secret key.
//  *                    Returns false if the token is invalid, expired, or not verified
//  *                    using the secret key.
//  */
// function verifyJwt(token) {
//     // Your code 
//     try{
//       const decoded=jwt.verify(token,jwtPassword);
//        console.log(decoded.data);
//       return true;
//     }
//   catch{
//     errorCount++;
//     return false;
//   }
     
  
// }

// /**
//  * Decodes a JWT to reveal its payload without verifying its authenticity.
//  *
//  * @param {string} token - The JWT string to decode.
//  * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
//  *                         Returns false if the token is not a valid JWT format.
//  */
// function decodeJwt(token) {
  
//   // Your code here
//   try{
//     const decoded=jwt.verify(token,jwtPassword);
  
//      return decoded.data;
//   }
//   catch{
//     errorCount++;
//     return false;
//   }
 
// }


// module.exports = {
//   signJwt,
//   verifyJwt,
//   decodeJwt,
//   jwtPassword,
// };
// app.listen(3000);
const jwt = require('jsonwebtoken');
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if (!usernameResponse.success || !passwordResponse.success) {
        return null;
    }

    const signature = jwt.sign({
        username
    }, jwtPassword);

    return signature;
}

function verifyJwt(token) {
    let ans = true;
    try {
       jwt.verify(token, jwtPassword);
    } catch(e) {
       ans = false;
    }
    return ans;
}

function decodeJwt(token) {
    // true, false
    const decoded = jwt.decode(token);
    if (decoded) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword
}