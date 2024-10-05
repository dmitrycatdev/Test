import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GitHubListItem, ListRequestParams } from "../definitions/GitHubList";

let count = 0;
const GITHUB_TOKEN = "";

export const api = createApi({
    reducerPath: "api",
    baseQuery:   fetchBaseQuery({
        baseUrl: "https://api.github.com",
        headers: { Authorization: `Bearer ${GITHUB_TOKEN}` }, // GitHub Personal Access Token
    }),
    tagTypes:          ["List"],
    keepUnusedDataFor: 0,
    endpoints:         (builder) => ({
        getGitHubList: builder.query<GitHubListItem[], ListRequestParams>({
            query(params) {
                return {
                    url:    "/events",
                    params: params,
                };
            },
            transformResponse(response: GitHubListItem[]) {
                console.log("getGitHubList requests count:", ++count);
                return response;
            },
        }),
    }),
});

export const { 
    useGetGitHubListQuery, 
    useLazyGetGitHubListQuery, 
} = api;
