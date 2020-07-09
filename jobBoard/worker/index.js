const {fetchGithub} = require('./tasks/fetch-github');
let CronJob = require('cron').CronJob;
fetchGithub();

let job = new CronJob('*/1 * * * *', fetchGithub(), null, true, 'America/Los_Angeles');
job.start();
