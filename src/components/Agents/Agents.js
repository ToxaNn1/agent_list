import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createrStart, createrSort } from "../../Store/Reduce/reducerMain";
import Agent from "../Agent/Agent";

const Agents = () => {
    const dispatch = useDispatch();
    const [active, setActive] = useState(false);

    useEffect(() => {
        dispatch(createrStart());
    }, [dispatch]);

    const allData = useSelector((state) => state?.information);

    const sortData = (e) => {
        let id = e.target.id;
        setActive(!active); // change data order
        dispatch(createrSort({ id, active }));
    };

    return (
        <div className="wrapper">
            <table className="container-agent">
                <thead className="headers-block">
                    <tr className='header-table'>
                        <th id="id" onClick={(e) => sortData(e)} className="headers">
                            id
                        </th>
                        <th id="name" onClick={(e) => sortData(e)} className="headers">
                            Name
                        </th>
                        <th id="surname" onClick={(e) => sortData(e)} className="headers">
                            Surname
                        </th>
                        <th id="email" onClick={(e) => sortData(e)} className="headers">
                            Email
                        </th>
                        <th id="phone" onClick={(e) => sortData(e)} className="headers">
                            Phone
                        </th>
                        <th id="status" onClick={(e) => sortData(e)} className="headers">
                            Status
                        </th>
                        <th id="date" onClick={(e) => sortData(e)} className="headers">
                            Date
                        </th>
                        <th id="calls" onClick={(e) => sortData(e)} className="headers">
                            Calls
                        </th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {allData?.map((item, index) => {
                        return (
                            <Agent
                                key={index}
                                id={item.id}
                                name={item.name}
                                surname={item.surname}
                                email={item.email}
                                phone={item.phone}
                                status={item.status}
                                date={item.date}
                                calls={item.calls}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Agents;
