import React from 'react';
import './App.css';
import Jobs from './components/Jobs/Jobs';
import fetch from 'node-fetch';
const url = "http://localhost:3000/jobs"

const fetchJobs = async (url) => {
  let result = await fetch(url);
  let jobs = await result.json();
  return jobs.map((job) => {
      return {title:job.title, company: job.company, 
        location: job.location, description: job.description,
      url: job.url, type: job.type}
  })
}

function App() {
  const [resultJobs, setResultJob] = React.useState([]);

  React.useEffect(() => {
      async function getData() {
        let result = await fetchJobs(url);
        setResultJob(result);
      }
      getData();
  },[]);

  return (
    <div className="App">
      <Jobs jobs={resultJobs}/>
    </div>
  );
}

export default App;
