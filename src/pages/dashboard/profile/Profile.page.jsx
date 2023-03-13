import React from 'react';
import Sidebar from '../../../components/sidebar/Sidebar.component';
import ProfileComponent from '../../../components/profile/Profile.component';

function ProfilePage() {
  return (
    <div>
      <Sidebar children={<ProfileComponent />} />
    </div>
  );
}

export default ProfilePage;
