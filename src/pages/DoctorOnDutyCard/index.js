import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    fontFamily: 'MullerRegular',
  },
  mainCard: {
    position: 'absolute',
    left: '73px',
    right: '32px',
    top: '78px',
    bottom: '52px',
    background: '#FFFFFF',
    border: '3px solid rgba(34, 190, 118, 0.45)',
    boxSizing: 'border-box',
    borderRadius: '24px',
    padding: '38px 100px 48px 32px',

    // width: '100%',
  }
}));

const DoctorOnDutyCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainCard}>
      <div classname={classes.addressPage}>Очередь</div> 
    </div>
  )
}

export default DoctorOnDutyCard;