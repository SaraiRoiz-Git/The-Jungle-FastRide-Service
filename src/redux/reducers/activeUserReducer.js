import * as AT from "../actions/actionsTypes";

const initialState = {
  availableTickets: "",
  userOrder: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.ON_ENTER:
      return {
        ...state,
        availableTickets: action.payload
      };
    case AT.ON_SUBMIT:
      return {
        ...state,
        userOrder: action.payload
      };

    case AT.ID:
      return {
        ...state,
        id: action.payload
      };
      case AT.ON_ERROR:
        return {
          ...state,
          error: action.payload
        };

    default:
      return state;
  }
};

export default reducer;
