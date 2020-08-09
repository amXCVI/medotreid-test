import React from 'react';
import Sidebar from '../components/Sidebar';
import DoctorOnDutyCard from './DoctorOnDutyCard';

const MainApp = () => {
  return (
    <div>
      <Sidebar />
      <DoctorOnDutyCard />
    </div>
  ) 
}

export default MainApp;