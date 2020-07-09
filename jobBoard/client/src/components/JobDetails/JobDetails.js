import React from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

export default function JobDetails(props) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(props.open);
  },[props.open])

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            <Typography>
                Job details
            </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div dangerouslySetInnerHTML={
                {
                    __html: props.job.description
                }
            }/>
            <Link href={props.job.url} target="_blank" rel="noreferrer">
                Job Url
            </Link>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.handleCloseDetails} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
