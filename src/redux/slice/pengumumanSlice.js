import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../../lib/instance';

export const createPengumuman = createAsyncThunk(
  'pengumuman/create',
  async (data, { rejectWithValue, getState }) => {
    try {
      const res = await instance.post(
        '/pengumuman',
        { content: data, user_id: getState().auth.user.user_id },
        { headers: { Authorization: `Bearer ${getState().auth.token}` } },
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const createPengumumanBulk = createAsyncThunk(
  'pengumuman/create/bulk',
  async (data, { rejectWithValue, getState }) => {
    try {
      const excel = data.map((item) => ({
        title: item.title,
        content: item.pengumuman,
        user_id: getState().auth.user.user_id,
        created_at: Date.now(),
        updated_at: Date.now(),
      }));
      const res = await instance.post('/pengumuman/bulk', excel, {
        headers: { Authorization: `Bearer ${getState().auth.token}` },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
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
  },
);
export const getPengumumanById = createAsyncThunk(
  'pengumuman/getid',
  async (id, { rejectWithValue, getState }) => {
    try {
      const res = await instance.get(`/pengumuman/${id}`, {
        headers: { Authorization: `Bearer ${getState().auth.token}` },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const editPengumuman = createAsyncThunk(
  'pengumuman/edit',
  async ({ id, title, content }, { rejectWithValue, getState }) => {
    try {
      const res = await instance.put(
        `/pengumuman/${id}`,
        { title: title, content: content },
        { headers: { Authorization: `Bearer ${getState().auth.token}` } },
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const deletePengumuman = createAsyncThunk(
  'pengumuman/delete',
  async (id, { rejectWithValue, getState }) => {
    try {
      const res = await instance.delete(`/pengumuman/${id}`, {
        headers: { Authorization: `Bearer ${getState().auth.token}` },
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
    resetSuccess: (state) => {
      state.isSuccess = false;
    },
    resetMessage: (state) => {
      state.message = null;
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
    /**
     * Get Pengumuman By Id
     */
    builder.addCase(getPengumumanById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPengumumanById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isSuccess = true;
      state.isError = null;
    });
    builder.addCase(getPengumumanById.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.isSuccess = false;
      state.isError = action.error;
    });
    /**
     * Edit Pengumuman
     */
    builder.addCase(editPengumuman.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editPengumuman.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isSuccess = true;
      state.isError = null;
      state.message = 'Successfully edited';
    });
    builder.addCase(editPengumuman.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.isSuccess = false;
      state.isError = action.error;
    });
    /**
     * Delete Pengumuman
     */
    builder.addCase(deletePengumuman.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deletePengumuman.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isSuccess = true;
      state.isError = null;
      state.message = 'Successfully deleted';
    });
    builder.addCase(deletePengumuman.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.isSuccess = false;
      state.isError = action.error;
    });
    /**
     * Create Pengumuman Bulk
     */
    builder.addCase(createPengumumanBulk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createPengumumanBulk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isSuccess = true;
      state.isError = null;
      state.message = 'Successfully Uploaded';
    });
    builder.addCase(createPengumumanBulk.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.isSuccess = false;
      state.isError = action.error;
    });
  },
});

export const { resetPengumuman, resetSuccess, resetMessage } = pengumumanSlice.actions;
export default pengumumanSlice.reducer;
