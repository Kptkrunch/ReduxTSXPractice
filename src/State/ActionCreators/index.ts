import axios from 'axios';
import { Dispatch } from "redux";
import { ActionType } from "../ActionTypes";
import { Action } from "../Actions";

export const searchRepos = (term: string) => {
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

            const names = data.objects.map((result: any) => {
                return result.package.name;
            });

            dispatch({
                type: ActionType.SEARCH_REPOS_SUCCESS,
                payload: names
            })

        } catch ({message}) {
            dispatch({
                type: ActionType.SEARCH_REPOS_ERROR,
                payload: message,
            })
        }
    };
};