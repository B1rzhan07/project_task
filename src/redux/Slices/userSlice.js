import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
    const response = axios.get("https://reqres.in/api/users");
    return response.data;
});
const initialState = {
    users: [],
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {


    },
    extraReducers: {
        [fetchUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
        }
    },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;