import React from 'react';
import Sidebar from '../../../components/sidebar/Sidebar.component';
import ShowOnePengumuman from '../../../components/pengumuman/ShowOnePengumuman.component';

function ShowOnePengumumanPage() {
  return (
    <div>
      <Sidebar children={<ShowOnePengumuman />} />
    </div>
  );
}

export default ShowOnePengumumanPage;
