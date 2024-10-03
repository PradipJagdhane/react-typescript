import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getUsers from "../../services/userServices";


interface UserState {
    users: any[];
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    users:[],
    loading: false,
    error: null,
};


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await getUsers();
    return response;
});


const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending,(state, action) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchUsers.fulfilled,(state, action) => {
            state.loading = false;
            state.users = action.payload;
        })
        .addCase(fetchUsers.rejected,(state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to user data';
        });
    }
})

export default userSlice.reducer;