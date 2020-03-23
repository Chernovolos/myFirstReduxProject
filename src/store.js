import {createStore} from "redux";
import colorButtonsReducer from "./reducers/colorButtonsReducer";


export const store = createStore(colorButtonsReducer);