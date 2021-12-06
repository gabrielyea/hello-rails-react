import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchUsers = createAsyncThunk('todos/fetchUsers', async () => {
  const {
    data
  } = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return data;
});
const userSlice = createSlice({
  name: 'users',
  initialState: {
    entities: [],
    status: 'idle'
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        const newUsers = {};
        action.payload.forEach((user) => {
          newUsers[user.id] = user;
        });
        state.entities = newUsers;
        state.status = 'idle';
      })
      .addCase(fetchUsers.rejected, (state) => {
        console.log('error');
        state.status = 'idle';
      });
  }
});
export default userSlice.reducer;