import { ActionType } from "../ActionTypes";

interface SearchReposAction {
    type: ActionType.SEARCH_REPOS;
}

interface SearchReposActionSuccess {
    type: ActionType.SEARCH_REPOS_SUCCESS;
    payload: string[];
}

interface SearchReposActionError {
    type: ActionType.SEARCH_REPOS_ERROR;
    payload: string
}

export type Action =
    | SearchReposAction
    | SearchReposActionSuccess
    | SearchReposActionError