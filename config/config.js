var nconf = require('nconf');

nconf.argv().env();

nconf.defaults({
  'MONGOLAB_URI': 'mongodb://192.168.99.100:32770/stream_nodejs',
	'PORT': 8000,
	'GITHUB_CLIENT_ID': 'a13f8bd9bf6759eda389',
	'GITHUB_CLIENT_SECRET': '22d64d8c8e172f860298f242139ad7b54a43ca6b',
	'GITHUB_CALLBACK': '/auth/github/callback',
});

module.exports = nconf;
