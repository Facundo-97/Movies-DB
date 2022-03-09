import { types } from "../types/types";

export const navigateToMovie = (movie) => {
    return {
        type: types.NAVIGATE_TO,
        payload: {movie}
    };
};
