import * as AT from "../actions/actionsTypes";

const initialState = {
  availableTickets: "",
  userOrder: "",
  id:0
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
    
    default:
      return state;
  }
};

export default reducer;
