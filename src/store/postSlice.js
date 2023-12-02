import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postsData: [],
}

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPost: (state, action) => {
            state.postsData = action.payload;
        },
        addPost: (state, action) => {
            state.postsData.push(action.payload);
        },
        editPost: (state, action) => { 
            state.postsData = state.postsData.map(post => post.$id === action.payload.id ? action.payload.post : post)
        },
        deletePost: (state, action) => { 
            state.postsData = state.postsData.filter(post => post.$id !== action.payload);
        }
    }
});

export const { setPost, addPost, editPost, deletePost } = postSlice.actions;
export default postSlice.reducer;