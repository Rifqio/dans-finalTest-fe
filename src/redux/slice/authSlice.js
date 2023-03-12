import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../../lib/instance';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';

export const login = createAsyncThunk('user/login', async (data, { rejectWithValue }) => {
  try {
    const res = await instance.post('/login', data);
    const decoded = jwt_decode(res.data.accessToken);
    Cookies.set('token', res.data.accessToken, { expires: 1 });
    return { user: decoded, token: res.data.accessToken };
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const register = createAsyncThunk('user/register', async (data, { rejectWithValue }) => {
  try {
    const res = await instance.post('/register', data);
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const initialState = {
  user: Cookies.get('token') ? jwt_decode(Cookies.get('token')) : null,
  token: Cookies.get('token') || null,
  isLoading: false,
  isError: null,
  isSuccess: false,
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      Cookies.remove('token');
      state.user = null;
      state.token = null;
      state.isLoading = false;
      state.isError = null;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isSuccess = true;
      state.isError = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error;
      state.user = null;
      state.token = null;
      state.isSuccess = false;
    });
    // Register
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isSuccess = true;
      state.isError = null;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error;
      state.user = null;
      state.isSuccess = false;
    });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
