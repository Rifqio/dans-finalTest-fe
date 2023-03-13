import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../../lib/instance';

export const createReimbursment = createAsyncThunk(
  'reimbursment/create',
  async ({ bukti, keterangan }, { getState, rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('bukti', bukti.get('bukti'));
      formData.append('keterangan', keterangan);
      const res = await instance.post('/reimbursment', formData, {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getReimbursment = createAsyncThunk(
  'reimbursment/get',
  async (_, { getState, rejectWithValue }) => {
    try {
      const res = await instance.get('/reimbursment', {
        headers: { Authorization: `Bearer ${getState().auth.token}` },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getReimbursmentById = createAsyncThunk(
  'reimbursment/getById',
  async (id, { getState, rejectWithValue }) => {
    try {
      const res = await instance.get(`/reimbursment/${id}`, {
        headers: { Authorization: `Bearer ${getState().auth.token}` },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getMyReimbursmentHistory = createAsyncThunk(
  'reimbursment/history',
  async (_, { getState, rejectWithValue }) => {
    try {
      const res = await instance.get('/reimbursment/history', {
        headers: { Authorization: `Bearer ${getState().auth.token}` },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const approveReimbursment = createAsyncThunk(
  'reimbursment/approve',
  async (id, { getState, rejectWithValue }) => {
    try {
      const res = await instance.put(`/reimbursment/approve/${id}`, null, {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const rejectReimbursment = createAsyncThunk(
  'reimbursment/reject',
  async (id, { getState, rejectWithValue }) => {
    try {
      const res = await instance.put(`/reimbursment/reject/${id}`, null, {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
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
  message: null,
};

const reimbursmentSlice = createSlice({
  name: 'overtime',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /**
     * Create Reimbursment
     */
    builder.addCase(createReimbursment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createReimbursment.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isSuccess = true;
      state.isError = null;
    });
    builder.addCase(createReimbursment.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.isSuccess = false;
      state.isError = action.error;
    });
    /**
     * Get Reimbursment
     */
    builder.addCase(getReimbursment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getReimbursment.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isSuccess = true;
      state.isError = null;
    });
    builder.addCase(getReimbursment.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.isSuccess = false;
      state.isError = action.error;
    });
    /**
     * Approve Reimbursment
     */
    builder.addCase(approveReimbursment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(approveReimbursment.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isSuccess = true;
      state.isError = null;
    });
    builder.addCase(approveReimbursment.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.isSuccess = false;
      state.isError = action.error;
    });
    /**
     * Reject Reimbursment
     */
    builder.addCase(rejectReimbursment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(rejectReimbursment.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isSuccess = true;
      state.isError = null;
      state.message = 'Rejected Successfully';
    });
    builder.addCase(rejectReimbursment.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.isSuccess = false;
      state.isError = action.error;
      state.message = null;
    });
    /**
     * Get Reimbursment History
     */
    builder.addCase(getMyReimbursmentHistory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMyReimbursmentHistory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isSuccess = true;
      state.isError = null;
    });
    builder.addCase(getMyReimbursmentHistory.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.isSuccess = false;
      state.isError = action.error;
    });
    /**
     * Get Reimbursment By Id
     */
    builder.addCase(getReimbursmentById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getReimbursmentById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isSuccess = true;
      state.isError = null;
    });
    builder.addCase(getReimbursmentById.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.isSuccess = false;
      state.isError = action.error;
    });
  },
});
export default reimbursmentSlice.reducer;
