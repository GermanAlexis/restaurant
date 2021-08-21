const mongoose = require('mongoose');
const dbconnetion = async () => {

    try {
        await mongoose.connect(process.env.DB_URI,
        { useNewUrlParser: true, 
          useUnifiedTopology: true,
          useCreateIndex: true
        });   
        console.log('Database: \x1b[32m%s\x1b[0m', 'online');
    } catch (error) {
        console.log('read next error', error);
        throw new Error('inital BD Errors');
    }
}
module.exports = {
    dbconnetion
}