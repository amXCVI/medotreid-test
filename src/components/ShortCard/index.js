import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginRight: '24px',
  },
  circle: {
    display: 'flex',
    width: '60px',
    height: '60px',
    background: 'rgba(17, 68, 143, 0.122241)',
    borderRadius: '200px',
  },
  texts: {
    display: "flex",
    flexDirection: "column",
    marginLeft: '24px',
    alignSelf: 'center',
  },
  label: {
    fontWeight: 500,
    fontSize: '15px',
    lineHeight: '21px',
    color: '#828D99',
  },
  text: {
    fontSize: '24px',
    lineHeight: '30px',
    color: '#475F7B',
  }
}));

const ShortCard = ({ icon, text, label }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.circle}>
        {icon}
      </div>
      <div className={classes.texts}>
        <div className={classes.label}>{label}</div>
        <div className={classes.text}>{text}</div>
      </div>
    </div>
  )
}

export default ShortCard;