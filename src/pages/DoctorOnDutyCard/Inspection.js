import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Input, Select, MenuItem, InputLabel, Button } from '@material-ui/core';
import StepCard from '../../components/StepCard';
import Check from '../../assets/icons/Check';
import Close from '../../assets/icons/Close';
import Edit from '../../assets/icons/Edit';

import { employes } from '../../constants/employes';

const useStyles = makeStyles((theme) => ({
  mainCard: {
    display: 'flex',
    flexDirection: 'column',
  },
  stepsBlock: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  rightBlock: {
    display: 'flex',
    marginLeft: 'auto',
    flexWrap: 'wrap',
    '@media (max-width: 1700px)': {
      marginLeft: 0,
    },
  },
  divider: {
    borderBottom: '1px dashed #11448F',
    margin: '40px 0',
  },
  bottomBlock: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 1415px)': {
      flexDirection: 'column',
    },
  },
  inspectionResults: {
    width: '45%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    '@media (max-width: 1415px)': {
      width: '100%',
    },
  },
  result: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    '@media (max-width: 1415px)': {
      width: '100%',
    },
  },
  blockTitle: {
    fontSize: '15px',
    lineHeight: '21px',
    textAlign: 'center',
    color: '#828D99',
    marginBottom: '24px',
  },
  resultItem: {
    display: 'flex',
    fontSize: '21px',
    lineHeight: '21px',
    color: '#475F7B',
    alignItems: 'center',
    marginBottom: '26px',
    width: '100%',
  },
  resultLabel: {
    margin: '0 14px 0 12px',
  },
  resultDescription: {
    fontSize: '12px',
    lineHeight: '12px',
    color: '#828D99',
  },
  resultRightBlock: {
    marginLeft: 'auto',
    display: 'flex',
  },
  resultValue: {
    fontSize: '24px',
    lineHeight: '21px',
    textAlign: 'right',
    color: '#22BE76',
    marginRight: '18px',
  },
  link: {
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
      opacity: 0.5,
    },
  },
  resultInput: {
    maxWidth: '65px',
    textAlignLast: 'center',
  },
  resultSelectSuccess: {
    width: '100%',
    marginLeft: '16px',
    border: '1.2px solid #22BE76',
    borderRadius: '8px',
    borderBottom: '1.2px solid #22BE76',
    fontSize: '14px',
    color: '#303030',
    paddingLeft: '8px',
    '&:before': {
      borderBottom: 'none',
    },
    '&:after': {
      borderBottom: 'none',
    },
  },
  resultSelectError: {
    width: '100%',
    marginLeft: '16px',
    border: '1.2px solid #FF1146',
    borderRadius: '8px',
    borderBottom: '1.2px solid #FF1146',
    fontSize: '14px',
    color: '#303030',
    paddingLeft: '8px',
    '&:before': {
      borderBottom: 'none',
    },
    '&:after': {
      borderBottom: 'none',
    },
  },
  resultSelectLabel: {
    marginLeft: '45px',
    marginTop: '-12px',
    fontSize: '14px',
    lineHeight: '18px',
    color: '#828D99',
  },
  resultButtons: {
    width: '100%',
    textAlign: 'center',
    marginTop: '46px',
  },
  buttonSuccess: {
    background: '#E4F7EE',
    color: '#22BE76',
  }, buttonError: {
    background: '#FFE7ED',
    color: '#FF1146',
  },
  turn: {
    width: '100%',
    textAlign: 'center',
    marginTop: '8px',
    fontSize: '16px',
    lineHeight: '26px',
    color: 'rgba(71, 95, 123, 0.5)',
  },
  currentEmployee: {
    color: '#22BE76',
  }
}));

const Inspection = ({ employee, subscribeEmployee, total, nextEmployee, employeeIndex, setResult, result }) => {
  const classes = useStyles();
  const wrapperRef = useRef(null);

  const [ad, setAd] = useState(employee.ad);
  const [promille, setPromille] = useState(employee.promille);
  const [temp, setTemp] = useState(employee.temp);

  const [isEditAd, setIsEditAd] = useState(false);
  const [isEditPromille, setIsEditPromille] = useState(false);
  const [isEditTemp, setIsEditTemp] = useState(false);


  const setAllInputsFalse = () => {
    setIsEditAd(false);
    setIsEditPromille(false);
    setIsEditTemp(false);
  }

  const useOutsideClicker = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setAllInputsFalse();
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const onClickSubscribe = () => {
    subscribeEmployee(employee.id, employeeIndex);
  }


  useOutsideClicker(wrapperRef);

  const changeResult = (e) => {
    setResult(e);  
  }
  return (
    <div className={classes.mainCard}>
      <div className={classes.stepsBlock}>
        <StepCard
          image={employee.avatar}
          label="Архивное фото"
          name={employee.name}
          position={employee.position}
        />
        <div className={classes.rightBlock}>
          <StepCard
            image={employee.avatar}
            label="«Аутентификация»"
          />
          <StepCard
            image={employee.avatar}
            label="«АД»"
          />
          <StepCard
            image={employee.avatar}
            label="«Промилле»"
          />
        </div>
      </div>
      <div className={classes.divider} />
      <div className={classes.bottomBlock}>
        <div className={classes.inspectionResults}>
          <div className={classes.blockTitle}>Результаты осмотра</div>
          <div className={classes.resultItem}>
            <Check />
            <div className={classes.resultLabel}>Жалоб нет</div>
          </div>
          <div className={classes.resultItem}>
            {parseInt(ad) > 107 && parseInt(ad) < 140 && parseInt(ad.split('/')[1]) > 74 && parseInt(ad.split('/')[1]) < 89 ? <Check /> : <Close />}
            <div className={classes.resultLabel}>АД</div>
            <div className={classes.resultDescription}>(108/75 - 139/88)</div>
            <div className={classes.resultRightBlock}>
              <div className={classes.resultValue}>{isEditAd
                ? <Input className={classes.resultInput} onChange={(e) => setAd(e.target.value)} defaultValue={ad} ref={wrapperRef} autoFocus />
                : ad
              }</div>
              <div className={classes.link} onClick={() => setIsEditAd(!isEditAd)}><Edit /></div>
            </div>
          </div>
          <div className={classes.resultItem}>
            {promille < 0.36 ? <Check /> : <Close />}
            <div className={classes.resultLabel}>Промилле</div>
            <div className={classes.resultDescription}>(до 0,35%)</div>
            <div className={classes.resultRightBlock}>
              <div className={classes.resultValue}>{isEditPromille
                ? <Input className={classes.resultInput} onChange={(e) => setPromille(e.target.value)} defaultValue={promille} ref={wrapperRef} autoFocus />
                : promille
              }</div>
              <div className={classes.link} onClick={() => setIsEditPromille(!isEditPromille)}><Edit /></div>
            </div>
          </div>
          <div className={classes.resultItem}>
            {temp > 35.7 && temp < 37.7 ? <Check /> : <Close />}
            <div className={classes.resultLabel}>Температура</div>
            <div className={classes.resultDescription}>(35,8 - 37,6°C)</div>
            <div className={classes.resultRightBlock}>
              <div className={classes.resultValue}>
                {isEditTemp
                  ? <Input className={classes.resultInput} onChange={(e) => setTemp(e.target.value)} defaultValue={temp} ref={wrapperRef} autoFocus />
                  : temp
                }
              </div>
              <div className={classes.link} onClick={() => setIsEditTemp(!isEditTemp)}><Edit /></div>
            </div>
          </div>
        </div>
        <div className={classes.result}>
          <div className={classes.blockTitle}>Итог</div>
          <div className={classes.resultItem}>
            {result ? <Check /> : <Close />}
            <Select
              labelId="result"
              id="result"
              value={result}
              onChange={(e) => changeResult(e.target.value)}
              label="Age"
              className={result ? classes.resultSelectSuccess : classes.resultSelectError}
            >
              <MenuItem value={true}>Допущен к работе</MenuItem>
              <MenuItem value={false}>Не допущен к работе</MenuItem>
            </Select>
          </div>
          {result
            ? <InputLabel id="result" className={classes.resultSelectLabel}>Сотрудник допущен к работе (направлен на смену)</InputLabel>
            : <InputLabel id="result" className={classes.resultSelectLabel}>Сотрудник не допущен к работе и направлен в медицинское учреждение для дальнейшей диагностики и лечения</InputLabel>
          }
          <div className={classes.resultButtons}>
            <Button className={classes.buttonSuccess} onClick={onClickSubscribe}>Подписать</Button>
            <Button className={classes.buttonError} onClick={() => nextEmployee(employee.id + 1)}>Следующий</Button>
          </div>
          <div className={classes.turn}>
            <span className={classes.currentEmployee}>{employeeIndex + 1}</span> из {total}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inspection;