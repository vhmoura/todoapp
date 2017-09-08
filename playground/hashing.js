const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    })
});

var harshedPassword = '$2a$10$/Z0smDrk14poIEF77DZsJeY/GSqx5qweMhY.MChMYO64J639x.P1.';

bcrypt.compare(password, harshedPassword, (err, result) => {
  console.log(result);
});

// var data = {
//     id : 10
// }

// var token = jwt.sign(data, '123abc');
// console.log(token);


// var decoded = jwt.verify(token, '123abc');
// console.log(decoded);


// var message = 'iam user number 3';
// var hash = SHA256(message).toString();

// console.log(`message: ${message}`);
// console.log(`hash: ${hash}`);

// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }


// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash){
//     console.log('data was not changed')
// } else {
//     console.log('data compromised')
// }