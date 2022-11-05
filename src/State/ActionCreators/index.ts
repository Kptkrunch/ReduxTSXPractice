import axios from 'axios';
import { ActionType } from "../ActionTypes";
import { Action } from "../Actions";

const searchRepos = (term: string) => {
    return async (dispatch: any) => {

        dispatch({
            type: ActionType.SEARCH_REPOS,
        });

        try {
            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: term
                }
            })

        } catch ({message}) {
            dispatch({
                type: ActionType.SEARCH_REPOS_ERROR,
                payload: message,
            })
        }
    };
};