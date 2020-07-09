import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typograhpy from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import Job from '../Job/Job';

const useStyles = makeStyles({
    jobsContainer: {
      margin:'0 auto',
      marginTop:'5%'
    },
    jobsList: {
      margin:'0 auto',
      marginTop:'5%',
      display: 'flex',
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'space-around',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    paginator: {
        margin:'0 auto',
        marginTop:'5%',
        display:'flex',
        justifyContent:'center'

    }
  });

export default function Jobs(props) {
    const [page, setPage] = React.useState(1);
    const classes = useStyles();

    const handlePageChange = (event,page) => {
        console.log(props.jobs);
        setPage(page);
    }

    let jobsPerPage = props.jobs.reduce((arr,job,index) => {
        let indexArray = Math.trunc(index / 50);
        if(arr[indexArray] === undefined){
            arr[indexArray] = new Array();
            arr[indexArray].push(<Job job={job} key={index}/>);
        }else{
            arr[indexArray].push(<Job job={job} key={index}/>);
        }
        return arr;
        
    },[]);

    return (
        <div className={classes.jobsContainer}>
            <Typograhpy variant="h3">
                GitHub Jobs
            </Typograhpy>
            <div className={classes.jobsList}>
                {jobsPerPage[(page -1)]}
            </div>
            <div className={classes.paginator}>
                <Pagination  count={jobsPerPage.length} color="primary" page={page} onChange={handlePageChange}/>
            </div>
        </div>
    )
}