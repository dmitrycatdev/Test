import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { GitHubListItem } from "@/definitions/GitHubList";
import { api } from "@/api";

const initialState: {list: GitHubListItem[]} = {
    list: [],
};

export const firstSlice = createSlice({
    name:     "first",
    initialState,
    reducers: {
        setList: (state, action) => {
            state.list = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            api.endpoints.getGitHubList.matchFulfilled,
            (state, { payload }) => {
                state.list = payload;
            },
        );
    },
});

export const { setList } = firstSlice.actions;

export const selectList = (state: RootState) => state.first.list;

export default firstSlice.reducer;