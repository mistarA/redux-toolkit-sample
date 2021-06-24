import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { client } from '../../api/client';
import { SEARCH_URL_PATH } from '../../api/constants';

const initialState = {
  items: [],
  status: 'idle',
  error: '',
};

export const fetchItems = createAsyncThunk(
  'searchlist/fetchItems',
  async query => {
    const response = await client.get(SEARCH_URL_PATH, { q: query });
    return response.items;
  },
);

export const slice = createSlice({
  name: 'searchlist',
  initialState,
  reducers: {
    reset: state => {
      state.items = [];
      state.status = 'idle';
      state.error = '';
    },
  },
  extraReducers: {
    [fetchItems.pending]: state => {
      state.status = 'pending';
    },
    [fetchItems.rejected]: (state, action) => {
      state.error = action.error.message;
      state.status = 'rejected';
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.items = state.items.concat(action.payload);
    },
  },
});

export const { reset } = slice.actions;

export default slice.reducer;
