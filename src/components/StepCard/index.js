import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  mainCard: {
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    width: '200px',
    height: '200px',
    borderRadius: '8px',
  },
  step: {
    fontWeight: 500,
    fontSize: '15px',
    lineHeight: '21px',
    textAlign: 'center',
    color: '#828D99',
    marginTop: '16px',
    marginBottom: '4px',
  },
  label: {
    fontSize: '21px',
    lineHeight: '26px',
    textAlign: 'center',
    color: '#475F7B',
  },
  mainBlock: {
    display: 'flex',
    marginRight: '16px',
    marginBottom: '8px',
  },
  rightBlock: {
    marginLeft: '26px',
    marginTop: '40px',
    maxWidth: '180px',
  },
  name: {
    fontSize: '21px',
    lineHeight: '26px',
    color: '#475F7B',
    marginBottom: '8px',
  },
  position: {
    fontSize: '15px',
    lineHeight: '21px',
    color: '#828D99',
  }
}));

const StepCard = ({ image, label, name, position }) => {
  const classes = useStyles();
  return (
    <div className={classes.mainBlock}>
      <div className={classes.mainCard}>
        <img src={image} alt="" className={classes.image} />
        <div className={classes.step}>шаг</div>
        <div className={classes.label}>{label}</div>
      </div>
      {(name || position) &&
        <div className={classes.rightBlock}>
          <div className={classes.name}>{name}</div>
          <div className={classes.position}>{position}</div>
        </div>
      }
    </div>
  )
}

export default StepCard;