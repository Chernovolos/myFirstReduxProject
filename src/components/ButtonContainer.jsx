import React from "react";
import MyButton from "./MyButton";
import {connect} from "react-redux";
import "../assets/myCSS/Button.css";

const ButtonContainer = ({ color, reset }) => {

    let colorText = color === null? "UNSET": color.toUpperCase();
    let colorTextColor = color === null? "gray": color;

    return (
        <>
            <h3>CURRENT COLOR IS <span style={{color: colorTextColor}}>{colorText}</span></h3>
            <MyButton colorToSet="red" text="Set Red"/>
            <MyButton colorToSet="green" text="Set Green"/>
            <MyButton colorToSet="blue" text="Set Blue"/>
            <div>
                <button className="btn btn-default" onClick={reset}>reset</button>
            </div>
        </>
    );
};

export default connect(
    (state) => ({
        color: state.color
    }),
    (dispatch) => ({
        reset: () => dispatch({type: "RESET"})
    })
)(ButtonContainer);