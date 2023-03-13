import { Route, Routes } from 'react-router-dom';
// pages
import LoginPage from './pages/auth/Login.page';
import RegisterPage from './pages/auth/Register.page';
import HomePage from './pages/dashboard/Home.page';
import AbsensiPage from './pages/dashboard/Absensi.page';
import Authenticated from './pages/guard/Authenticated';
import Unauthenticated from './pages/guard/Unauthenticated';
import OvertimePage from './pages/dashboard/Overtime.page';
import CreateOvertimePage from './pages/dashboard/overtime/CreateOvertime.page';
import ShowOvertimePage from './pages/dashboard/overtime/ShowOvertime.page';
import OvertimeHistoryPage from './pages/dashboard/overtime/OvertimeHistory.page';
import PengumumanPage from './pages/dashboard/pengumuman/Pengumuman.page';
import CreatePengumumanPage from './pages/dashboard/pengumuman/CreatePengumuman.page';
import ReimbursmentMenuPage from './pages/dashboard/reimbursment/ReimbursmentMenu.page';
import CreateReimbursmentPage from './pages/dashboard/reimbursment/CreateReimbursment.page';
import ShowAllPengumumanPage from './pages/dashboard/pengumuman/ShowAllPengumuman.page';
import ShowOnePengumumanPage from './pages/dashboard/pengumuman/ShowOnePengumuman.page';
import CreatePengumumanExcelPage from './pages/dashboard/pengumuman/CreatePengumumanExcel.page';
import HRGuard from './pages/guard/HRGuard';
import MyHistoryOvertimePage from './pages/dashboard/overtime/MyHistoryOvertime.page';
import ShowAllReimbursmentPage from './pages/dashboard/reimbursment/ShowAllReimbursment.page';
import ShowHistoryReimbursmentPage from './pages/dashboard/reimbursment/ShowHistoryReimbursment.page';
import MyHistoryReimbursmentPage from './pages/dashboard/reimbursment/MyReimbursmentHistory.page';
import ProfilePage from './pages/dashboard/profile/Profile.page';
import ReimbursmentDetailPage from './pages/dashboard/reimbursment/ReimbursmentDetail.page';

function App() {
  return (
    <Routes>
      <Route element={<Authenticated />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/absensi' element={<AbsensiPage />} />
        <Route path='/overtime' element={<OvertimePage />} />
        <Route path='/overtime/create' element={<CreateOvertimePage />} />
        <Route path='/overtime/myhistory' element={<MyHistoryOvertimePage />} />
        <Route path='/pengumuman' element={<PengumumanPage />} />
        <Route path='/pengumuman/all' element={<ShowAllPengumumanPage />} />
        <Route path='/pengumuman/:id' element={<ShowOnePengumumanPage />} />
        <Route path='/reimbursment' element={<ReimbursmentMenuPage />} />
        <Route path='/reimbursment/create' element={<CreateReimbursmentPage />} />
        <Route path='/reimbursment/myhistory' element={<MyHistoryReimbursmentPage />} />
        <Route path='/reimbursment/:id' element={<ReimbursmentDetailPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        {/* HR Only */}
        <Route element={<HRGuard />}>
          <Route path='/pengumuman/create' element={<CreatePengumumanPage />} />
          <Route path='/pengumuman/create/excel' element={<CreatePengumumanExcelPage />} />
          <Route path='/overtime/all' element={<ShowOvertimePage />} />
          <Route path='/overtime/history' element={<OvertimeHistoryPage />} />
          <Route path='/reimbursment/all' element={<ShowAllReimbursmentPage />} />
          <Route path='/reimbursment/history' element={<ShowHistoryReimbursmentPage />} />
        </Route>
      </Route>

      <Route element={<Unauthenticated />}>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
