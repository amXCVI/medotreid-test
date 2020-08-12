import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import ShortCard from '../../components/ShortCard';

import Terminal from '../../assets/icons/Terminal';
import Finish from '../../assets/icons/Finish';
import Start from '../../assets/icons/Start';
import Data from '../../assets/icons/Data';
import VerticalTabs from './VerticalTabs';

import { employes } from '../../constants/employes';

const useStyles = makeStyles((theme) => ({
  mainCard: {
    display: 'flex',
    flexDirection: 'column',
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
  },
  addressPage: {
    fontSize: '18px',
    lineHeight: '22px',
    color: '#303030',
  },
  addressPageLight: {
    color: '#828D99',
  },
  mainBlock: {
    marginLeft: '98px',
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  shortCardsBlock: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  rightBlockCards: {
    display: 'flex',
    marginLeft: 'auto',
    flexWrap: 'wrap',
    '@media (max-width: 1112px)': {
      width: '100%',
    },
  },
  errorCard: {
    border: '2px solid rgba(255, 17, 70, 0.388849)',
  }
}));

const DoctorOnDutyCard = () => {
  const classes = useStyles();

  const [allEmployes, setAllEmployes] = useState(employes);
  const [employeeId, setEmployeeId] = useState(0);
  const [employeeIndex, setEmployeeIndex] = useState(0);

  const [result, setResult] = useState(true);

  const nextEmployee = (id) => {
    if (id === allEmployes.length) {
      setEmployeeId(0);
      setEmployeeIndex(0);
    } else {
      if (allEmployes[id].isSubscribe) {
        nextEmployee(id + 1)
      } else {
        setEmployeeId(id);
        setEmployeeIndex(employeeIndex + 1);
      }
    }
  }

  const subscribeEmployee = (id, index) => {
    setAllEmployes([...allEmployes.map((item) => {
      if (item.id !== id) {
        return item;
      } else {
        return { ...item, isSubscribe: true }
      }
    })]);
    nextEmployee(id + 1);
    setEmployeeIndex(employeeIndex)
  }

  return (
    <div className={clsx(classes.mainCard, !result && classes.errorCard)}>
      <div className={classes.addressPage}>
        Очередь
        <span className={classes.addressPageLight}> / 20.01.20 {allEmployes[employeeId].name}</span>
      </div>
      <div className={classes.mainBlock}>
        <div className={classes.shortCardsBlock}>
          <ShortCard
            icon={<Terminal />}
            text="238KIO"
            label="Терминал"
          />
          <div className={classes.rightBlockCards}>
            <ShortCard
              icon={<Data />}
              text="20.01.20"
              label="Дата"
            />
            <ShortCard
              icon={<Start />}
              text="08:00"
              label="Начало"
            />
            <ShortCard
              icon={<Finish />}
              text="08:07"
              label="Окончание"
            />
          </div>
        </div>
        <VerticalTabs
          employee={allEmployes[employeeId]}
          subscribeEmployee={subscribeEmployee}
          total={allEmployes.filter((item) => !item.isSubscribe).length}
          nextEmployee={nextEmployee}
          employeeIndex={employeeIndex}
          setResult={setResult}
          result={result}
        />
      </div>
    </div>
  )
}

export default DoctorOnDutyCard;