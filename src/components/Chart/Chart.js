import React, { useState, useEffect } from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { createrStart, createrSort } from "../../Store/Reduce/reducerMain";
import "chart.js/auto";
const Chart = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(createrStart());
    }, []);

    const allData = useSelector((state) => state?.information);

    let newArr = allData?.map((item) => {
        return { date: item.date, calls: item.calls, status: item.status }; // return arr whith obj{date,calls,status}
    });

    function getCountCalls(arr, year, status) {
        return arr
            ?.filter((item) => item.date.includes(`${year}`) && item.status === status) // add to arr calls with date which includes 2021 and status true or false
            .map((item) => {
                if (item.calls) {
                    return item.calls;
                } else {
                    return;
                }
            }) // return arr with calls
            .reduce((a, b) => a + b, 0); // return sum number of all calls
    }

    let countFor2021T = getCountCalls(newArr, 2021, true); //status True
    let countFor2021F = getCountCalls(newArr, 2021, false); // status false

    let countFor2022T = getCountCalls(newArr, 2022, true); // status true
    let countFor2022F = getCountCalls(newArr, 2022, false); // status false


    const state = {
        labels: [
            "All calls for 2021",
            "All calls from 2022",
            "Calls for 2021 with status false",
            "Calls for 2021 with status true",
            "Calls for 2022 with status false",
            "Calls for 2022 with status true",
        ],
        datasets: [
            {
                label: "text",
                backgroundColor: ["#7867BF", "#47467B", "#984063", "#F64668", "#F7B1C3", "#FDC131"],
                data: [
                    countFor2021T + countFor2021F,
                    countFor2022T + countFor2022F,
                    countFor2021F,
                    countFor2021T,
                    countFor2022F,
                    countFor2022T,
                ],
            },
        ],
    };
    return (
        <div className="wrraper-chart">
            <div className="chart">
                <Doughnut
                    data={state}
                    options={{
                        title: {
                            display: true,
                            fontSize: 22,
                        },
                        legend: {
                            display: true,
                            position: "right",
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default Chart;
