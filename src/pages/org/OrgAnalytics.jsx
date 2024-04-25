import React from 'react'
import { ParticipantDistribution, LikedEvents, OrgVisits, FollowersGained } from "./Data";
import BarChart from '../../components/charts/BarChart';
import LineChart from '../../components/charts/LineChart';
import PieChart from '../../components/charts/PieChart';
import ScatterChart from '../../components/charts/ScatterChart';

const OrgAnalytics = () => {
    const PD = {
        labels: ParticipantDistribution.map((data) => data.category),
        datasets: [
            {
                label: "Number of participants",
                data: ParticipantDistribution.map((data) => data.participants),
                backgroundColor: [
                    "violet",
                    "indigo",
                    "blue",
                    "green",
                    "yellow",
                    "orange",
                    "red"
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ]
    }

    const LE = {
        labels: LikedEvents.map((data) => data.category),
        datasets: [
            {
                label: "Number of likes",
                data: LikedEvents.map((data) => data.likes),
                backgroundColor: [
                    "violet",
                    "indigo",
                    "blue",
                    "green",
                    "yellow",
                    "orange",
                    "red"
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ]
    }

    const OV = {
        labels: OrgVisits.map((data) => data.day),
        datasets: [
            {
                label: "Organization visits",
                data: OrgVisits.map((data) => data.visits),
                backgroundColor: [
                    "violet",
                    "indigo",
                    "blue",
                    "green",
                    "yellow",
                    "orange",
                    "red"
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ]
    }

    const FG = {
        labels: FollowersGained.map((data) => data.year),
        datasets: [
            {
                label: "Followers Gained",
                data: FollowersGained.map((data) => data.followersGained),
                backgroundColor: [
                    "violet",
                    "indigo",
                    "blue",
                    "green",
                    "yellow",
                    "orange",
                    "red"
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ]
    }

    return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 items-center">
        <div className="w-96 m-auto">
            <LineChart chartData={OV} />
        </div>
        <div className="w-72 m-auto">
            <PieChart chartData={PD} />
        </div>
        <div className="w-96 m-auto">
            <BarChart chartData={LE} />
        </div>
        <div className="w-96 m-auto">
            <ScatterChart chartData={FG} />
        </div>
    </div>
    )
}

export default OrgAnalytics;