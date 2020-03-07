import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducers";

const middleware = applyMiddleware(createLogger(), thunk);

export default createStore(reducer, middleware);
