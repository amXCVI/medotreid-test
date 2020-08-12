import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Inspection from './Inspection';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    marginTop: '55px',
    position: 'relative',
  },
  tabs: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '16px',
    textAlign: 'center',
    color: '#11448F',
  },
  tab: {
    background: '#F6F9FC',
    border: '1px solid #7996C0',
    borderRadius: '8px 0px 0px 8px',
    marginBottom: '6px',
    textTransform: 'none',
    width: '180px',
  },
  tabPanel: {
    position: 'absolute',
    left: '180px',
    right: 0,
    bottom: 0,
    top: 0,
    background: '#FFFFFF',
    border: '1px solid #11448F',
    borderRadius: '0 8px 8px 8px',
    marginLeft: '-1px',
    padding: '4px 28px 4px 18px',
    overflow: 'auto',
  }
}));

const VerticalTabs = ({ employee, subscribeEmployee, total, nextEmployee, employeeIndex, setResult, result }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  const a11yProps = (index) => {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        className={classes.tabs}
      >
        <Tab label="Осмотр" {...a11yProps(0)} className={classes.tab} />
        <Tab label="Видео" {...a11yProps(1)} className={classes.tab} />
        <Tab label="Подпись" {...a11yProps(2)} className={classes.tab} />
        <Tab label="Карточка сотрудника" {...a11yProps(3)} className={classes.tab} />
        <Tab label="История" {...a11yProps(4)} className={classes.tab} />
        <Tab label="Документы" {...a11yProps(5)} className={classes.tab} />
      </Tabs>
      <TabPanel value={value} index={0} className={classes.tabPanel}>
        <Inspection
          employee={employee}
          subscribeEmployee={subscribeEmployee}
          total={total}
          nextEmployee={nextEmployee}
          employeeIndex={employeeIndex}
          setResult={setResult}
          result={result}
        />
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabPanel}>
        Здесь будет видео
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabPanel}>
        Подпись
      </TabPanel>
      <TabPanel value={value} index={3} className={classes.tabPanel}>
        Карточка сотрудника
      </TabPanel>
      <TabPanel value={value} index={4} className={classes.tabPanel}>
        История
      </TabPanel>
      <TabPanel value={value} index={5} className={classes.tabPanel}>
        Документы
      </TabPanel>
    </div>
  );
}

export default VerticalTabs;