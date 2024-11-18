import React from 'react';
import ChartComponent from './Chart';
import ChartE from './ChartE';
import Project from './Projects';
import Student from './Student';

function Dashboard() {
  return (
    <div style={{ display: 'flex', gap: '50px', padding: '20px' }}>
      <div style={{ display: 'grid', gap: '50px' }}>
        <ChartComponent />
        <ChartE />
      </div>
      {/* <div>
        <center>
          <img src='company_management_app_logo.svg' alt='Company Management App Logo' style={{ width: '200px', height: '200px' }} />
        </center>
      </div> */}
      <div style={{ display: 'grid', gap: '50px', paddingLeft: '180px' }}>
        <Project />
        <Student />
      </div>
    </div>
  );
}

export default Dashboard;
