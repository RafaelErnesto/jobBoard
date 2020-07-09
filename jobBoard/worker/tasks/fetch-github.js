var fetch = require('node-fetch');
const { promisify } = require("util");
const redis = require("redis");
const client = redis.createClient();

const setAsync = promisify(client.set).bind(client);
const baseUrl = "https://jobs.github.com/positions.json";

module.exports.fetchGithub = async () =>  {
    let page = 0;
    let allJobs = [];
    let resultCount = 1;
    while(resultCount > 0 ){
        const result = await fetch(`${baseUrl}?page=${page}`);
        const jobs = await result.json();
        allJobs.push(...jobs);
        resultCount = jobs.length;
        page++;
    }
    await setAsync('github',JSON.stringify(allJobs));
}
