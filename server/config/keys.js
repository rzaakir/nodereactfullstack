if (process.env.NODE_ENV === 'production') {
    // production
    console.log(process.env.NODE_ENV);
    module.exports = require('./prod');
} else {
    // dev
    console.log(process.env.NODE_ENV);   
    module.exports = require('./dev');
}