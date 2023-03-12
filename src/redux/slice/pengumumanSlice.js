import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../../lib/instance';

export const createPengumuman = createAsyncThunk(
  'pengumuman/create',
  async (data, { rejectWithValue, getState }) => {
    try {
      const res = await instance.post(
        '/pengumuman',
        { content: data, user_id: getState().auth.user.user_id },
        { headers: { Authorization: `Bearer ${getState().auth.token}` } }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getPengumuman = createAsyncThunk(
  'pengumuman/get',
  async (_, { rejectWithValue, getState }) => {
    try {
      const res = await instance.get('/pengumuman', {
        headers: { Authorization: `Bearer ${getState().auth.token}` },
      });
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

const pengumumanSlice = createSlice({
  name: 'pengumuman',
  initialState,
  reducers: {
    resetPengumuman: (state) => {
      state.data = null;
      state.isLoading = false;
      state.isError = null;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    /**
     * Create Pengumuman
     */
    builder.addCase(createPengumuman.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createPengumuman.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isSuccess = true;
      state.isError = null;
    });
    builder.addCase(createPengumuman.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.isSuccess = false;
      state.isError = action.error;
    });
    /**
     * Get Pengumuman
     */
    builder.addCase(getPengumuman.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPengumuman.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isSuccess = true;
      state.isError = null;
    });
    builder.addCase(getPengumuman.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.isSuccess = false;
      state.isError = action.error;
    });
  },
});

export const { resetPengumuman } = pengumumanSlice.actions;
export default pengumumanSlice.reducer;
