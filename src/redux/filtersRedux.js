/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const ADD_TAGS = createActionName('ADD_TAGS');
export const REMOVE_TAGS = createActionName('REMOVE_TAGS');
export const CHANGE_FROM_DURATION = createActionName('CHANGE_FROM_DURATION');
export const CHANGE_TO_DURATION = createActionName('CHANGE_TO_DURATION');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const changeFromDuration = payload => ({ payload, type: CHANGE_FROM_DURATION });
export const changeToDuration = payload => ({ payload, type: CHANGE_TO_DURATION });
export const addTags = payload => ({ payload, type: ADD_TAGS });
export const removeTags = payload => ({ payload, type: REMOVE_TAGS });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    case CHANGE_FROM_DURATION:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };  
      
    // TODO - handle other action types
    default:
      return statePart;
  }
}
