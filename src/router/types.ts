import { GitHubListItem } from "@/definitions/GitHubList";

export const FirstStackName = "FirstStack";

export enum AppRouteNames {
    First = "First",
    FirstDetail = "FirstDetail",
    Second = "Second",
}

export type AppStackParamList = {
    [AppRouteNames.First]: object | undefined;
    [AppRouteNames.FirstDetail]: {details: GitHubListItem};
    [AppRouteNames.Second]: object | undefined;

};