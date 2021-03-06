#!/usr/bin/env node

var Twitter = require('twitter');
var Opts = require('commander');

Opts.version('0.0.1')
  .option('-v, --verbose', 'Log some debug info to the console')
  .parse(process.argv);

// Initialize Twitter API keys
var twitterClient = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

// Verify the credentials
twitterClient.get('/account/verify_credentials', function(error, data, response) {

  if(Opts.verbose) {
    console.info("verify_credentials: " + JSON.stringify(response));
  }

});

// Connect to the stream
twitterClient.stream('statuses/sample', {}, function(stream) {
  stream.on('data', function(data) {

    if(Opts.verbose) {
      console.info("stream data: " + JSON.stringify(data));
    }

  });
});

// Handle exit signals
process.on('SIGINT', function(){
  process.exit(1);
});

process.on('exit', function(){
  process.stdout.write("Exiting...");
});
