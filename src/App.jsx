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

function App() {
  return (
    <Routes>
      <Route element={<Authenticated />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/absensi" element={<AbsensiPage />} />
        <Route path="/overtime" element={<OvertimePage />} />
        <Route path="/overtime/create" element={<CreateOvertimePage />} />
        <Route path="/overtime/all" element={<ShowOvertimePage />} />
        <Route path="/overtime/history" element={<OvertimeHistoryPage />} />
        <Route path="/pengumuman" element={<PengumumanPage />} />
        <Route path='/pengumuman/create' element={<CreatePengumumanPage />} />
      </Route>
      <Route element={<Unauthenticated />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
