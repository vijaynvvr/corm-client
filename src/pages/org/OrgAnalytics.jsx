import React, { useState } from 'react'
import { EventData, UserData } from "./Data";
import BarChart from '../../components/charts/BarChart';
import LineChart from '../../components/charts/LineChart';
import PieChart from '../../components/charts/PieChart';
import ScatterChart from '../../components/charts/ScatterChart';

const OrgAnalytics = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: UserData.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                    "#2a71e0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });
    const [eventData, setEventData] = useState({
        labels: EventData.map((data) => data.category),
        datasets: [
            {
                label: "Number of participants",
                data: EventData.map((data) => data.participants),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ]
    })
    return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 items-center">
        <div className="w-96 m-auto">
            <LineChart chartData={eventData} />
        </div>
        <div className="w-72 m-auto">
            <PieChart chartData={eventData} />
        </div>
        <div className="w-96 m-auto">
            <BarChart chartData={eventData} />
        </div>
        <div className="w-96 m-auto">
            <ScatterChart chartData={userData} />
        </div>
    </div>
    )
}

export default OrgAnalytics;