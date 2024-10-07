export interface GitHubListItem {
    id: number
    actor: {
        display_login: string
        avatar_url: string
    }
}

export interface ListRequestParams {
    per_page: number
    page: number
}
