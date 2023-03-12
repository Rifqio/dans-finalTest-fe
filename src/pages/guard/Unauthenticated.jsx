import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function Unauthenticated() {
  const { user } = useSelector((state) => state.auth);
  return !user ? <Outlet /> : <Navigate to="/" />;
}

export default Unauthenticated;
