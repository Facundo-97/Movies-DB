import { types } from "../types/types";

/* ACTION REDUCER */
const navigateAction = {
    movie: {}
  };

export const actionReducer = (state = navigateAction, action) => {
    switch (action.type) {

        case types.NAVIGATE_TO:
            return {
                movie: action.payload.movie
            }

        default:
            return state;

    }
}