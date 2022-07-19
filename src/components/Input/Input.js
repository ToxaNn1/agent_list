import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createrSearch } from "../../Store/Reduce/reducerMain";
import { useNavigate } from "react-router";

const Input = (props) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    // states
    const [inputValue, setInputValue] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [active, setActive] = useState(false);

    const [radioName , setName] = useState('name') //default search by name
    // changes this state change search options


    useEffect(() => {
        dispatch(createrSearch(inputValue,radioName)); // put search options
    }, [inputValue]);

    const setDiagram = () => {
        navigate("diagram");
        setDisabled(!disabled);
        setActive(!active);
    };

    const setList = () => {
        navigate("/");
        setDisabled(!disabled);
        setActive(!active);
    };

    const getValue = (e)=>{
        setInputValue(e.target.value)
        setName(props.radioName) // change search options
        // radionName from input radio
    }

    return (
        <>
            <div className="search-block">
                <input
                    disabled={disabled}
                    onChange={(e) => getValue(e)}
                    className="input"
                    type="text"
                    placeholder={`Search by ${props.radioName}`} // change placeholer
                />
                <button className="button">Search</button>
            </div>
            <div className="block-chart">
                {active ? (
                    <button onClick={setList} className="button-chart">
                        show list
                    </button>
                ) : (
                    <button onClick={setDiagram} className="button-chart">
                        show diagram
                    </button>
                )}
            </div>
        </>
    );
};

export default Input;
