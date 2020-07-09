# Job Board
This little aplication was done with the purpose of having a hands on experience while watching a freeCodeCamp tutorial, 
[Plan, Code, and Deploy a Startup in 2 Hours [Full Stack JavaScript Tutorial]](https://www.youtube.com/watch?v=lauywdXKEXI), 
this project is a little bit different from the built in the tutorial since was not following the instructor strictly, but only 
using his lessons to guide my learning.
Its has 3 parts...

## Client
A front-end app made in [ReactJS](https://reactjs.org/) and [Material UI](https://material-ui.com/), to run it in your localhost,
go to your computer terminal and once in the folder jobBoard/client run __yarn install__ to install all de packages that was used in the  project,
after the instalation run __yarn start__, after some time, your application will be ready to be seen in your browser.

## API
A little [Express](http://expressjs.com/) app, with only one endpoint(/jobs) that fetch all the jobs from a [Redis](https://redis.io/) server, 
and send the result back to the client. To run it on you localhost, go to jobBoard/ and run __npm install__ to install all the packages needed to run the back-end,
once its done, go to jobBoard/api and run __node index.js__.

## Worker
The worker is a cron, that every hour fetchs the [GitHub API](https://jobs.github.com/api) to get the jobs posted on GitHub, 
if it succeeds it saves the received data in the Redis server. To run the worker on you localhost, go to jobBoard/worker and run __node index.js__.
Make sure that your Redis server is up and ready to receive connections, if you don't know how to set up a Redis server, 
please hit the link [Redis](https://redis.io/) and follow the instructions.
