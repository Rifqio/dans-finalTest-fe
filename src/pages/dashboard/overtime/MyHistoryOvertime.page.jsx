import React from 'react';
import Sidebar from '../../../components/sidebar/Sidebar.component';
import MyHistoryOvertime from '../../../components/overtime/MyHistoryOvertime.component';

function MyHistoryOvertimePage() {
  return (
    <div>
      <Sidebar children={<MyHistoryOvertime />} />
    </div>
  );
}

export default MyHistoryOvertimePage;
