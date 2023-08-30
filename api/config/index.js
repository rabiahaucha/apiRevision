const {createPool} = require('mysql')
const connection = createPool ({
       host: process.env.dbHost,
       database: process.env.dbName,
       user: process.env.dbHostUser,
       passsword: process.env.dbPwd
})
module.exports = connection