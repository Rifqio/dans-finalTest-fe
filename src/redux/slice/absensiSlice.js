import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../../lib/instance';

export const createCheckin = createAsyncThunk(
  'absensi/checkin',
  async (_, { getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const res = await instance.post(
        '/absen/checkin',
        { id_user: getState().auth.user.user_id },
        { headers: { Authorization: `Bearer ${getState().auth.token}` } }
      );
      return res.data;
    } catch (error) {
      console.log(rejectWithValue(error.response.data.message));
      return rejectWithValue(error.response.data);
    }
  }
);

export const createCheckout = createAsyncThunk(
  'absensi/checkout',
  async (_, { getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const res = await instance.post(
        '/absen/checkout',
        { id_user: getState().auth.user.user_id },
        { headers: { Authorization: `Bearer ${getState().auth.token}` } }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  data: null,
  isLoading: false,
  isError: null,
  isSuccess: false,
};

const absensiSlice = createSlice({
  name: 'absen',
  initialState,
  reducers: {
    resetAbsenState: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = null;
    },
  },
  extraReducers: (builder) => {
    /**
     * Absensi Checkin
     */
    builder.addCase(createCheckin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createCheckin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
      state.isSuccess = true;
    });
    builder.addCase(createCheckin.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.isError = action.error;
      state.isSuccess = false;
    });

    /**
     * Absensi Checkout
     */

    builder.addCase(createCheckout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createCheckout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
      state.isSuccess = true;
    });
    builder.addCase(createCheckout.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.isError = action.error;
      state.isSuccess = false;
    });
  },
});

export const { resetAbsenState } = absensiSlice.actions
export default absensiSlice.reducer;
