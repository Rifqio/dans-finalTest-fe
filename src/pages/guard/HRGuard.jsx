import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function HRGuard() {
  const { user } = useSelector((state) => state.auth);
  return user?.role_id === 2 ? <Outlet /> : <Navigate to="/" />;
}

export default HRGuard;
