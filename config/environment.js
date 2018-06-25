const port = 4000;
const env = process.env.NODE_ENV || 'dev';
const dbURI = `mongodb://localhost/ga-wdi-project-three-${env}`;
const secret = '!%6f.Hxkz3A<4F%S';

module.exports = { port, dbURI, secret };
