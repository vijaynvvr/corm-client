import React, {useState, useEffect} from "react";
import EventCard from '../../components/EventCard';
import ProfileCard from '../../components/ProfileCard';
import { useLocation  } from 'react-router-dom';
import api from "../../api";
import sample_logo from "../../assets/user_profile.jpg";

const OrgPortfolio = () => {
    const location = useLocation();
    const orgId = location.pathname.split("/")[2]
    const [orgData, setOrgData] = useState(null);
    const [events, setEvents] = useState({
        previous: [],
        upcoming: []
    })
    useEffect(() => {
        const fetchOrgList = async () => {
            const {data} = await api.get(`/organization/getPortfolio/${orgId}`);
            setOrgData(data.org);
            if (data.org?.events.length) {
                setEvents({
                    previous: data.org.events.filter(event => new Date(event.eventTime) < new Date()),
                    upcoming: data.org.events.filter(event => new Date(event.eventTime) > new Date())
                })
            }
        }
        fetchOrgList();
    }, []);

    if (!orgData) return <p>Loading...</p>;

	return (
		<div className="w-full py-4 flex flex-col gap-8 items-center">
			<div className="w-10/12 flex flex-col-reverse md:flex-row gap-8">
				<div className="w-full md:w-7/12 py-4 space-y-2 rounded-b-xl">
					<h3 className="font-bold text-2xl md:text-3xl">
						{orgData.name}
					</h3>
					<p className="text-base md:text-lg">
						{orgData.about}
					</p>
				</div>
				<img
					src={orgData.logo.url}
					alt="event-img"
					className="w-full md:w-5/12 h-64 rounded-lg"
				></img>
			</div>
			<div className="w-10/12 space-y-2 text-base">
				<h1 className="text-2xl font-semibold">Organization Info</h1>
				<table className="w-full border border-gray-400 text-center">
					<thead>
						<tr className="bg-gray-200">
							<th className="py-2 border-b border-gray-400">
								Visits
							</th>
							<th className="py-2 border-b border-gray-400">
								Followers
							</th>
							<th className="py-2 border-b border-gray-400">
								Team Members
							</th>
							<th className="py-2 border-b border-gray-400">
								Events
							</th>
							<th className="py-2 border-b border-gray-400">
								Type
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="bg-gray-100">
							<td className="py-2">{orgData.visits.length}</td>
							<td className="py-2">{orgData.followers.length}</td>
							<td className="py-2">{orgData.members.length}</td>
							<td className="py-2">{orgData.events.length}</td>
							<td className="py-2">{orgData.type}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="w-10/12 space-y-4">
				<h1 className="text-2xl font-semibold">Upcoming Events</h1>
				<div className="flex flex-wrap gap-4">
                    {events.upcoming.length ? (
                        events.upcoming.map(event => (
                            <EventCard
                                key={event._id}
                                id={event._id}
                                img={event.logo.url}
                                title={event.title}
                                category={event.category}
                                organization={orgData.name}
                                date={event.eventTime}
                                time={event.createdAt}
                            />
                        ))) : (
                            'No events to display'
                        )
                    }
				</div>
			</div>
			<div className="w-10/12 space-y-4">
				<h1 className="text-2xl font-semibold">Previous Events</h1>
				<div className="flex flex-wrap gap-4">
                    {events.previous.length ? (
                        events.previous.map(event => (
                            <EventCard
                                key={event._id}
                                id={event._id}
                                img={event.logo.url}
                                title={event.title}
                                category={event.category}
                                organization={orgData.name}
                                date={event.eventTime}
                                time={event.createdAt}
                            />
                        ))) : (
                            'No events to display'
                        )
                    }
				</div>
			</div>
			<div className="w-10/12 space-y-4">
				<h1 className="text-2xl font-semibold">Team Members</h1>
				<div className="flex flex-wrap gap-4">
                    <ProfileCard logo={orgData.president.logo.url ? orgData.president.logo.url : sample_logo} name={orgData.president.firstName}/>
				</div>
			</div>
		</div>
	);
};

export default OrgPortfolio;
