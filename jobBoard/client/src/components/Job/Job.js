import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import LocationOn from '@material-ui/icons/LocationOn';
import Business from '@material-ui/icons/Business';
import JobDetails from '../JobDetails/JobDetails';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth:275,
    margin:'10px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function Job({job}) {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const openDetails = () => {
    setDialogOpen(true);
  }

  const handleCloseDetails = () => {
    setDialogOpen(false);
  }

  return (
      <div>
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="subtitle1" component="h1" >
          {job.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            <Business fontSize="small" color="action"/>
          {job.company}
        </Typography>
        <Typography variant="body2" component="p">
            <LocationOn fontSize="small" color="action"/>
          {job.location}
        </Typography>
        <Typography variant="body2" component="p">
          {job.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={openDetails}>Details</Button>
        <Button size="small">
            <ShareIcon fontSize="small" color='action'/>
        </Button>
      </CardActions>
    </Card>
    <JobDetails open={dialogOpen} job={job} handleCloseDetails={handleCloseDetails}/>
    </div>
  );
}

