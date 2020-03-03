const initialState = {
  userLogged: localStorage.usertoken !== undefined,
  usertoken:
    localStorage.usertoken !== undefined ? localStorage.usertoken : null,
  currentGameId: localStorage.gameId !== undefined ? localStorage.gameId : null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        userLogged: true,
        usertoken: action.payload,
        currentGameId: null
      };
    case "LOGOUT":
      return {
        userLogged: false,
        usertoken: null,
        currentGameId: null
      };
    case "NEW_GAME":
      return {
        ...state,
        currentGameId: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
