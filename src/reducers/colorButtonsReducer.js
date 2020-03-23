const initialState = {
    color: null
};

export default (state = initialState, action ) => {
    let {type, payload} = action;

    switch (type) {
        case "SET_COLOR":
            console.log("%c CURRENT COLOR ", "font-size: 18px;color: " + state.color);
            console.log("%c NEW COLOR ", "font-size: 18px;color: " + action.payload);
            return {...state, color: payload};

        case "RESET":
            return initialState;
        default:
            return state;
    }
};