import React, { useState } from "react";
import Input from "../Input/Input";

const Filter = () => {
    const [radioName, setRadioName] = useState("name"); //default search by name
    const [show, setShow] = useState(false);
    const getRadioName = (e) => {
        setRadioName(e.target.value);
    };

    return (
        <>
            <div className="filter-container">
                <h1 className="filter-header" onClick={() => setShow(!show)}>
                    Search by
                </h1>
                {/* {show ? ( */}
                <div className={show ? "radio-wrapper" : "radio-wrapper__hide"}>
                    <div className="radio-block__left">
                        <div className="radio-block">
                            <label className="radio-text">
                                Name
                                <input
                                    value={"name"}
                                    onClick={(e) => getRadioName(e)}
                                    name="radio"
                                    className="radio"
                                    type="radio"
                                    defaultChecked
                                ></input>
                            </label>
                        </div>
                        <div className="radio-block">
                            <label className="radio-text">
                                Surname
                                <input
                                    value={"surname"}
                                    onClick={(e) => getRadioName(e)}
                                    name="radio"
                                    className="radio"
                                    type="radio"
                                ></input>
                            </label>
                        </div>
                        <div className="radio-block">
                            <label className="radio-text">
                                Id
                                <input
                                    value={"id"}
                                    onClick={(e) => getRadioName(e)}
                                    name="radio"
                                    className="radio"
                                    type="radio"
                                ></input>
                            </label>
                        </div>
                        <div className="radio-block">
                            <label className="radio-text">
                                Email
                                <input
                                    value={"email"}
                                    onClick={(e) => getRadioName(e)}
                                    name="radio"
                                    className="radio"
                                    type="radio"
                                ></input>
                            </label>
                        </div>
                    </div>
                    <div className="radio-block__right">
                        <div className="radio-block">
                            <label className="radio-text">
                                Phone
                                <input
                                    value={"phone"}
                                    onClick={(e) => getRadioName(e)}
                                    name="radio"
                                    className="radio"
                                    type="radio"
                                ></input>
                            </label>
                        </div>
                        <div className="radio-block">
                            <label className="radio-text">
                                Status
                                <input
                                    value={"status"}
                                    onClick={(e) => getRadioName(e)}
                                    name="drone"
                                    className="radio"
                                    type="radio"
                                ></input>
                            </label>
                        </div>
                        <div className="radio-block">
                            <label className="radio-text">
                                Date
                                <input
                                    value={"date"}
                                    onClick={(e) => getRadioName(e)}
                                    name="radio"
                                    className="radio"
                                    type="radio"
                                ></input>
                            </label>
                        </div>
                        <div className="radio-block">
                            <label className="radio-text">
                                Calls
                                <input
                                    value={"calls"}
                                    onClick={(e) => getRadioName(e)}
                                    name="radio"
                                    className="radio"
                                    type="radio"
                                ></input>
                            </label>
                        </div>
                    </div>
                </div>
                {/* ) : null} */}
            </div>

            <Input radioName={radioName}></Input>
        </>
    );
};

export default Filter;
