import { UPDATE_SEARCH_CONTENT } from '../actions/actiontypes';
const initialState = '';

export const searchContents (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_CONTENT:
      return action.payload.content;
    default:
      return state;
  }
}
