import React, { useState } from 'react'
import { UserData } from "./Data";
import BarChart from '../../components/charts/BarChart';
import LineChart from '../../components/charts/LineChart';
import PieChart from '../../components/charts/PieChart';
import DoughnutChart from '../../components/charts/DoughnutChart';


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
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });
    return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 items-center">
        <div className="flex justify-center items-center">
            <BarChart chartData={userData} />
        </div>
        <div className="flex justify-center items-center">
            <LineChart chartData={userData} />
        </div>
        <div className="flex justify-center items-center">
            <PieChart chartData={userData} />
        </div>
        <div className="flex justify-center items-center">
            <DoughnutChart chartData={userData} />
        </div>
    </div>
    )
}

export default OrgAnalytics;