import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import reducer from "./reducer";

const middleware = applyMiddleware(createLogger());

export default createStore(reducer, middleware);
