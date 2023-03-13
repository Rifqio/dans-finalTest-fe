import { configureStore } from '@reduxjs/toolkit';

// reducers
import authReducer from './slice/authSlice';
import overtimeReducer from './slice/overtimeSlice';
import pengumumanReducer from './slice/pengumumanSlice';
import absensiReducer from './slice/absensiSlice';
import reimbursmentReducer from './slice/reimbursmentSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    overtime: overtimeReducer,
    pengumuman: pengumumanReducer,
    absensi: absensiReducer,
    reimbursment: reimbursmentReducer
  },
});
