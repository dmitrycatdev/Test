import { GitHubListItem } from "@/definitions/GitHubList";

export const FirstStackName = "FirstStack";

export enum AppRouteNames {
    First = "First",
    FirstDetail = "FirstDetail",
}

export type AppStackParamList = {
    [AppRouteNames.First]: object | undefined;
    [AppRouteNames.FirstDetail]: {details: GitHubListItem};
};