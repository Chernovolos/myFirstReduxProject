import React from "react";
import {connect} from "react-redux";

const MyButton = ({changeCurrentColor, text, colorToSet, currentColor}) => {

    let btnColor = currentColor === null? colorToSet: currentColor;

    return (
        <button onClick={() => changeCurrentColor(colorToSet)}
                className={`btn btn-${btnColor}`}>
            {text}
        </button>
    );
};

export default connect(
    state => ({
        currentColor: state.color
    }),
    dispatch => ({
        changeCurrentColor: (colorToSet) => dispatch({type: "SET_COLOR", payload: colorToSet})
    })
)(MyButton);