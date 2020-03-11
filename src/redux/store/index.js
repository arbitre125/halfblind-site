import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = applyMiddleware(createLogger(), thunk);

export default createStore(rootReducer, middleware);
