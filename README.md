# Twitter Bot Boilerplate
A simple script that demonstrates connecting to Twitter's Streaming API to read from the statuses (aka tweets) firehose. It also lends itself to easy deployment on [Heroku](https://www.heroku.com/).

## Requirements
You must have [Node.js and npm installed](http://nodejs.org/).

## Setup
These steps are Mac OS X oriented, but they should be similar for other platforms.

1. ```npm install``` (install dependencies)
2. ```cp .env.example .env``` (make a real .env)
3. [Create a new "App"](https://apps.twitter.com/) and copy your credentials into .env
4. ```source .env``` (load the Twitter credentials into your environment)
5. ```npm start``` (let the tweets flow!)

## Deployment
This project is ready for deployment on [Heroku](https://www.heroku.com/). Please refer to their instructions for [Getting Started with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs).