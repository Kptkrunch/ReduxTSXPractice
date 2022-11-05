interface RepoState {
    loading: boolean;
    error: string | null;
    data: string[];
}

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

type Action =
    | SearchReposAction
    | SearchReposActionSuccess
    | SearchReposActionError

enum ActionType {
    SEARCH_REPOS = 'search_repos',
    SEARCH_REPOS_SUCCESS = 'search_repos_success',
    SEARCH_REPOS_ERROR = 'search_repos_error'
}

const reducer = (
    state: RepoState,
    action: Action

): RepoState => {
    switch(action.type) {

        case ActionType.SEARCH_REPOS:
            return {loading: true, error: null, data: []};

        case ActionType.SEARCH_REPOS_SUCCESS:
            return {loading: false, error: null, data: action.payload};

        case ActionType.SEARCH_REPOS_ERROR:
            return {loading: false, error: action.payload, data: []};

        default:
            return state;


    }
};

export default reducer;