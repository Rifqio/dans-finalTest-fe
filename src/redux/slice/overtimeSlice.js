import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../../lib/instance';

export const createOvertime = createAsyncThunk(
  'overtime/create',
  async (keterangan, { getState, rejectWithValue }) => {
    try {
      const res = await instance.post(
        '/overtime',
        { keterangan, user_id: getState().auth.user.user_id },
        {
          headers: { Authorization: `Bearer ${getState().auth.token}` },
        },
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getOvertime = createAsyncThunk(
  'overtime/get',
  async (_, { getState, rejectWithValue }) => {
    try {
      const res = await instance.get('/overtime', {
        headers: { Authorization: `Bearer ${getState().auth.token}` },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getOvertimeHistory = createAsyncThunk(
  'overtime/history',
  async (_, { getState, rejectWithValue }) => {
    try {
      const res = await instance.get(`/overtime/history`, {
        headers: { Authorization: `Bearer ${getState().auth.token}` },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const approveOvertime = createAsyncThunk(
  'overtime/approve',
  async (id, { getState, rejectWithValue }) => {
    try {
      const res = await instance.put(
        `/overtime/approve`,
        { id: id },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getState().auth.token}`,
          },
        },
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const rejectOvertime = createAsyncThunk(
  'overtime/reject',
  async (id, { getState, rejectWithValue }) => {
    try {
      const res = await instance.put(
        `/overtime/reject`,
        { id: id },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getState().auth.token}`,
          },
        },
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  data: null,
  isLoading: false,
  isError: null,
  isSuccess: false,
};

const overtimeSlice = createSlice({
  name: 'overtime',
  initialState,
  reducers: {
    resetOvertime: (state) => {
      state.data = null;
      state.isLoading = false;
      state.isError = null;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    /**
     * Create Overtime
     */
    builder.addCase(createOvertime.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createOvertime.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isSuccess = true;
      state.isError = null;
    });
    builder.addCase(createOvertime.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.isSuccess = false;
      state.isError = action.error;
    });
    /**
     * Get Overtime
     */
    builder.addCase(getOvertime.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOvertime.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isSuccess = true;
      state.isError = null;
    });
    builder.addCase(getOvertime.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.isSuccess = false;
      state.isError = action.error;
    });
    builder.addCase(approveOvertime.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(approveOvertime.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isSuccess = true;
      state.isError = null;
    });
    builder.addCase(approveOvertime.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.isSuccess = false;
      state.isError = action.error;
    });

    builder.addCase(rejectOvertime.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(rejectOvertime.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isSuccess = true;
      state.isError = null;
    });
    builder.addCase(rejectOvertime.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.isSuccess = false;
      state.isError = action.error;
    });
    /**
     * Get Overtime History
     */
    builder.addCase(getOvertimeHistory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOvertimeHistory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isSuccess = true;
      state.isError = null;
    });
    builder.addCase(getOvertimeHistory.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.isSuccess = false;
      state.isError = action.error;
    });
  },
});
export const { resetOvertime } = overtimeSlice.actions;
export default overtimeSlice.reducer;
