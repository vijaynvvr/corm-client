import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import sample_logo from "../../assets/event_sample_logo.jpeg";
import api from "../../api";
import { FaFileDownload } from "react-icons/fa";
import { downloadAttendeesCSV } from "../../utils/report_generation";


const OrgEventAttendees = () => {
	const [eventData, setEventData] = useState(null);
	const location = useLocation();
	const eventId = location.pathname.split("/")[4];

	useEffect(() => {
		const fetchEventData = async () => {
			const { data } = await api.get(`/event/fetchAttendees/${eventId}`);
			setEventData(data.event);
		};
		fetchEventData();
	}, []);

	if (!eventData) return <p>Loading...</p>;

	return (
		<div className="w-full py-4 flex flex-col items-center space-y-4">
			<div className="w-full flex flex-col md:flex-row justify-center items-center gap-2">
				<img
					src={eventData.logo.url ? eventData.logo.url : sample_logo}
					alt="event-img"
					className="w-full md:w-24 aspect-square rounded-lg"
				></img>
				<h3 className="font-bold text-3xl">{eventData.title}</h3>
			</div>
			<div className="w-full space-y-6">
				{!eventData.participants.length ? (
					<p className="text-center">No attendees yet.</p>
				) : (
					<>
                        <div className="flex justify-around items-center">
                            <h1 className="text-center text-2xl font-medium underline">
                                Attendees List
                            </h1>
                            <button onClick={() => downloadAttendeesCSV(eventId)} className="flex items-center gap-2 px-3 py-2 bg-black hover:bg-gray-800 text-white rounded-xl">
                                <FaFileDownload />
                                Download Report
                            </button>
                        </div>
						<table className="mx-auto border-collapse border border-black">
							<thead>
								<tr className="bg-black text-white">
									<th className="text-left py-2 px-4">
										S. No.
									</th>
									<th className="text-left py-2 px-4">
										Name
									</th>
									<th className="text-left py-2 px-4">
										Email
									</th>
									<th className="text-left py-2 px-4">
										Gender
									</th>
									<th className="text-left py-2 px-4">
										Branch
									</th>
								</tr>
							</thead>
							<tbody>
								{eventData.participants.map((participant) => (
									<tr key={participant._id}>
										<td className="text-left py-2 px-4">
											1
										</td>
										<td className="text-left py-2 px-4">
											{participant.firstName}
										</td>
										<td className="text-left py-2 px-4">
											{participant.email}
										</td>
										<td className="text-left py-2 px-4">
											{participant.gender.toUpperCase()}
										</td>
										<td className="text-left py-2 px-4">
											{participant.branch.toUpperCase()}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</>
				)}
			</div>
		</div>
	);
};

export default OrgEventAttendees;
